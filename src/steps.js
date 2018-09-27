import React, { Component } from 'react';
import { View, Image, Alert, AsyncStorage} from 'react-native';
import RNFS from 'react-native-fs';

import Cam from './components/Cam';
import ImageContainer from './components/ImageContainer';
import * as actions from './actions';

export const genMessage = ({steps}, geoLoc, source) => {
  geoLoc = geoLoc || false;
  source = source || "bot";

  var keys = Object.keys(steps);
  var lastIdx = keys.length - 1;
  var lastStep = steps[keys[lastIdx]];
  let msg = null;

  console.log("\n\nSaving step", lastStep);
  if (lastStep.message){
    msg = lastStep.message;
  }

  if (msg == null) msg = lastStep.value;
  saveEntry(msg, source, geoLoc);
}

export const genGeolocation = () => {
  return navigator.geolocation.getCurrentPosition(
    (position) => {
      return JSON.stringify({lat: position.coords.latitude, lng: position.coords.longitude});
    },
    (error) => console.log({ error: error.message }),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
}

export const saveEntry = async (entry, source, geoLoc) => {
  geoLoc = geoLoc || false;

  if (geoLoc) {
   navigator.geolocation.getCurrentPosition(
     (position) => {

      let multiEntries = [
        ["ebot-"+(new Date()-0), JSON.stringify({
          time: new Date().toLocaleString(),
          type: "geo",
          orgin: "bot",
          message: {lat: position.coords.latitude, lng: position.coords.longitude},
          unix: new Date()-0
        })],
        ["ebot-"+(new Date()-0), JSON.stringify({
          time: new Date().toLocaleString(), 
          type: "entry",
          orgin: source,
          message: entry,
          unix: new Date()-0
        })]
      ];

      try {
        AsyncStorage.multiSet(multiEntries);
      } catch (error) {
        console.log(error)
      }

     },
     (error) => console.log({ error: error.message }),
     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
   );
  } else {
    try {
      await AsyncStorage.setItem("ebot-"+(new Date()-0), JSON.stringify({
          time: new Date().toLocaleString(), 
          type: "entry",
          orgin: source,
          message: entry,
          unix: new Date()-0
        }));
    } catch (error) {
      console.log(error)
    }
  }
}

export const sortKeys = (keys) => {
  return keys.sort(function(a,b){
    return parseInt(a.replace('ebot-','')) - parseInt(b.replace('ebot-',''));
  })
}

export const debugFun = async () => {
  try {
    AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiGet(sortKeys(keys))
    .then((result) => {
      exportDialog(result)
    }));
  } catch (error) {
    console.log(error)
  }
}

export const exportDialog = (dialog) => {

  /*example out put for ethno-reader*/
  // [
    // {
    //   "id": 0,
    //   "time": "25/04/2018 13:49:22",
    //   "message": "Hello, I am Ethnobot",
    //   "orgin": "bot"
    // },
    // {
    //   "id": 1,
    //   "time": "25/04/2018 13:49:22",
    //   "message": "Hello, I am Ethnobot, how are you?",
    //   "orgin": "human"
    // }
  // ]

  console.log(dialog);

  let date = new Date();
  let dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  let path = RNFS.DocumentDirectoryPath +'/dialog-'+(date-0)+'.json';

  // write the file
  RNFS.writeFile(path, String(dialog), 'utf8')
    .then((success) => {
      console.log('FILE WRITTEN!');
      wipeCachedData();
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export const wipeCachedData = () => {
  try {
    AsyncStorage.clear()
  } catch (error) {
    console.log(error)
  }
}

export default steps = [
  ////////////////////
  /* intro */
  ////////////////////

  {
    id: "intro1",
    message: 'Hello, I am Ethnobot',
    trigger: (steps) => { genMessage(steps); return "name" }
  },
  {
    id: "name",
    message: "What's your name?",
    trigger: (steps) => { genMessage(steps, true); return "intro2" }
  },
  {
    id: "intro2",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "intro3" }
  },
  {
    id: "intro3",
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: (steps) => { genMessage(steps); return "jobRole" }
  },
  {
    id: 'jobRole',
    message: "What’s your Job?",
    trigger: (steps) => { genMessage(steps); return "intro4" }
  },
  {
    id: "intro4",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "intro5" }
  },
  {
    id: "intro5",
    message: 'Today I want you to help with a specific strand of Research for the Edinburgh City Council’s Public art research Project.',
    trigger: (steps) => { genMessage(steps); return "intro6" }
  },
  {
    id: "intro6",
    message: 'You will take me on a curated experience involving three works of art; art that is transformative, contentious, and new.',
    trigger: (steps) => { genMessage(steps); return "intro7" }
  },
  {
    id: "intro7",
    message: 'Are you ready to get started?',
    trigger: (steps) => { genMessage(steps); return "intro8" }
  },
  {
    id: "intro8",
    options: [
      { value: 'Yes', label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "intro11"} },
      { value: 'No', label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "intro9"} },
    ]
  },
  {
    id: "intro9",
    message: 'Well why not?',
    trigger: (steps) => { genMessage(steps); return "intro10"}
  },
  {
    id: "intro10",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "intro7"}
  },
  {
    id: "intro11",
    message: 'Great!',
    trigger: (steps) => { genMessage(steps, true); return "Transformative"}
  },

  ////////////////////
  /* Transformative */
  ////////////////////

  {
    id: "Transformative",
    message: 'Please take me to a public work of art that is transformative...',
    trigger: (steps) => { genMessage(steps); return "trans1"}
  },
  {
    id: "trans1",
    message: 'Ok, let me know when we get there.',
    trigger: (steps) => { genMessage(steps); return "trans2"}
  },
  {
    id: "trans2",
    message: 'Are we there yet?',
    trigger: (steps) => { genMessage(steps); return "trans3"}
  },
  {
    id: "trans3",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "trans12"} },
      { value: "No", label: 'No, I got distracted', trigger: (steps) => { genMessage(steps, true); return "trans4"} },
    ]
  },
  {
    id: "trans4",
    message: 'What’s going on? Take a pic and tell me about it...',
    trigger: (steps) => { genMessage(steps); return "trans5"}
  },
  {
    id: "trans5",
    message: 'Want to take a pic?',
    trigger: (steps) => { genMessage(steps); return "trans6"}
  },
  {
    id: "trans6",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "trans7"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "trans9"} },
    ]
  },
  {
    id: "trans7",
    waitAction: true,
    component: <Cam />,
    trigger: function(){ genMessage(steps); return 'trans8' }
  },
  {
    id: "trans8",
    component: <ImageContainer />,
    trigger: function(){ genMessage(steps); return 'trans9' }
  },
  {
    id: "trans9",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "trans10"}
  },
  {
    id: "trans10",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "trans11"}
  },
  {
    id: "trans11",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "trans9"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "trans1"} },
    ]
  },
  {
    id: "trans12",
    message: 'What are we looking at? Take a pic and tell me it’s name.',
    trigger: (steps) => { genMessage(steps, true); return "trans13"}
  },
  {
    id: "trans13",
    waitAction: true,
    component: <Cam />,
    trigger: "trans14"
  },
  {
    id: "trans14",
    component: <ImageContainer />,
    trigger: "trans15"
  },
  {
    id: "trans15",
    message: '...and the name of the work?',
    trigger: (steps) => { genMessage(steps); return "trans16"}
  },
  {
    id: "trans16",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "trans17"}
  },
  {
    id: "trans17",
    message: 'Alright, I\'m gonna ask some deep questions now.',
    trigger: (steps) => { genMessage(steps); return "trans18"}
    //trigger: (steps) => { genMessage(steps); return "out9"}
  },
  {
    id: "trans18",
    message: 'Who or what is this transformative for and why?',
    trigger: (steps) => { genMessage(steps); return "trans19"}
  },
  {
    id: "trans19",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "trans20"}
  },
  {
    id: "trans20",
    message: 'Are others affected?',
    trigger: (steps) => { genMessage(steps); return "trans21"}
  },
  {
    id: "trans21",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "trans22"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "trans24"} },
    ]
  },
  {
    id: "trans22",
    message: 'Who and Why?',
    trigger: (steps) => { genMessage(steps); return "trans23"}
  },
  {
    id: "trans23",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "trans20"}
  },
  {
    id: "trans24",
    message: 'Could you please expand on the quality, taste, and appropriateness of this work of art?',
    trigger: (steps) => { genMessage(steps); return "trans25"}
  },
  {
    id: "trans25",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "trans31"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "trans26"} },
    ]
  },
  {
    id: "trans26",
    message: 'No, why not?',
    trigger: (steps) => { genMessage(steps); return "trans27"}
  },
  {
    id: "trans27",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "trans28"}
  },
  {
    id: "trans28",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "trans29"}
  },
  {
    id: "trans29",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "trans30"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "trans40"} },
    ]
  },
  {
    id: "trans30",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "trans28"}
  },
  {
    id: "trans31",
    message: 'Focus on any or all points and take a pic if it helps.',
    trigger: (steps) => { genMessage(steps); return "trans32"}
  },
  {
    id: "trans32",
    message: 'Want to take a pic?',
    trigger: (steps) => { genMessage(steps); return "trans33"}
  },
  {
    id: "trans33",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "trans34"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "trans36"} },
    ]
  },
  {
    id: "trans34",
    waitAction: true,
    component: <Cam />,
    trigger: "trans35"
  },
  {
    id: "trans35",
    component: <ImageContainer />,
    trigger: "trans36"
  },
  {
    id: "trans36",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "trans37"}
  },
  {
    id: "trans37",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "trans38"}

  },
  {
    id: "trans38",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "trans39"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "trans40"} },
    ]
  },
  {
    id: "trans39",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "trans37"}
  },
  {
    id: "trans40",
    message: 'Could you expand on the context about this work of art?',
    trigger: (steps) => { genMessage(steps); return "trans41"}
  },
  {
    id: "trans41",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "trans42"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "trans47"} },
    ]
  },
  {
    id: "trans42",
    message: 'Go on...',
    trigger: (steps) => { genMessage(steps); return "trans43"}
  },
  {
    id: "trans43",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "trans44"}
  },
  {
    id: "trans44",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "trans45"}
  },
  {
    id: "trans45",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "trans46"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "trans47"} },
    ]
  },
  {
    id: "trans46",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "trans44"}
  },
  {
    id: "trans47",
    message: 'Would you like to say anything else about this work of art or any issue related?',
    trigger: (steps) => { genMessage(steps); return "trans48"}
  },
  {
    id: "trans48",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "trans49"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "trans58"} },
    ]
  },
  {
    id: "trans49",
    message: 'Tell me about it and take a pic if it helps...',
    trigger: (steps) => { genMessage(steps); return "trans50"}
  },
  {
    id: "trans50",
    message: 'Want to take a pic?',
    trigger: (steps) => { genMessage(steps); return "trans51"}
  },
  {
    id: "trans51",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "trans52"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "trans54"} },
    ]
  },
  {
    id: "trans52",
    waitAction: true,
    component: <Cam />,
    trigger: "trans53"
  },
  {
    id: "trans53",
    component: <ImageContainer />,
    trigger: "trans54"
  },
  {
    id: "trans54",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "trans55"}
  },
  {
    id: "trans55",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "trans56"}
  },
  {
    id: "trans56",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "trans57"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "trans58"} },
    ]
  },
  {
    id: "trans57",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "trans55"}
  },
  {
    id: "trans58",
    message: 'Great let’s move on...',
    trigger: (steps) => { genMessage(steps, true); return "Contentious"}
  },

  ////////////////////
  /* Contentious */
  ////////////////////

  {
    id: "Contentious",
    message: 'Please take me to a public work of art that is contentious...',
    trigger: (steps) => { genMessage(steps); return "con1"}
  },
  {
    id: "con1",
    message: 'Ok, let me know when we get there.',
    trigger: (steps) => { genMessage(steps); return "con2"}
  },
  {
    id: "con2",
    message: 'Are we there yet?',
    trigger: (steps) => { genMessage(steps); return "con3"}
  },
  {
    id: "con3",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "con12"} },
      { value: "No", label: 'No, I got distracted', trigger: (steps) => { genMessage(steps, true); return "con4"} },
    ]
  },
  {
    id: "con4",
    message: 'What’s going on? Take a pic and tell me about it...',
    trigger: (steps) => { genMessage(steps); return "con5"}
  },
  {
    id: "con5",
    message: 'Want to take a pic?',
    trigger: (steps) => { genMessage(steps); return "con6"}
  },
  {
    id: "con6",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "con7"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "con9"} },
    ]
  },
  {
    id: "con7",
    waitAction: true,
    component: <Cam />,
    trigger: "con8"
  },
  {
    id: "con8",
    component: <ImageContainer />,
    trigger: "con9"
  },
  {
    id: "con9",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "con10"}
  },
  {
    id: "con10",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "con11"}
  },
  {
    id: "con11",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "con9"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "con1"} },
    ]
  },
  {
    id: "con12",
    message: 'What are we looking at? Take a pic and tell me it’s name.',
    trigger: (steps) => { genMessage(steps, true); return "con13"}
  },
  {
    id: "con13",
    waitAction: true,
    component: <Cam />,
    trigger: "con14"
  },
  {
    id: "con14",
    component: <ImageContainer />,
    trigger: "con15"
  },
  {
    id: "con15",
    message: 'and it’s name.',
    trigger: (steps) => { genMessage(steps); return "con16"}
  },
  {
    id: "con16",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "con17"}
  },
  {
    id: "con17",
    message: 'What makes this work of art contentious? And for whom?',
    trigger: (steps) => { genMessage(steps); return "con18"}
  },

  {
    id: "con18",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "con19"}
  },
  {
    id: "con19",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "con20"}
  },
  {
    id: "con20",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "con21"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "con22"} },
    ]
  },
  {
    id: "con21",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "con19"}
  },
  {
    id: "con22",
    message: 'Our research shows contention raises issues of inclusivity and exclusivity... Does this work of art have issues with inclusivity and exclusivity?',
    trigger: (steps) => { genMessage(steps); return "con23"}
  },
  {
    id: "con23",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "con24"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "con33"} },
    ]
  },
  {
    id: "con24",
    message: 'What are the issues and affected parties? Take a pic if it helps...',
    trigger: (steps) => { genMessage(steps); return "con25"}
  },
  {
    id: "con25",
    message: 'Want to take a pic?',
    trigger: (steps) => { genMessage(steps); return "con26"}
  },
  {
    id: "con26",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "con27"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "con29"} },
    ]
  },
  {
    id: "con27",
    waitAction: true,
    component: <Cam />,
    trigger: "con28"
  },
  {
    id: "con28",
    component: <ImageContainer />,
    trigger: "con29"
  },
  {
    id: "con29",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "con30"}
  },
  {
    id: "con30",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "con31"}
  },
  {
    id: "con31",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "con32"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "con35"} },
    ]
  },
  {
    id: "con32",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "con30"}
  },
  {
    id: "con33",
    message: 'No, how so?',
    trigger: (steps) => { genMessage(steps); return "con34"}
  },
  {
    id: "con34",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "con35"}
  },
  {
    id: "con35",
    message: 'Similarly contentious works of art have elements of trust and risk. Can you expand on either or both?',
    trigger: (steps) => { genMessage(steps); return "con36"}
  },
  {
    id: "con36",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "con37"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "con46"} },
    ]
  },
  {
    id: "con37",
    message: 'Tell me about it and take a pic if it helps...',
    trigger: (steps) => { genMessage(steps); return "con38"}
  },
  {
    id: "con38",
    message: 'Want to take a pic?',
    trigger: (steps) => { genMessage(steps); return "con39"}
  },
  {
    id: "con39",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "con40"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "con42"} },
    ]
  },
  {
    id: "con40",
    waitAction: true,
    component: <Cam />,
    trigger: "con41"
  },
  {
    id: "con41",
    component: <ImageContainer />,
    trigger: "con42"
  },
  {
    id: "con42",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "con43"}
  },
  {
    id: "con43",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "con44"}
  },
  {
    id: "con44",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "con45"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "con48"} },
    ]
  },
  {
    id: "con45",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "con43"}
  },
  {
    id: "con46",
    message: 'No, why not?',
    trigger: (steps) => { genMessage(steps); return "con47"}
  },
  {
    id: "con47",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "con48"}
  },
  {
    id: "con48",
    message: 'Would you like to say anything more about this work of art or any issue related?',
    trigger: (steps) => { genMessage(steps); return "con49"}
  },
  {
    id: "con49",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "con50"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "con59"} },
    ]
  },
  {
    id: "con50",
    message: 'Tell me about it and take a pic if it helps...',
    trigger: (steps) => { genMessage(steps); return "con51"}
  },
  {
    id: "con51",
    message: 'Want to take a pic?',
    trigger: (steps) => { genMessage(steps); return "con52"}
  },
  {
    id: "con52",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "con53"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "con55"} },
    ]
  },
  {
    id: "con53",
    waitAction: true,
    component: <Cam />,
    trigger: "con54"
  },
  {
    id: "con54",
    component: <ImageContainer />,
    trigger: "con55"
  },
  {
    id: "con55",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "con56"}
  },
  {
    id: "con56",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "con57"}
  },
  {
    id: "con57",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "con58"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "con59"} },
    ]
  },
  {
    id: "con58",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "con56"}
  },
  {
    id: "con59",
    message: 'Great let’s move on...',
    trigger: (steps) => { genMessage(steps, true); return "newArt"}
  },

  ////////////////////
  /* newArt */
  ////////////////////

  {
    id: "newArt",
    message: 'Could you please take me to a public space that could use a new work of art or somewhere where a public work of art could be replaced?',
    trigger: (steps) => { genMessage(steps); return "new1"}
  },
  {
    id: "new1",
    message: 'Ok, let me know when we get there.',
    trigger: (steps) => { genMessage(steps); return "new2"}
  },
  {
    id: "new2",
    message: 'Are we there yet?',
    trigger: (steps) => { genMessage(steps); return "new3"}
  },
  {
    id: "new3",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new12"} },
      { value: "No, I got distracted", label: 'No, I got distracted', trigger: (steps) => { genMessage(steps, true); return "new4"} },
    ]
  },
  {
    id: "new4",
    message: 'What’s going on? Take a pic and tell me about it...',
    trigger: (steps) => { genMessage(steps); return "new5"}
  },
  {
    id: "new5",
    message: 'Want to take a pic?',
    trigger: (steps) => { genMessage(steps); return "new6"}
  },
  {
    id: "new6",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new7"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new9"} },
    ]
  },
  {
    id: "new7",
    waitAction: true,
    component: <Cam />,
    trigger: "new8"
  },
  {
    id: "new8",
    component: <ImageContainer />,
    trigger: "new9"
  },
  {
    id: "new9",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new10"}
  },
  {
    id: "new10",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "new11"}
  },
  {
    id: "new11",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new9"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new1"} },
    ]
  },
  {
    id: "new12",
    message: 'Are we placing or replacing?',
    trigger: (steps) => { genMessage(steps); return "new13"}
  },
  {
    id: "new13",
    options: [
      { value: "New", label: 'New', trigger: (steps) => { genMessage(steps); return "new18"} },
      { value: "Replace", label: 'Replace', trigger: (steps) => { genMessage(steps); return "new14"} },
    ]
  },
  {
    id: "new14",
    message: 'What are we replacing and why? Please take a pic...',
    trigger: (steps) => { genMessage(steps); return "new15"}
  },
  {
    id: "new15",
    waitAction: true,
    component: <Cam />,
    trigger: "new16"
  },
  {
    id: "new16",
    component: <ImageContainer />,
    trigger: "new17"
  },
  {
    id: "new17",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new29"}
  },
  {
    id: "new18",
    message: 'Where are we? Take a pic too',
    trigger: (steps) => { genMessage(steps, true); return "new19"}
  },
  {
    id: "new19",
    waitAction: true,
    component: <Cam />,
    trigger: "new20"
  },
  {
    id: "new20",
    component: <ImageContainer />,
    trigger: "new21"
  },
  {
    id: "new21",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new22"}
  },
  {
    id: "new22",
    message: 'Why have you chosen this place?',
    trigger: (steps) => { genMessage(steps); return "new23"}
  },
  {
    id: "new23",
    message: 'Add a pic if it helps...',
    trigger: (steps) => { genMessage(steps); return "new24"}
  },
  {
    id: "new24",
    message: 'Want to take a pic?',
    trigger: (steps) => { genMessage(steps); return "new25"}
  },
  {
    id: "new25",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new26"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new28"} },
    ]
  },
  {
    id: "new26",
    waitAction: true,
    component: <Cam />,
    trigger: "new27"
  },
  {
    id: "new27",
    component: <ImageContainer />,
    trigger: "new28"
  },
  {
    id: "new28",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new29"}
  },
  {
    id: "new29",
    message: 'How does this disrupt the space? And who will be affected and why?',
    trigger: (steps) => { genMessage(steps); return "new30"}
  },
  {
    id: "new30",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new31"}
  },
  {
    id: "new31",
    message: 'Could you list the agencies, parties and individuals that should be involved for placing a work of art here?',
    trigger: (steps) => { genMessage(steps); return "new32"}
  },
  {
    id: "new32",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new33"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new38"} },
    ]
  },
  {
    id: "new33",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new34"}
  },
  {
    id: "new34",
    message: 'Is that all?',
    trigger: (steps) => { genMessage(steps); return "new35"}
  },
  {
    id: "new35",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new40"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new36"} },
    ]
  },
  {
    id: "new36",
    message: 'Go on...',
    trigger: (steps) => { genMessage(steps); return "new37"}
  },
  {
    id: "new37",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new34"}
  },
  {
    id: "new38",
    message: 'No, why not?',
    trigger: (steps) => { genMessage(steps); return "new39"}
  },
  {
    id: "new39",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new40"}
  },
  {
    id: "new40",
    message: 'Our research shows the process for a public art project can lack transparency for interested parties. Given the place and potentiality for a work of art here, can you imagine what a transparent process would be?',
    trigger: (steps) => { genMessage(steps); return "new41"}
  },
  {
    id: "new41",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new42"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new47"} },
    ]
  },
  {
    id: "new42",
    message: 'Please give me insight by steps or association and order-of groups involved.',
    trigger: (steps) => { genMessage(steps); return "new43"}
  },
  {
    id: "new43",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new44"}
  },
  {
    id: "new44",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "new45"}
  },
  {
    id: "new45",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new46"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new49"} },
    ]
  },
  {
    id: "new46",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new44"}
  },
  {
    id: "new47",
    message: 'No, why not?',
    trigger: (steps) => { genMessage(steps); return "new48"}
  },
  {
    id: "new48",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new49"}
  },
  {
    id: "new49",
    message: 'Well, that’s a lot to think about... Are there any other issues that you would like to address in the context of process?',
    trigger: (steps) => { genMessage(steps); return "new50"}
  },
  {
    id: "new50",
    options: [
      { value: "Authority & Responsibility", label: 'Authority & Responsibility', trigger: (steps) => { genMessage(steps); return "new51"} },
      { value: "Funding & Maintenance", label: 'Funding & Maintenance', trigger: (steps) => { genMessage(steps); return "new51"} },
      { value: "Quality, Taste, & Appropriateness", label: 'Quality, Taste, & Appropriateness', trigger: (steps) => { genMessage(steps); return "new51"} },
      { value: "Empowerment", label: 'Empowerment', trigger: (steps) => { genMessage(steps); return "new51"} },
      { value: "Expertise", label: 'Expertise', trigger: (steps) => { genMessage(steps); return "new51"} },
      { value: "Audience", label: 'Audience', trigger: (steps) => { genMessage(steps); return "new51"}  },
      { value: "Job roles", label: 'Job roles', trigger: (steps) => { genMessage(steps); return "new51"} },
      { value: "Other", label: 'Other', trigger: (steps) => { genMessage(steps); return "new51"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new72"} },
    ]
  },
  {
    id: "new51",
    message: 'Please explain, add a pic if it helps',
    trigger: (steps) => { genMessage(steps); return "new52"}
  },
  {
    id: "new52",
    message: 'Want to take a pic?',
    trigger: (steps) => { genMessage(steps); return "new53"}
  },
  {
    id: "new53",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new54"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new56"} },
    ]
  },
  {
    id: "new54",
    waitAction: true,
    component: <Cam />,
    trigger: "new55"
  },
  {
    id: "new55",
    component: <ImageContainer />,
    trigger: "new56"
  },
  {
    id: "new56",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new57"}
  },
  {
    id: "new57",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "new58"}
  },
  {
    id: "new58",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new59"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new60"} },
    ]
  },
  {
    id: "new59",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new57"}
  },
  {
    id: "new60",
    message: 'Would you Like to address a different issue?',
    trigger: (steps) => { genMessage(steps); return "new61"}
  },
  {
    id: "new61",
    options: [
      { value: "Authority & Responsibility", label: 'Authority & Responsibility', trigger: (steps) => { genMessage(steps); return "new62"} },
      { value: "Funding & Maintenance", label: 'Funding & Maintenance', trigger: (steps) => { genMessage(steps); return "new62"} },
      { value: "Quality, Taste, & Appropriateness", label: 'Quality, Taste, & Appropriateness', trigger: (steps) => { genMessage(steps); return "new62"} },
      { value: "Empowerment", label: 'Empowerment', trigger: (steps) => { genMessage(steps); return "new62"} },
      { value: "Expertise", label: 'Expertise', trigger: (steps) => { genMessage(steps); return "new62"} },
      { value: "Audience", label: 'Audience', trigger: (steps) => { genMessage(steps); return "new62"}  },
      { value: "Job roles", label: 'Job roles', trigger: (steps) => { genMessage(steps); return "new62"} },
      { value: "Other", label: 'Other', trigger: (steps) => { genMessage(steps); return "new62"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new72"} },
    ]
  },
  {
    id: "new62",
    message: 'Please explain, add a pic if it helps',
    trigger: (steps) => { genMessage(steps); return "new63"}
  },
  {
    id: "new63",
    message: 'Want to take a pic?',
    trigger: (steps) => { genMessage(steps); return "new64"}
  },
  {
    id: "new64",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new65"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new67"} },
    ]
  },
  {
    id: "new65",
    waitAction: true,
    component: <Cam />,
    trigger: "new66"
  },
  {
    id: "new66",
    component: <ImageContainer />,
    trigger: "new67"
  },
  {
    id: "new67",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new68"}
  },
  {
    id: "new68",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "new69"}
  },
  {
    id: "new69",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new70"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new60"} },
    ]
  },
  {
    id: "new70",
    message: 'Go on...',
    trigger: (steps) => { genMessage(steps); return "new71"}
  },
  {
    id: "new71",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new68"}
  },
  {
    id: "new72",
    message: 'In this place and process, what expertise does the public have to offer?',
    trigger: (steps) => { genMessage(steps); return "new73"}
  },
  {
    id: "new73",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new74"}
  },
  {
    id: "new74",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "new75"}
  },
  {
    id: "new75",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new76"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new77"} },
    ]
  },
  {
    id: "new76",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new74"}
  },
  {
    id: "new77",
    message: 'Our research indicates particular issues are left out of the conversation when logistics and process take precedent about the use of a public space. Can you reflect on...?',
    trigger: (steps) => { genMessage(steps); return "new78"}
  },
  {
    id: "new78",
    options: [
      { value: "Well Being", label: 'Well Being', trigger: (steps) => { genMessage(steps); return "new79"} },
      { value: "Fun", label: 'Fun', trigger: (steps) => { genMessage(steps); return "new78"} },
      { value: "Enjoyment & Pleasure", label: 'Enjoyment & Pleasure', trigger: (steps) => { genMessage(steps); return "new79"} },
      { value: "Education", label: 'Education', trigger: (steps) => { genMessage(steps); return "new79"} },
      { value: "Community", label: 'Community', trigger: (steps) => { genMessage(steps); return "new79"} },
      { value: "Other", label: 'Other', trigger: (steps) => { genMessage(steps); return "new79"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new100"} },
    ]
  },
  {
    id: "new79",
    message: 'Please explain, add a pic if it helps',
    trigger: (steps) => { genMessage(steps); return "new80"}
  },
  {
    id: "new80",
    message: 'Want to take a pic?',
    trigger: (steps) => { genMessage(steps); return "new81"}
  },
  {
    id: "new81",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new82"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new84"} },
    ]
  },
  {
    id: "new82",
    waitAction: true,
    component: <Cam />,
    trigger: "new83"
  },
  {
    id: "new83",
    component: <ImageContainer />,
    trigger: "new84"
  },
  {
    id: "new84",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new85"}
  },
  {
    id: "new85",
    message: 'Anything else?',
    trigger: (steps) => { genMessage(steps); return "new86"}
  },
  {
    id: "new86",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new87"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new88"} },
    ]
  },
  {
    id: "new87",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new88"}
  },
  {
    id: "new88",
    message: 'Would you Like to address a different issue?',
    trigger: (steps) => { genMessage(steps); return "new89"}
  },
  {
    id: "new89",
    options: [
      { value: "Well Being", label: 'Well Being', trigger: (steps) => { genMessage(steps); return "new90"} },
      { value: "Fun", label: 'Fun', trigger: (steps) => { genMessage(steps); return "new90"} },
      { value: "Enjoyment & Pleasure", label: 'Enjoyment & Pleasure', trigger: (steps) => { genMessage(steps); return "new90"} },
      { value: "Education", label: 'Education', trigger: (steps) => { genMessage(steps); return "new90"} },
      { value: "Community", label: 'Community', trigger: (steps) => { genMessage(steps); return "new90"} },
      { value: "Other", label: 'Other', trigger: (steps) => { genMessage(steps); return "new90"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new100"} },
    ]
  },
  {
    id: "new90",
    message: 'Please explain, add a pic if it helps',
    trigger: (steps) => { genMessage(steps); return "new91"}
  },
  {
    id: "new91",
    message: 'Want to take a pic?',
    trigger: (steps) => { genMessage(steps); return "new92"}
  },
  {
    id: "new92",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new93"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new95"} },
    ]
  },
  {
    id: "new93",
    waitAction: true,
    component: <Cam />,
    trigger: "new94"
  },
  {
    id: "new94",
    component: <ImageContainer />,
    trigger: "new95"
  },
  {
    id: "new95",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new96"}
  },
  {
    id: "new96",
    message: 'Anything else to add?',
    trigger: (steps) => { genMessage(steps); return "new97"}
  },
  {
    id: "new97",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new98"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new88"} },
    ]
  },
  {
    id: "new98",
    message: 'Go on...',
    trigger: (steps) => { genMessage(steps); return "new99"}
  },
  {
    id: "new99",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new88"}
  },
  {
    id: "new100",
    message: 'Would you like to say anything more about any issues related to our current conversation?',
    trigger: (steps) => { genMessage(steps); return "new101"}
  },
  {
    id: "new101",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new102"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "Outro"} },
    ]
  },
  {
    id: "new102",
    message: 'Tell me about it and take a pic if it helps...',
    trigger: (steps) => { genMessage(steps); return "new103"}
  },
  {
    id: "new103",
    message: 'Want to take a pic?',
    trigger: (steps) => { genMessage(steps); return "new104"}
  },
  {
    id: "new104",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new105"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "new107"} },
    ]
  },
  {
    id: "new105",
    waitAction: true,
    component: <Cam />,
    trigger: "new106"
  },
  {
    id: "new106",
    component: <ImageContainer />,
    trigger: "new107"
  },
  {
    id: "new107",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "new108"}
  },
  {
    id: "new108",
    message: 'Anything else?',
    trigger: (steps) => { genMessage(steps); return "new109"}
  },
  {
    id: "new109",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "new110"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "Outro"} },
    ]
  },
  {
    id: "new110",
    user: true,
    trigger: (steps) => { genMessage(steps, true, "human"); return "new108"}
  },

  ////////////////////
  /* Outro */
  ////////////////////

  {
    id: "Outro",
    message: 'That’s pretty much everything!',
    trigger: (steps) => { genMessage(steps); return "out1"}
  },
  {
    id: "out1",
    message: 'Thank you for your patience and participation But before you return me, do you have anything you would like to underscore or add to the conversation?',
    trigger: (steps) => { genMessage(steps); return "out2"}
  },
  {
    id: "out2",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "out3"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "out8"} },
    ]
  },
  {
    id: "out3",
    message: 'I am listening...',
    trigger: (steps) => { genMessage(steps); return "out4"}
  },
  {
    id: "out4",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "out5"}
  },
  {
    id: "out5",
    message: 'Anything else?',
    trigger: (steps) => { genMessage(steps); return "out6"}
  },
  {
    id: "out6",
    options: [
      { value: "Yes", label: 'Yes', trigger: (steps) => { genMessage(steps, false, "human"); return "out7"} },
      { value: "No", label: 'No', trigger: (steps) => { genMessage(steps, false, "human"); return "out8"} },
    ]
  },
  {
    id: "out7",
    user: true,
    trigger: (steps) => { genMessage(steps, false, "human"); return "out5"}
  },
  {
    id: "out8",
    message: 'That’s all good. You’ve been a great help towards this research....',
    trigger: (steps) => { genMessage(steps); return "out9"}
  },
  {
    id: "out9",
    message: 'Please return me to the researchers.',
    trigger: (steps) => { genMessage(steps, true); debugFun(); return "out10"}
  },
  {
    id: "out10",
    message: 'FIN.',
    end: true
  },
];
