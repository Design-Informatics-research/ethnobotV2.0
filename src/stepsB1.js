import React, { Component } from 'react';
import { View, Image, Alert} from 'react-native';
import Review from './Review';
import Cam from './Cam';
import ImageContainer from './src/ImageContainer';


export default steps = [
  {
    id: "Transformative",
    message: 'Please take me to a public work of art that is transformative...',
    trigger: "trans1"
  },
  {
    id: "trans1",
    message: 'Ok, let me know when we get there.',
    trigger: "trans2"
  },
  {
    id: "trans2",
    message: 'Are we there yet?',
    trigger: "trans3",
  },
  {
    id: "trans3",
    options: [
      { value: 1, label: 'Yes', trigger: "trans12" },
      { value: 2, label: 'No, I got distracted', trigger: "trans4" },
    ]
  },
  {
    id: "trans4",
    message: 'What’s going on? Take a pic and tell me about it...',
    trigger: "trans5",
  },
  {
    id: "trans5",
    message: 'Want to take a pic?',
    trigger: "trans6",
  },
  {
    id: "trans6",
    options: [
      { value: 1, label: 'Yes', trigger: "trans7" },
      { value: 2, label: 'No', trigger: "trans9" },
    ]
  },
  {
    id: "trans7",
    waitAction: true,
    component: <Cam />,
    trigger: "trans8"
  },
  {
    id: "trans8",
    component: <Test />,
    trigger: "trans9"
  },
  {
    id: "trans9",
    user: true,
    trigger: "trans10",
  },
  {
    id: "trans10",
    message: 'Anything else to add?',
    trigger: "trans11",
  },
  {
    id: "trans11",
    options: [
      { value: 1, label: 'Yes', trigger: "trans9" },
      { value: 2, label: 'No', trigger: "trans1" },
    ]
  },
  {
    id: "trans12",
    message: 'What are we looking at. Take a pic and tell me it’s name.',
    trigger: "trans13",
  },
  {
    id: "trans13",
    waitAction: true,
    component: <Cam />,
    trigger: "trans14"
  },
  {
    id: "trans14",
    component: <Test />,
    trigger: "trans15"
  },
  {
    id: "trans15",
    message: 'and it’s name.',
    trigger: "trans16",
  },
  {
    id: "trans16",
    user: true,
    trigger: "trans17",
  },
  {
    id: "trans17",
    message: 'Who or what is this tranformative for and why?',
    trigger: "trans18",
  },
  {
    id: "trans18",
    user: true,
    trigger: "trans19",
  },
  {
    id: "trans19",
    message: 'Are others affected?',
    trigger: "trans20",
  },
  {
    id: "trans20",
    options: [
      { value: 1, label: 'Yes', trigger: "trans21" },
      { value: 2, label: 'No', trigger: "trans23" },
    ]
  },
  {
    id: "trans21",
    message: 'Who and Why?',
    trigger: "trans22",
  },
  {
    id: "trans22",
    user: true,
    trigger: "trans19",
  },
  {
    id: "trans23",
    message: 'Could you please expand on the quality, taste, and appropiateness of this work of art?',
    trigger: "trans24",
  },
  {
    id: "trans24",
    options: [
      { value: 1, label: 'Yes', trigger: "trans30" },
      { value: 2, label: 'No', trigger: "trans25" },
    ]
  },
  {
    id: "trans25",
    message: 'No, why not?',
    trigger: "trans26",
  },
  {
    id: "trans26",
    user: true,
    trigger: "trans27",
  },
  {
    id: "trans27",
    message: 'Anything else to add?',
    trigger: "trans28",
  },
  {
    id: "trans28",
    options: [
      { value: 1, label: 'Yes', trigger: "trans29" },
      { value: 2, label: 'No', trigger: "trans39" },
    ]
  },
  {
    id: "trans29",
    user: true,
    trigger: "trans27",
  },
  {
    id: "trans30",
    message: 'Focus on any or all points and take a pic if it helps.',
    trigger: "trans31",
  },
  {
    id: "trans31",
    message: 'Want to take a pic?',
    trigger: "trans32",
  },
  {
    id: "trans32",
    options: [
      { value: 1, label: 'Yes', trigger: "trans33" },
      { value: 2, label: 'No', trigger: "trans35" },
    ]
  },
  {
    id: "trans33",
    waitAction: true,
    component: <Cam />,
    trigger: "trans34"
  },
  {
    id: "trans34",
    component: <Test />,
    trigger: "trans35"
  },
  {
    id: "trans35",
    user: true,
    trigger: "trans36",
  },
  {
    id: "trans36",
    message: 'Anything else to add?',
    trigger: "trans37",
  },
  {
    id: "trans37",
    options: [
      { value: 1, label: 'Yes', trigger: "trans38" },
      { value: 2, label: 'No', trigger: "trans39" },
    ]
  },
  {
    id: "trans38",
    user: true,
    trigger: "trans36",
  },
  {
    id: "trans39",
    message: 'Is there anything more about context that you could share?',
    trigger: "trans40",
  },
  {
    id: "trans40",
    options: [
      { value: 1, label: 'Yes', trigger: "trans41" },
      { value: 2, label: 'No', trigger: "trans45" },
    ]
  },
  {
    id: "trans41",
    message: 'Go on...',
    trigger: "trans42",
  },
  {
    id: "trans42",
    user: true,
    trigger: "trans43",
  },
  {
    id: "trans43",
    message: 'Anything else to add?',
    trigger: "trans44",
  },
  {
    id: "trans44",
    options: [
      { value: 1, label: 'Yes', trigger: "trans45" },
      { value: 2, label: 'No', trigger:  "trans46"},
    ]
  },
  {
    id: "trans45",
    user: true,
    trigger: "trans43",
  },
  {
    id: "trans46",
    message: 'Would you like to say anything else about this work of art or any issue related?',
    trigger: "trans47",
  },
  {
    id: "trans47",
    options: [
      { value: 1, label: 'Yes', trigger: "trans48" },
      { value: 2, label: 'No', trigger: "trans57" },
    ]
  },
  {
    id: "trans48",
    message: 'Tell me about it and take a pic if it helps...',
    trigger: "trans49",
  },
  {
    id: "trans49",
    message: 'Want to take a pic?',
    trigger: "trans50",
  },
  {
    id: "trans50",
    options: [
      { value: 1, label: 'Yes', trigger: "trans51" },
      { value: 2, label: 'No', trigger: "trans53" },
    ]
  },
  {
    id: "trans51",
    waitAction: true,
    component: <Cam />,
    trigger: "trans52"
  },
  {
    id: "trans52",
    component: <Test />,
    trigger: "trans53"
  },
  {
    id: "trans53",
    user: true,
    trigger: "trans54",
  },
  {
    id: "trans54",
    message: 'Anything else to add?',
    trigger: "trans55",
  },
  {
    id: "trans55",
    options: [
      { value: 1, label: 'Yes', trigger: "trans56" },
      { value: 2, label: 'No', trigger:  "trans57"},
    ]
  },
  {
    id: "trans56",
    user: true,
    trigger: "trans54",
  },
  {
    id: "trans57",
    message: 'Great let’s move on...',
    trigger: "Contentious",
  },
  {
    id: "Contentious",
    message: 'Please take me to a public work of art that is contentious...',
    end: true
  },
];

// export default steps = [
//   {
//     id: "intro1",
//     message: 'Hello, I am Ethnobot',
//     trigger: ({ value, steps }) => {
//       console.log(value)
//       // alert("Tets")
//       return "name"
//     }
//   },
//   {
//     id: "name",
//     message: "What's your name?",
//     trigger: "intro2",
//   },
//   {
//     id: "intro2",
//     user: true,
//     trigger: "intro3"
//   },
//   {
//     id: "intro3",
//     message: 'Hi {previousValue}, nice to meet you!',
//     trigger: 'jobRole',
//   },
//   {
//     id: 'jobRole',
//     message: "What’s You Job?",
//     trigger: "intro4",
//   },
//   {
//     id: "intro4",
//     user: true,
//     trigger: "intro5",
//   },
//   {
//     id: "intro5",
//     message: 'Today I want you to help with a specific strand of Research for the Edinburgh City Council’s Public art research Project.',
//     trigger: "intro6"
//   },
//   {
//     id: "intro6",
//     message: 'You will take me on a currated experience involving three works of art; art that is transformative, contentious, and new.',
//     trigger: "intro7",
//   },
//   {
//     id: "intro7",
//     message: 'Are you ready to get started?',
//     trigger: "intro8",
//   },
//   {
//     id: "intro8",
//     options: [
//       { value: 1, label: 'Yes', trigger: "intro11" },
//       { value: 2, label: 'No', trigger: "intro9" },
//     ]
//   },
//   {
//     id: "intro9",
//     message: 'Well why not?',
//     trigger: "intro10",
//   },
//   {
//     id: "intro10",
//     user: true,
//     trigger: "intro7",
//   },
//   {
//     id: "intro11",
//     message: 'Great!',
//     trigger: ({ value, steps }) => {
//       console.log("steps:",steps)
//       return 'Transformative'
//     }
//   },
//   {
//     id: "Transformative",
//     message: 'Please take me to a public work of art that is transformative...',
//     trigger: "trans1"
//   },
//   {
//     id: "trans1",
//     message: 'Ok, let me know when we get there.',
//     trigger: "trans2"
//   },
//   {
//     id: "trans2",
//     message: 'Are we there yet?',
//     trigger: "trans3",
//   },
//   {
//     id: "trans3",
//     options: [
//       { value: 1, label: 'Yes', trigger: "trans12" },
//       { value: 2, label: 'No, I got distracted', trigger: "trans4" },
//     ]
//   },
//   {
//     id: "trans4",
//     message: 'What’s going on? Take a pic and tell me about it...',
//     trigger: "trans5",
//   },
//   {
//     id: "trans5",
//     message: 'Want to take a pic?',
//     trigger: "trans6",
//   },
//   {
//     id: "trans6",
//     options: [
//       { value: 1, label: 'Yes', trigger: "trans7" },
//       { value: 2, label: 'No', trigger: "trans9" },
//     ]
//   },
//   {
//     id: "trans7",
//     waitAction: true,
//     component: <Cam />,
//     trigger: "trans8"
//   },
//   {
//     id: "trans8",
//     component: <Test />,
//     trigger: "trans9"
//   },
//   {
//     id: "trans9",
//     user: true,
//     trigger: "trans10",
//   },
//   {
//     id: "trans10",
//     message: 'Anything else to add?',
//     trigger: "trans11",
//   },
//   {
//     id: "trans11",
//     options: [
//       { value: 1, label: 'Yes', trigger: "trans9" },
//       { value: 2, label: 'No', trigger: "trans1" },
//     ]
//   },
//   {
//     id: "trans12",
//     message: 'What are we looking at. Take a pic and tell me it’s name.',
//     trigger: "trans13",
//   },
//   {
//     id: "trans13",
//     waitAction: true,
//     component: <Cam />,
//     trigger: "trans14"
//   },
//   {
//     id: "trans14",
//     component: <Test />,
//     trigger: "trans15"
//   },
//   {
//     id: "trans15",
//     message: 'and it’s name.',
//     trigger: "trans16",
//   },
//   {
//     id: "trans16",
//     user: true,
//     trigger: "trans17",
//   },
//   {
//     id: "trans17",
//     message: 'Who or what is this tranformative for and why?',
//     trigger: "trans18",
//   },
//   {
//     id: "trans18",
//     user: true,
//     trigger: "trans19",
//   },
//   {
//     id: "trans19",
//     message: 'Are others affected?',
//     trigger: "trans20",
//   },
//   {
//     id: "trans20",
//     options: [
//       { value: 1, label: 'Yes', trigger: "trans21" },
//       { value: 2, label: 'No', trigger: "trans23" },
//     ]
//   },
//   {
//     id: "trans21",
//     message: 'Who and Why?',
//     trigger: "trans22",
//   },
//   {
//     id: "trans22",
//     user: true,
//     trigger: "trans19",
//   },
//   {
//     id: "trans23",
//     message: 'Could you please expand on the quality, taste, and appropiateness of this work of art?',
//     trigger: "trans24",
//   },
//   {
//     id: "trans24",
//     options: [
//       { value: 1, label: 'Yes', trigger: "trans30" },
//       { value: 2, label: 'No', trigger: "trans25" },
//     ]
//   },
//   {
//     id: "trans25",
//     message: 'No, why not?',
//     trigger: "trans26",
//   },
//   {
//     id: "trans26",
//     user: true,
//     trigger: "trans27",
//   },
//   {
//     id: "trans27",
//     message: 'Anything else to add?',
//     trigger: "trans28",
//   },
//   {
//     id: "trans28",
//     options: [
//       { value: 1, label: 'Yes', trigger: "trans29" },
//       { value: 2, label: 'No', trigger: "trans39" },
//     ]
//   },
//   {
//     id: "trans29",
//     user: true,
//     trigger: "trans27",
//   },
//   {
//     id: "trans30",
//     message: 'Focus on any or all points and take a pic if it helps.',
//     trigger: "trans31",
//   },
//   {
//     id: "trans31",
//     message: 'Want to take a pic?',
//     trigger: "trans32",
//   },
//   {
//     id: "trans32",
//     options: [
//       { value: 1, label: 'Yes', trigger: "trans33" },
//       { value: 2, label: 'No', trigger: "trans35" },
//     ]
//   },
//   {
//     id: "trans33",
//     waitAction: true,
//     component: <Cam />,
//     trigger: "trans34"
//   },
//   {
//     id: "trans34",
//     component: <Test />,
//     trigger: "trans35"
//   },
//   {
//     id: "trans35",
//     user: true,
//     trigger: "trans36",
//   },
//   {
//     id: "trans36",
//     message: 'Anything else to add?',
//     trigger: "trans37",
//   },
//   {
//     id: "trans37",
//     options: [
//       { value: 1, label: 'Yes', trigger: "trans38" },
//       { value: 2, label: 'No', trigger: "trans39" },
//     ]
//   },
//   {
//     id: "trans38",
//     user: true,
//     trigger: "trans36",
//   },
//   {
//     id: "trans39",
//     message: 'Is there anything more about context that you could share?',
//     trigger: "trans40",
//   },
//   {
//     id: "trans40",
//     options: [
//       { value: 1, label: 'Yes', trigger: "trans41" },
//       { value: 2, label: 'No', trigger: "trans45" },
//     ]
//   },
//   {
//     id: "trans41",
//     message: 'Go on...',
//     trigger: "trans42",
//   },
//   {
//     id: "trans42",
//     user: true,
//     trigger: "trans43",
//   },
//   {
//     id: "trans43",
//     message: 'Anything else to add?',
//     trigger: "trans44",
//   },
//   {
//     id: "trans44",
//     options: [
//       { value: 1, label: 'Yes', trigger: "trans45" },
//       { value: 2, label: 'No', trigger:  "trans46"},
//     ]
//   },
//   {
//     id: "trans45",
//     user: true,
//     trigger: "trans43",
//   },
//   {
//     id: "trans46",
//     message: 'Would you like to say anything else about this work of art or any issue related?',
//     trigger: "trans47",
//   },
//   {
//     id: "trans47",
//     options: [
//       { value: 1, label: 'Yes', trigger: "trans48" },
//       { value: 2, label: 'No', trigger: "trans57" },
//     ]
//   },
//   {
//     id: "trans48",
//     message: 'Tell me about it and take a pic if it helps...',
//     trigger: "trans49",
//   },
//   {
//     id: "trans49",
//     message: 'Want to take a pic?',
//     trigger: "trans50",
//   },
//   {
//     id: "trans50",
//     options: [
//       { value: 1, label: 'Yes', trigger: "trans51" },
//       { value: 2, label: 'No', trigger: "trans53" },
//     ]
//   },
//   {
//     id: "trans51",
//     waitAction: true,
//     component: <Cam />,
//     trigger: "trans52"
//   },
//   {
//     id: "trans52",
//     component: <Test />,
//     trigger: "trans53"
//   },
//   {
//     id: "trans53",
//     user: true,
//     trigger: "trans54",
//   },
//   {
//     id: "trans54",
//     message: 'Anything else to add?',
//     trigger: "trans55",
//   },
//   {
//     id: "trans55",
//     options: [
//       { value: 1, label: 'Yes', trigger: "trans56" },
//       { value: 2, label: 'No', trigger:  "trans57"},
//     ]
//   },
//   {
//     id: "trans56",
//     user: true,
//     trigger: "trans54",
//   },
//   {
//     id: "trans57",
//     message: 'Great let’s move on...',
//     trigger: "Contentious",
//   },
//   {
//     id: "Contentious",
//     message: 'Please take me to a public work of art that is contentious...',
//     end: true
//   },
// ];
