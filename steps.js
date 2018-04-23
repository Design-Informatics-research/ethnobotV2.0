import React, { Component } from 'react';
import { View, Image, Alert} from 'react-native';
import Cam from './Cam';
import Test from './src/Test';

import * as actions from './src/actions';

export default steps = [
  {
    id: "intro1",
    message: 'Hello, I am Ethnobot',
    trigger: ({ value, steps }) => {
      console.log("time", new Date().toLocaleString())
      return "name"
    }
  },
  {
    id: "name",
    message: "What's your name?",
    trigger: "intro2",
  },
  {
    id: "intro2",
    user: true,
    trigger: "intro3"
  },
  {
    id: "intro3",
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: 'jobRole',
  },
  {
    id: 'jobRole',
    message: "What’s your Job?",
    trigger: "intro4",
  },
  {
    id: "intro4",
    user: true,
    trigger: "intro5",
  },
  {
    id: "intro5",
    message: 'Today I want you to help with a specific strand of Research for the Edinburgh City Council’s Public art research Project.',
    trigger: "intro6"
  },
  {
    id: "intro6",
    message: 'You will take me on a curated experience involving three works of art; art that is transformative, contentious, and new.',
    trigger: "intro7",
  },
  {
    id: "intro7",
    message: 'Are you ready to get started?',
    trigger: "intro8",
  },
  {
    id: "intro8",
    options: [
      { value: 1, label: 'Yes', trigger: "intro11" },
      { value: 2, label: 'No', trigger: "intro9" },
    ]
  },
  {
    id: "intro9",
    message: 'Well why not?',
    trigger: "intro10",
  },
  {
    id: "intro10",
    user: true,
    trigger: "intro7",
  },
  {
    id: "intro11",
    message: 'Great!',
    trigger: 'Transformative'
  },
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
    trigger: 'trans8'
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
    message: 'What are we looking at? Take a pic and tell me it’s name.',
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
    message: 'Alright, I am gonna ask a some deep questions now.',
    trigger: "trans18",
  },

  {
    id: "trans18",
    message: 'Who or what is this transformative for and why?',
    trigger: "trans19",
  },
  {
    id: "trans19",
    user: true,
    trigger: "trans20",
  },
  {
    id: "trans20",
    message: 'Are others affected?',
    trigger: "trans21",
  },
  {
    id: "trans21",
    options: [
      { value: 1, label: 'Yes', trigger: "trans22" },
      { value: 2, label: 'No', trigger: "trans24" },
    ]
  },
  {
    id: "trans22",
    message: 'Who and Why?',
    trigger: "trans23",
  },
  {
    id: "trans23",
    user: true,
    trigger: "trans20",
  },
  {
    id: "trans24",
    message: 'Could you please expand on the quality, taste, and appropriateness of this work of art?',
    trigger: "trans25",
  },
  {
    id: "trans25",
    options: [
      { value: 1, label: 'Yes', trigger: "trans31" },
      { value: 2, label: 'No', trigger: "trans26" },
    ]
  },
  {
    id: "trans26",
    message: 'No, why not?',
    trigger: "trans27",
  },
  {
    id: "trans27",
    user: true,
    trigger: "trans28",
  },
  {
    id: "trans28",
    message: 'Anything else to add?',
    trigger: "trans29",
  },
  {
    id: "trans29",
    options: [
      { value: 1, label: 'Yes', trigger: "trans30" },
      { value: 2, label: 'No', trigger: "trans40" },
    ]
  },
  {
    id: "trans30",
    user: true,
    trigger: "trans28",
  },
  {
    id: "trans31",
    message: 'Focus on any or all points and take a pic if it helps.',
    trigger: "trans32",
  },
  {
    id: "trans32",
    message: 'Want to take a pic?',
    trigger: "trans33",
  },
  {
    id: "trans33",
    options: [
      { value: 1, label: 'Yes', trigger: "trans34" },
      { value: 2, label: 'No', trigger: "trans36" },
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
    component: <Test />,
    trigger: "trans36"
  },
  {
    id: "trans36",
    user: true,
    trigger: "trans37",
  },
  {
    id: "trans37",
    message: 'Anything else to add?',
    trigger: "trans38",
  },
  {
    id: "trans38",
    options: [
      { value: 1, label: 'Yes', trigger: "trans39" },
      { value: 2, label: 'No', trigger: "trans40" },
    ]
  },
  {
    id: "trans39",
    user: true,
    trigger: "trans40",
  },
  {
    id: "trans40",
    message: 'Could you expand on the context about this work of art?',
    trigger: "trans41",
  },
  {
    id: "trans41",
    options: [
      { value: 1, label: 'Yes', trigger: "trans42" },
      { value: 2, label: 'No', trigger: "trans47" },
    ]
  },
  {
    id: "trans42",
    message: 'Go on...',
    trigger: "trans43",
  },
  {
    id: "trans43",
    user: true,
    trigger: "trans44",
  },
  {
    id: "trans44",
    message: 'Anything else to add?',
    trigger: "trans45",
  },
  {
    id: "trans45",
    options: [
      { value: 1, label: 'Yes', trigger: "trans46" },
      { value: 2, label: 'No', trigger:  "trans47"},
    ]
  },
  {
    id: "trans46",
    user: true,
    trigger: "trans44",
  },
  {
    id: "trans47",
    message: 'Would you like to say anything else about this work of art or any issue related?',
    trigger: "trans48",
  },
  {
    id: "trans48",
    options: [
      { value: 1, label: 'Yes', trigger: "trans49" },
      { value: 2, label: 'No', trigger: "trans58" },
    ]
  },
  {
    id: "trans49",
    message: 'Tell me about it and take a pic if it helps...',
    trigger: "trans50",
  },
  {
    id: "trans50",
    message: 'Want to take a pic?',
    trigger: "trans51",
  },
  {
    id: "trans51",
    options: [
      { value: 1, label: 'Yes', trigger: "trans52" },
      { value: 2, label: 'No', trigger: "trans54" },
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
    component: <Test />,
    trigger: "trans54"
  },
  {
    id: "trans54",
    user: true,
    trigger: "trans55",
  },
  {
    id: "trans55",
    message: 'Anything else to add?',
    trigger: "trans56",
  },
  {
    id: "trans56",
    options: [
      { value: 1, label: 'Yes', trigger: "trans57" },
      { value: 2, label: 'No', trigger:  "trans58"},
    ]
  },
  {
    id: "trans57",
    user: true,
    trigger: "trans55",
  },
  {
    id: "trans58",
    message: 'Great let’s move on...',
    trigger: "Contentious",
  },
  {
    id: "Contentious",
    message: 'Please take me to a public work of art that is contentious...',
    trigger: "con1"
  },
  {
    id: "con1",
    message: 'Ok, let me know when we get there.',
    trigger: "con2"
  },
  {
    id: "con2",
    message: 'Are we there yet?',
    trigger: "con3",
  },
  {
    id: "con3",
    options: [
      { value: 1, label: 'Yes', trigger: "con12" },
      { value: 2, label: 'No, I got distracted', trigger: "con4" },
    ]
  },
  {
    id: "con4",
    message: 'What’s going on? Take a pic and tell me about it...',
    trigger: "con5",
  },
  {
    id: "con5",
    message: 'Want to take a pic?',
    trigger: "con6",
  },
  {
    id: "con6",
    options: [
      { value: 1, label: 'Yes', trigger: "con7" },
      { value: 2, label: 'No', trigger: "con9" },
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
    component: <Test />,
    trigger: "con9"
  },
  {
    id: "con9",
    user: true,
    trigger: "con10",
  },
  {
    id: "con10",
    message: 'Anything else to add?',
    trigger: "con11",
  },
  {
    id: "con11",
    options: [
      { value: 1, label: 'Yes', trigger: "con9" },
      { value: 2, label: 'No', trigger: "con1" },
    ]
  },
  {
    id: "con12",
    message: 'What are we looking at? Take a pic and tell me it’s name.',
    trigger: "con13",
  },
  {
    id: "con13",
    waitAction: true,
    component: <Cam />,
    trigger: "con14"
  },
  {
    id: "con14",
    component: <Test />,
    trigger: "con15"
  },
  {
    id: "con15",
    message: 'and it’s name.',
    trigger: "con16",
  },
  {
    id: "con16",
    user: true,
    trigger: "con17",
  },
  {
    id: "con17",
    message: 'What makes this work of art contentious? And for whom?',
    trigger: "con18",
  },

  {
    id: "con18",
    user: true,
    trigger: "con19",
  },
  {
    id: "con19",
    message: 'Anything else to add?',
    trigger: "con20",
  },
  {
    id: "con20",
    options: [
      { value: 1, label: 'Yes', trigger: "con21" },
      { value: 2, label: 'No', trigger: "con22" },
    ]
  },
  {
    id: "con21",
    user: true,
    trigger: "con19",
  },
  {
    id: "con22",
    message: 'Our research shows contention raises issues of inclusivity and exclusivity... Does this work of art have issues with inclusivity and exclusivity?',
    trigger: "con23",
  },
  {
    id: "con23",
    options: [
      { value: 1, label: 'Yes', trigger: "con24" },
      { value: 2, label: 'No', trigger:  "con33" },
    ]
  },
  {
    id: "con24",
    message: 'What are the issues and affected parties? Take a pic if it helps...',
    trigger: "con25",
  },
  {
    id: "con25",
    message: 'Want to take a pic?',
    trigger: "con26",
  },
  {
    id: "con26",
    options: [
      { value: 1, label: 'Yes', trigger: "con27" },
      { value: 2, label: 'No', trigger: "con29" },
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
    component: <Test />,
    trigger: "con29"
  },
  {
    id: "con29",
    user: true,
    trigger: "con30",
  },
  {
    id: "con30",
    message: 'Anything else to add?',
    trigger: "con31",
  },
  {
    id: "con31",
    options: [
      { value: 1, label: 'Yes', trigger: "con32" },
      { value: 2, label: 'No', trigger:  "con35"},
    ]
  },
  {
    id: "con32",
    user: true,
    trigger: "con30",
  },
  {
    id: "con33",
    message: 'No, how so?',
    trigger: "con34",
  },
  {
    id: "con34",
    user: true,
    trigger: "con35",
  },
  {
    id: "con35",
    message: 'Similarly contentious works of art have elements of trust and risk. Can you expand on either or both?',
    trigger: "con36",
  },
  {
    id: "con36",
    options: [
      { value: 1, label: 'Yes', trigger: "con37" },
      { value: 2, label: 'No', trigger:  "con46" },
    ]
  },
  {
    id: "con37",
    message: 'Tell me about it and take a pic if it helps...',
    trigger: "con38",
  },
  {
    id: "con38",
    message: 'Want to take a pic?',
    trigger: "con39",
  },
  {
    id: "con39",
    options: [
      { value: 1, label: 'Yes', trigger: "con40" },
      { value: 2, label: 'No', trigger: "con42" },
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
    component: <Test />,
    trigger: "con42"
  },
  {
    id: "con42",
    user: true,
    trigger: "con43",
  },
  {
    id: "con43",
    message: 'Anything else to add?',
    trigger: "con44",
  },
  {
    id: "con44",
    options: [
      { value: 1, label: 'Yes', trigger: "con45" },
      { value: 2, label: 'No', trigger:  "con48"},
    ]
  },
  {
    id: "con45",
    user: true,
    trigger: "con43",
  },
  {
    id: "con46",
    message: 'No, why not?',
    trigger: "con47",
  },
  {
    id: "con47",
    user: true,
    trigger: "con48",
  },
  {
    id: "con48",
    message: 'Would you like to say anything more about this work of art or any issue related?',
    trigger: "con49",
  },
  {
    id: "con49",
    options: [
      { value: 1, label: 'Yes', trigger: "con50" },
      { value: 2, label: 'No', trigger: "con59" },
    ]
  },
  {
    id: "con50",
    message: 'Tell me about it and take a pic if it helps...',
    trigger: "con51",
  },
  {
    id: "con51",
    message: 'Want to take a pic?',
    trigger: "con52",
  },
  {
    id: "con52",
    options: [
      { value: 1, label: 'Yes', trigger: "con53" },
      { value: 2, label: 'No', trigger: "con55" },
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
    component: <Test />,
    trigger: "con55"
  },
  {
    id: "con55",
    user: true,
    trigger: "con56",
  },
  {
    id: "con56",
    message: 'Anything else to add?',
    trigger: "con57",
  },
  {
    id: "con57",
    options: [
      { value: 1, label: 'Yes', trigger: "con58" },
      { value: 2, label: 'No', trigger:  "con59"},
    ]
  },
  {
    id: "con58",
    user: true,
    trigger: "con56",
  },
  {
    id: "con59",
    message: 'Great let’s move on...',
    trigger: "newArt",
  },
  {
    id: "newArt",
    message: 'Could you please take me to a public space that could use a new work of art or somewhere where a public work of art could be replaced?',
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

  //additon

  {
    id: "new33",
    user: true,
    trigger: "new34",
  },

  //end of addition
  {
    id: "new34",
    message: 'Is that all?',
    trigger: "new35",
  },
  {
    id: "new35",
    options: [
      { value: 1, label: 'Yes', trigger: "new40" },
      { value: 2, label: 'No', trigger: "new36" },
    ]
  },
  {
    id: "new36",
    message: 'Go on...',
    trigger: "new37",
  },
  {
    id: "new37",
    user: true,
    trigger: "new34",
  },
  {
    id: "new38",
    message: 'No, why not?',
    trigger: "new39",
  },
  {
    id: "new39",
    user: true,
    trigger: "new40",
  },
  {
    id: "new40",
    message: 'Our research shows the process for a public art project can lack transparency for interested parties. Given the place and potentiality for a work of art here, can you imagine what a transparent process would be?',
    trigger: "new41",
  },
  {
    id: "new41",
    options: [
      { value: 1, label: 'Yes', trigger: "new42" },
      { value: 2, label: 'No', trigger: "new47" },
    ]
  },
  {
    id: "new42",
    message: 'Please give me insight by steps or association and order-of groups involved.',
    trigger: "new43",
  },
  {
    id: "new43",
    user: true,
    trigger: "new44",
  },
  {
    id: "new44",
    message: 'Anything else to add?',
    trigger: "new45",
  },
  {
    id: "new45",
    options: [
      { value: 1, label: 'Yes', trigger: "new46" },
      { value: 2, label: 'No', trigger: "new49" },
    ]
  },
  {
    id: "new46",
    user: true,
    trigger: "new44",
  },
  {
    id: "new47",
    message: 'No, why not?',
    trigger: "new48",
  },
  {
    id: "new48",
    user: true,
    trigger: "new49",
  },
  {
    id: "new49",
    message: 'Well, that’s a lot to think about... Are there any other issues that you would like to address in the context of process?',
    trigger: "new50",
  },
  {
    id: "new50",
    options: [
      { value: 1, label: 'Authority & Responsibility', trigger: "new51" },
      { value: 2, label: 'Funding & Maintenance', trigger: "new51" },
      { value: 3, label: 'Quality, Taste, & Appropriateness', trigger: "new51" },
      { value: 4, label: 'Empowerment', trigger: "new51" },
      { value: 5, label: 'Expertise', trigger: "new51" },
      { value: 6, label: 'Audience', trigger: "new51" },
      { value: 7, label: 'Job roles', trigger: "new51" },
      { value: 8, label: 'Other', trigger: "new51" },
      { value: 9, label: 'No', trigger: "new72" },
    ]
  },
  {
    id: "new51",
    message: 'Please explain, add a pic if it helps',
    trigger: "new52",
  },
  {
    id: "new52",
    message: 'Want to take a pic?',
    trigger: "new53",
  },
  {
    id: "new53",
    options: [
      { value: 1, label: 'Yes', trigger: "new54" },
      { value: 2, label: 'No', trigger: "new56" },
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
    component: <Test />,
    trigger: "new56"
  },
  {
    id: "new56",
    user: true,
    trigger: "new57",
  },
  {
    id: "new57",
    message: 'Anything else to add?',
    trigger: "new58",
  },
  {
    id: "new58",
    options: [
      { value: 1, label: 'Yes', trigger: "new59" },
      { value: 2, label: 'No', trigger: "new60" },
    ]
  },
  {
    id: "new59",
    user: true,
    trigger: "new57",
  },
  {
    id: "new60",
    message: 'Would you Like to address a different issue?',
    trigger: "new61",
  },
  {
    id: "new61",
    options: [
      { value: 1, label: 'Authority & Responsibility', trigger: "new62" },
      { value: 2, label: 'Funding & Maintenance', trigger: "new62" },
      { value: 3, label: 'Quality, Taste, & Appropriateness', trigger: "new62" },
      { value: 4, label: 'Empowerment', trigger: "new62" },
      { value: 5, label: 'Expertise', trigger: "new62" },
      { value: 6, label: 'Audience', trigger: "new62" },
      { value: 7, label: 'Job roles', trigger: "new62" },
      { value: 8, label: 'Other', trigger: "new62" },
      { value: 9, label: 'No', trigger: "new72" },
    ]
  },
  {
    id: "new62",
    message: 'Please explain, add a pic if it helps',
    trigger: "new63",
  },
  {
    id: "new63",
    message: 'Want to take a pic?',
    trigger: "new64",
  },
  {
    id: "new64",
    options: [
      { value: 1, label: 'Yes', trigger: "new65" },
      { value: 2, label: 'No', trigger: "new67" },
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
    component: <Test />,
    trigger: "new67"
  },
  {
    id: "new67",
    user: true,
    trigger: "new68",
  },
  {
    id: "new68",
    message: 'Anything else to add?',
    trigger: "new69",
  },
  {
    id: "new69",
    options: [
      { value: 1, label: 'Yes', trigger: "new70" },
      { value: 2, label: 'No', trigger: "new60" },
    ]
  },
  {
    id: "new70",
    message: 'Go on...',
    trigger: "new71",
  },
  {
    id: "new71",
    user: true,
    trigger: "new68",
  },
  {
    id: "new72",
    message: 'In this place and process, what expertise does the public have to offer?',
    trigger: "new73",
  },
  {
    id: "new73",
    user: true,
    trigger: "new74",
  },
  {
    id: "new74",
    message: 'Anything else to add?',
    trigger: "new75",
  },
  {
    id: "new75",
    options: [
      { value: 1, label: 'Yes', trigger: "new76" },
      { value: 2, label: 'No', trigger: "new77" },
    ]
  },
  {
    id: "new76",
    user: true,
    trigger: "new74",
  },
  {
    id: "new77",
    message: 'Our research indicates particular issues are left out of the conversation when logistics and process take precedent about the use of a public space. Can you reflect on...?',
    trigger: "new78",
  },
  {
    id: "new78",
    options: [
      { value: 1, label: 'Well Being', trigger: "new79" },
      { value: 2, label: 'Fun', trigger: "new79" },
      { value: 3, label: 'Enjoyment & Pleasure', trigger: "new79" },
      { value: 4, label: 'Education', trigger: "new79" },
      { value: 5, label: 'Community', trigger: "new79" },
      { value: 6, label: 'Other', trigger: "new79" },
      { value: 7, label: 'No', trigger: "new83" },
    ]
  },
  {
    id: "new79",
    message: 'Please explain, add a pic if it helps',
    trigger: "new80",
  },
  {
    id: "new80",
    message: 'Want to take a pic?',
    trigger: "new81",
  },
  {
    id: "new81",
    options: [
      { value: 1, label: 'Yes', trigger: "new82" },
      { value: 2, label: 'No', trigger: "new84" },
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
    component: <Test />,
    trigger: "new84"
  },
  {
    id: "new84",
    user: true,
    trigger: "new85",
  },
  {
    id: "new85",
    message: 'Anything else?',
    trigger: "new86",
  },
  {
    id: "new86",
    options: [
      { value: 1, label: 'Yes', trigger: "new87" },
      { value: 2, label: 'No', trigger: "new88" },
    ]
  },
  {
    id: "new87",
    user: true,
    trigger: "new88",
  },
  {
    id: "new88",
    message: 'Would you Like to address a different issue?',
    trigger: "new89",
  },
  {
    id: "new89",
    options: [
      { value: 1, label: 'Well Being', trigger: "new90" },
      { value: 2, label: 'Fun', trigger: "new90" },
      { value: 3, label: 'Enjoyment & Pleasure', trigger: "new90" },
      { value: 4, label: 'Education', trigger: "new90" },
      { value: 5, label: 'Community', trigger: "new90" },
      { value: 6, label: 'Other', trigger: "new90" },
      { value: 7, label: 'No', trigger: "new100" },
    ]
  },
  {
    id: "new90",
    message: 'Please explain, add a pic if it helps',
    trigger: "new91",
  },
  {
    id: "new91",
    message: 'Want to take a pic?',
    trigger: "new92",
  },
  {
    id: "new92",
    options: [
      { value: 1, label: 'Yes', trigger: "new93" },
      { value: 2, label: 'No', trigger: "new95" },
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
    component: <Test />,
    trigger: "new95"
  },
  {
    id: "new95",
    user: true,
    trigger: "new96",
  },
  {
    id: "new96",
    message: 'Anything else to add?',
    trigger: "new97",
  },
  {
    id: "new97",
    options: [
      { value: 1, label: 'Yes', trigger: "new98" },
      { value: 2, label: 'No', trigger: "new88" },
    ]
  },
  {
    id: "new98",
    message: 'Go on...',
    trigger: "new99",
  },
  {
    id: "new99",
    user: true,
    trigger: "new88",
  },
  {
    id: "new100",
    message: 'Would you like to say anything more about any issues related to our current conversation?',
    trigger: "new101",
  },
  {
    id: "new101",
    options: [
      { value: 1, label: 'Yes', trigger: "new102" },
      { value: 2, label: 'No', trigger:  "Outro" },
    ]
  },
  {
    id: "new102",
    message: 'Tell me about it and take a pic if it helps...',
    trigger: "new103",
  },
  {
    id: "new103",
    message: 'Want to take a pic?',
    trigger: "new104",
  },
  {
    id: "new104",
    options: [
      { value: 1, label: 'Yes', trigger: "new105" },
      { value: 2, label: 'No', trigger: "new107" },
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
    component: <Test />,
    trigger: "new107"
  },
  {
    id: "new107",
    user: true,
    trigger: "new108",
  },
  {
    id: "new108",
    message: 'Anything else?',
    trigger: "new109",
  },
  {
    id: "new109",
    options: [
      { value: 1, label: 'Yes', trigger: "new110" },
      { value: 2, label: 'No', trigger:  "Outro"},
    ]
  },
  {
    id: "new110",
    user: true,
    trigger: "new108",
  },
  {
    id: "Outro",
    message: 'That’s pretty much everything!',
    trigger: "out1"
  },
  {
    id: "out1",
    message: 'Thank you for your patience and participation But before you return me, do you have anything you would like to underscore or add to the conversation?',
    trigger: "out2"
  },
  {
    id: "out2",
    options: [
      { value: 1, label: 'Yes', trigger: "out3" },
      { value: 2, label: 'No', trigger: "out8" },
    ]
  },
  {
    id: "out3",
    message: 'I am listening...',
    trigger: "out4"
  },
  {
    id: "out4",
    user: true,
    trigger: "out5"
  },
  {
    id: "out5",
    message: 'Anything else?',
    trigger: "out6",
  },
  {
    id: "out6",
    options: [
      { value: 1, label: 'Yes', trigger: "out7" },
      { value: 2, label: 'No', trigger: "out8" },
    ]
  },
  {
    id: "out7",
    user: true,
    trigger: "out5"
  },
  {
    id: "out8",
    message: 'That’s all good. You’ve been a great help towards this research....',
    trigger: "out9"
  },
  {
    id: "out9",
    message: 'Please return me to the researchers.',
    end: true
  },
];
