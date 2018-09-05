import React, { Component } from 'react';
import { View, Image, Alert} from 'react-native';
import Review from './Review';
import Cam from './Cam';
import ImageContainer from './src/ImageContainer';


export default steps = [
  {
    id: "newArt",
    message: 'Could you please take me to a public space that could use a new work of art or somewhere where a pulic work of art could be replaced?',
    trigger: "new1"
  },
  {
    id: "new1",
    message: 'Ok, let me know when we get there.',
    trigger: "new2"
  },
  {
    id: "new2",
    message: 'Are we there yet?',
    trigger: "new3",
  },
  {
    id: "new3",
    options: [
      { value: 1, label: 'Yes', trigger: "new12" },
      { value: 2, label: 'No, I got distracted', trigger: "new4" },
    ]
  },
  {
    id: "new4",
    message: 'What’s going on? Take a pic and tell me about it...',
    trigger: "new5",
  },
  {
    id: "new5",
    message: 'Want to take a pic?',
    trigger: "new6",
  },
  {
    id: "new6",
    options: [
      { value: 1, label: 'Yes', trigger: "new7" },
      { value: 2, label: 'No', trigger: "new9" },
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
    component: <Test />,
    trigger: "new9"
  },
  {
    id: "new9",
    user: true,
    trigger: "new10",
  },
  {
    id: "new10",
    message: 'Anything else to add?',
    trigger: "new11",
  },
  {
    id: "new11",
    options: [
      { value: 1, label: 'Yes', trigger: "new9" },
      { value: 2, label: 'No', trigger: "new1" },
    ]
  },
  {
    id: "new12",
    message: 'Are we placing or replacing?',
    trigger: "new13",
  },
  {
    id: "new13",
    options: [
      { value: 1, label: 'New', trigger: "new18" },
      { value: 2, label: 'Replace', trigger: "new14" },
    ]
  },
  {
    id: "new14",
    message: 'What are we replacing and why? Please take a pic...',
    trigger: "new15",
  },
  {
    id: "new15",
    waitAction: true,
    component: <Cam />,
    trigger: "new16"
  },
  {
    id: "new16",
    component: <Test />,
    trigger: "new17"
  },
  {
    id: "new17",
    user: true,
    trigger: "new29",
  },
  {
    id: "new18",
    message: 'Where are we? Take a pic too',
    trigger: "new19",
  },
  {
    id: "new19",
    waitAction: true,
    component: <Cam />,
    trigger: "new20"
  },
  {
    id: "new20",
    component: <Test />,
    trigger: "new21"
  },
  {
    id: "new21",
    user: true,
    trigger: "new22",
  },
  {
    id: "new22",
    message: 'Why have you chosen this place?',
    trigger: "new23",
  },
  {
    id: "new23",
    message: 'Add a pic if it helps...',
    trigger: "new24",
  },
  {
    id: "new24",
    message: 'Want to take a pic?',
    trigger: "new25",
  },
  {
    id: "new25",
    options: [
      { value: 1, label: 'Yes', trigger: "new26" },
      { value: 2, label: 'No', trigger: "new28" },
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
    component: <Test />,
    trigger: "new28"
  },
  {
    id: "new28",
    user: true,
    trigger: "new29",
  },
  {
    id: "new29",
    message: 'How does this disrupt the space? And who will be affected and why?',
    trigger: "new30",
  },
  {
    id: "new30",
    user: true,
    trigger: "new31",
  },
  {
    id: "new31",
    message: 'Could you list the agencies, parties and individuals that should be involved for placing a work of art here?',
    trigger: "new32",
  },
  {
    id: "new32",
    options: [
      { value: 1, label: 'Yes', trigger: "new33" },
      { value: 2, label: 'No', trigger: "new37" },
    ]
  },
  {
    id: "new33",
    message: 'Is that all?',
    trigger: "new34",
  },
  {
    id: "new34",
    options: [
      { value: 1, label: 'Yes', trigger: "new39" },
      { value: 2, label: 'No', trigger: "new35" },
    ]
  },
  {
    id: "new35",
    message: 'Go on...',
    trigger: "new36",
  },
  {
    id: "new36",
    user: true,
    trigger: "new33",
  },
  {
    id: "new37",
    message: 'No, why not?',
    trigger: "new38",
  },
  {
    id: "new38",
    user: true,
    trigger: "new39",
  },
  {
    id: "new39",
    message: 'Our research shows the process for a public art project can lack transperencey for interested parties. Given the place and potentiallity for a work of art here, can you imagine what a transparent process would be?',
    trigger: "new40",
  },
  {
    id: "new40",
    options: [
      { value: 1, label: 'Yes', trigger: "new41" },
      { value: 2, label: 'No', trigger: "new46" },
    ]
  },
  {
    id: "new41",
    message: 'Please give me insight by steps or association and orderof groups involved. Feel free to tell me in a different way and take a pic if it helps.',
    trigger: "new42",
  },
  {
    id: "new42",
    user: true,
    trigger: "new43",
  },
  {
    id: "new43",
    message: 'Anything else to add?',
    trigger: "new44",
  },
  {
    id: "new44",
    options: [
      { value: 1, label: 'Yes', trigger: "new45" },
      { value: 2, label: 'No', trigger: "new48" },
    ]
  },
  {
    id: "new45",
    user: true,
    trigger: "new43",
  },
  {
    id: "new46",
    message: 'No, why not?',
    trigger: "new47",
  },
  {
    id: "new47",
    user: true,
    trigger: "new48",
  },
  {
    id: "new48",
    message: 'Well, that’s a lot to think about... Are there any other issues that you would like to address in the context of process?',
    trigger: "new49",
  },
  {
    id: "new49",
    options: [
      { value: 1, label: 'Authority & Responsibility', trigger: "new50" },
      { value: 2, label: 'Funding & Maintenance', trigger: "new50" },
      { value: 3, label: 'Quality, Taste, & Appropriateness', trigger: "new50" },
      { value: 4, label: 'Empowerment', trigger: "new50" },
      { value: 5, label: 'Expertise', trigger: "new50" },
      { value: 6, label: 'Audience', trigger: "new50" },
      { value: 7, label: 'Job roles', trigger: "new50" },
      { value: 8, label: 'Other', trigger: "new50" },
      { value: 9, label: 'No', trigger: "new71" },
    ]
  },
  {
    id: "new50",
    message: 'Please explain, add a pic if it helps',
    trigger: "new51",
  },
  {
    id: "new51",
    message: 'Want to take a pic?',
    trigger: "new52",
  },
  {
    id: "new52",
    options: [
      { value: 1, label: 'Yes', trigger: "new53" },
      { value: 2, label: 'No', trigger: "new55" },
    ]
  },
  {
    id: "new53",
    waitAction: true,
    component: <Cam />,
    trigger: "new54"
  },
  {
    id: "new54",
    component: <Test />,
    trigger: "new55"
  },
  {
    id: "new55",
    user: true,
    trigger: "new56",
  },
  {
    id: "new56",
    message: 'Anything else to add?',
    trigger: "new57",
  },
  {
    id: "new57",
    options: [
      { value: 1, label: 'Yes', trigger: "new58" },
      { value: 2, label: 'No', trigger: "new59" },
    ]
  },
  {
    id: "new58",
    user: true,
    trigger: "new56",
  },
  {
    id: "new59",
    message: 'Would you Like to address a different issue?',
    trigger: "new60",
  },
  {
    id: "new60",
    options: [
      { value: 1, label: 'Authority & Responsibility', trigger: "new61" },
      { value: 2, label: 'Funding & Maintenance', trigger: "new61" },
      { value: 3, label: 'Quality, Taste, & Appropriateness', trigger: "new61" },
      { value: 4, label: 'Empowerment', trigger: "new61" },
      { value: 5, label: 'Expertise', trigger: "new61" },
      { value: 6, label: 'Audience', trigger: "new61" },
      { value: 7, label: 'Job roles', trigger: "new61" },
      { value: 8, label: 'Other', trigger: "new61" },
      { value: 9, label: 'No', trigger: "new71" },
    ]
  },
  {
    id: "new61",
    message: 'Please explain, add a pic if it helps',
    trigger: "new62",
  },
  {
    id: "new62",
    message: 'Want to take a pic?',
    trigger: "new63",
  },
  {
    id: "new63",
    options: [
      { value: 1, label: 'Yes', trigger: "new64" },
      { value: 2, label: 'No', trigger: "new66" },
    ]
  },
  {
    id: "new64",
    waitAction: true,
    component: <Cam />,
    trigger: "new65"
  },
  {
    id: "new65",
    component: <Test />,
    trigger: "new66"
  },
  {
    id: "new66",
    user: true,
    trigger: "new67",
  },
  {
    id: "new67",
    message: 'Anything else to add?',
    trigger: "new68",
  },
  {
    id: "new68",
    options: [
      { value: 1, label: 'Yes', trigger: "new69" },
      { value: 2, label: 'No', trigger: "new71" },
    ]
  },
  {
    id: "new69",
    message: 'Go on...',
    trigger: "new70",
  },
  {
    id: "new70",
    user: true,
    trigger: "new67",
  },
  {
    id: "new71",
    message: 'In this place and process, what expertise does the public have to offer?',
    trigger: "new72",
  },
  {
    id: "new72",
    user: true,
    trigger: "new73",
  },
  {
    /*THIS SHOULD WOKR*/
    id: "new73",
    message: 'Anything else to add?',
    trigger: "new74",
  },
  {
    id: "new74",
    options: [
      { value: 1, label: 'Yes', trigger: "new75" },
      { value: 2, label: 'No', trigger: "new76" },
    ]
  },
  {
    id: "new75",
    user: true,
    trigger: "new73",
  },
  {
    id: "new76",
    message: 'Our research indicates particular issues are left out of conversation when logtistics and process take precedent about the use of a public space. Can you reflect on...?',
    trigger: "new77",
  },
  {
    id: "new77",
    options: [
      { value: 1, label: 'Well Being', trigger: "new78" },
      { value: 2, label: 'Fun', trigger: "new78" },
      { value: 3, label: 'Enjoyment & Pleasure', trigger: "new78" },
      { value: 4, label: 'Education', trigger: "new78" },
      { value: 5, label: 'Community', trigger: "new78" },
      { value: 6, label: 'Other', trigger: "new78" },
      { value: 7, label: 'No', trigger: "new82" },
    ]
  },
  {
    id: "new78",
    user: true,
    trigger: "new79",
  },
  {
    id: "new79",
    message: 'Anything else?',
    trigger: "new80",
  },
  {
    id: "new80",
    options: [
      { value: 1, label: 'Yes', trigger: "new81" },
      { value: 2, label: 'No', trigger: "new82" },
    ]
  },
  {
    id: "new81",
    user: true,
    trigger: "new79",
  },
  {
    id: "new82",
    message: 'Would you like to say anything more about any issues related to our current conversation?',
    trigger: "new83",
  },
  {
    id: "new83",
    options: [
      { value: 1, label: 'Yes', trigger: "new84" },
      { value: 2, label: 'No', trigger:  "Outro" },
    ]
  },
  {
    id: "new84",
    message: 'Tell me about it and take a pic if it helps...',
    trigger: "new85",
  },
  {
    id: "new85",
    message: 'Want to take a pic?',
    trigger: "new85",
  },
  {
    id: "new86",
    options: [
      { value: 1, label: 'Yes', trigger: "new87" },
      { value: 2, label: 'No', trigger: "new89" },
    ]
  },
  {
    id: "new87",
    waitAction: true,
    component: <Cam />,
    trigger: "new88"
  },
  {
    id: "new88",
    component: <Test />,
    trigger: "new89"
  },
  {
    id: "new89",
    user: true,
    trigger: "new90",
  },
  {
    id: "new90",
    message: 'Anything else?',
    trigger: "new91",
  },
  {
    id: "new91",
    options: [
      { value: 1, label: 'Yes', trigger: "new92" },
      { value: 2, label: 'No', trigger:  "Outro"},
    ]
  },
  {
    id: "new92",
    user: true,
    trigger: "new90",
  },
  {
    id: "Outro",
    message: 'Outro',
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
//     message: 'What are we looking at? Take a pic and tell me it’s name.',
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
  // {
  //   id: "Contentious",
  //   message: 'Please take me to a public work of art that is contentious...',
  //   trigger: "con1"
  // },
  // {
  //   id: "con1",
  //   message: 'Ok, let me know when we get there.',
  //   trigger: "con2"
  // },
  // {
  //   id: "con2",
  //   message: 'Are we there yet?',
  //   trigger: "con3",
  // },
  // {
  //   id: "con3",
  //   options: [
  //     { value: 1, label: 'Yes', trigger: "con12" },
  //     { value: 2, label: 'No, I got distracted', trigger: "con4" },
  //   ]
  // },
  // {
  //   id: "con4",
  //   message: 'What’s going on? Take a pic and tell me about it...',
  //   trigger: "con5",
  // },
  // {
  //   id: "con5",
  //   message: 'Want to take a pic?',
  //   trigger: "con6",
  // },
  // {
  //   id: "con6",
  //   options: [
  //     { value: 1, label: 'Yes', trigger: "con7" },
  //     { value: 2, label: 'No', trigger: "con9" },
  //   ]
  // },
  // {
  //   id: "con7",
  //   waitAction: true,
  //   component: <Cam />,
  //   trigger: "con8"
  // },
  // {
  //   id: "con8",
  //   component: <Test />,
  //   trigger: "con9"
  // },
  // {
  //   id: "con9",
  //   user: true,
  //   trigger: "con10",
  // },
  // {
  //   id: "con10",
  //   message: 'Anything else to add?',
  //   trigger: "con11",
  // },
  // {
  //   id: "con11",
  //   options: [
  //     { value: 1, label: 'Yes', trigger: "con9" },
  //     { value: 2, label: 'No', trigger: "con1" },
  //   ]
  // },
  // {
  //   id: "con12",
  //   message: 'What are we looking at? Take a pic and tell me it’s name.',
  //   trigger: "con13",
  // },
  // {
  //   id: "con13",
  //   waitAction: true,
  //   component: <Cam />,
  //   trigger: "con14"
  // },
  // {
  //   id: "con14",
  //   component: <Test />,
  //   trigger: "con15"
  // },
  // {
  //   id: "con15",
  //   message: 'and it’s name.',
  //   trigger: "con16",
  // },
  // {
  //   id: "con16",
  //   user: true,
  //   trigger: "con17",
  // },
  // {
  //   id: "con17",
  //   message: 'What makes this work of art contentious? And for whom?',
  //   trigger: "con18",
  // },
  // {
  //   id: "con18",
  //   user: true,
  //   trigger: "con19",
  // },
  // {
  //   id: "con19",
  //   message: 'Anything else to add?',
  //   trigger: "con20",
  // },
  // {
  //   id: "con20",
  //   options: [
  //     { value: 1, label: 'Yes', trigger: "con21" },
  //     { value: 2, label: 'No', trigger: "con22" },
  //   ]
  // },
  // {
  //   id: "con21",
  //   user: true,
  //   trigger: "con19",
  // },
  // {
  //   id: "con22",
  //   message: 'Our research shows contention raises issues of inlcusivity and exculsivity... Does this work of art have issues with inlcusivity and exclusivity?',
  //   trigger: "con23",
  // },
  // {
  //   id: "con23",
  //   options: [
  //     { value: 1, label: 'Yes', trigger: "con24" },
  //     { value: 2, label: 'No', trigger:  "con33" },
  //   ]
  // },
  // {
  //   id: "con24",
  //   message: 'What are the issues and affected parties? Take a pic if it helps...',
  //   trigger: "con25",
  // },
  // {
  //   id: "con25",
  //   message: 'Want to take a pic?',
  //   trigger: "con26",
  // },
  // {
  //   id: "con26",
  //   options: [
  //     { value: 1, label: 'Yes', trigger: "con27" },
  //     { value: 2, label: 'No', trigger: "con29" },
  //   ]
  // },
  // {
  //   id: "con27",
  //   waitAction: true,
  //   component: <Cam />,
  //   trigger: "con28"
  // },
  // {
  //   id: "con28",
  //   component: <Test />,
  //   trigger: "con29"
  // },
  // {
  //   id: "con29",
  //   user: true,
  //   trigger: "con30",
  // },
  // {
  //   id: "con30",
  //   message: 'Anything else to add?',
  //   trigger: "con31",
  // },
  // {
  //   id: "con31",
  //   options: [
  //     { value: 1, label: 'Yes', trigger: "con32" },
  //     { value: 2, label: 'No', trigger:  "con35"},
  //   ]
  // },
  // {
  //   id: "con32",
  //   user: true,
  //   trigger: "con30",
  // },
  // {
  //   id: "con33",
  //   message: 'No, how so?',
  //   trigger: "con34",
  // },
  // {
  //   id: "con34",
  //   user: true,
  //   trigger: "con35",
  // },
  // {
  //   id: "con35",
  //   message: 'Similarly contentious works of art have element of trust and risk. Can you expand on either or both?',
  //   trigger: "con36",
  // },
  // {
  //   id: "con36",
  //   options: [
  //     { value: 1, label: 'Yes', trigger: "con37" },
  //     { value: 2, label: 'No', trigger:  "con46" },
  //   ]
  // },
  // {
  //   id: "con37",
  //   message: 'Tell me about it and take a pic if it helps...',
  //   trigger: "con38",
  // },
  // {
  //   id: "con38",
  //   message: 'Want to take a pic?',
  //   trigger: "con39",
  // },
  // {
  //   id: "con39",
  //   options: [
  //     { value: 1, label: 'Yes', trigger: "con40" },
  //     { value: 2, label: 'No', trigger: "con42" },
  //   ]
  // },
  // {
  //   id: "con40",
  //   waitAction: true,
  //   component: <Cam />,
  //   trigger: "con41"
  // },
  // {
  //   id: "con41",
  //   component: <Test />,
  //   trigger: "con42"
  // },
  // {
  //   id: "con42",
  //   user: true,
  //   trigger: "con43",
  // },
  // {
  //   id: "con43",
  //   message: 'Anything else to add?',
  //   trigger: "con44",
  // },
  // {
  //   id: "con44",
  //   options: [
  //     { value: 1, label: 'Yes', trigger: "con45" },
  //     { value: 2, label: 'No', trigger:  "con48"},
  //   ]
  // },
  // {
  //   id: "con45",
  //   user: true,
  //   trigger: "con43",
  // },
  // {
  //   id: "con46",
  //   message: 'No, why not?',
  //   trigger: "con47",
  // },
  // {
  //   id: "con47",
  //   user: true,
  //   trigger: "con48",
  // },
  // {
  //   id: "con48",
  //   message: 'Would you like to say anything more about this work of art or any issue related?',
  //   trigger: "con49",
  // },
  // {
  //   id: "con49",
  //   options: [
  //     { value: 1, label: 'Yes', trigger: "con50" },
  //     { value: 2, label: 'No', trigger: "con59" },
  //   ]
  // },
  // {
  //   id: "con50",
  //   message: 'Tell me about it and take a pic if it helps...',
  //   trigger: "con51",
  // },
  // {
  //   id: "con51",
  //   message: 'Want to take a pic?',
  //   trigger: "con52",
  // },
  // {
  //   id: "con52",
  //   options: [
  //     { value: 1, label: 'Yes', trigger: "con53" },
  //     { value: 2, label: 'No', trigger: "con55" },
  //   ]
  // },
  // {
  //   id: "con53",
  //   waitAction: true,
  //   component: <Cam />,
  //   trigger: "con54"
  // },
  // {
  //   id: "con54",
  //   component: <Test />,
  //   trigger: "con55"
  // },
  // {
  //   id: "con55",
  //   user: true,
  //   trigger: "con56",
  // },
  // {
  //   id: "con56",
  //   message: 'Anything else to add?',
  //   trigger: "con57",
  // },
  // {
  //   id: "con57",
  //   options: [
  //     { value: 1, label: 'Yes', trigger: "con58" },
  //     { value: 2, label: 'No', trigger:  "con59"},
  //   ]
  // },
  // {
  //   id: "con58",
  //   user: true,
  //   trigger: "con56",
  // },
  // {
  //   id: "con59",
  //   message: 'Great let’s move on...',
  //   trigger: "newArt",
  // },
// ];
