import React, { Component } from 'react';
import { StyleSheet, Text, View, ART, Alert, TouchableOpacity, Image} from 'react-native';
import ChatBot from 'react-native-chatbot';
import { ThemeProvider } from 'styled-components';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'

const store = createStore(rootReducer)

import Test from './src/Test';
import Cam from './Cam';

import steps from './steps';
import Review from './Review';
import Geolocation from './src/Geolocation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    };
  }

  render() {
    return (
      <Provider store={store}>
        <ChatBot
          steps={steps}
        />
      </Provider>
    );
  }
}



export default App;
