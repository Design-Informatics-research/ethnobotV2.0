import React, { Component } from 'react';
import { StyleSheet, Text, View, ART, Alert, TouchableOpacity, Image} from 'react-native';
import ChatBot from 'react-native-chatbot';
import { ThemeProvider } from 'styled-components';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'

import RNFetchBlob from 'react-native-fetch-blob'
// import RNFS from 'react-native-fs';

const store = createStore(rootReducer)

import Test from './src/Test';
import Cam from './Cam';


import steps from './steps';

import Geolocation from './src/Geolocation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: steps
    };
  }

  setCacheName = () => {
    return new Date().toLocaleString();
  }

  handleEnd() {}


  render() {
    {/*cache={true}
    cacheName={this.setCacheName()}
    */}
    return (
      <Provider store={store}>
        <ChatBot
          ref={(bot) => {this.bot = bot}}
          steps={this.state.steps}
          hideUserAvatar={true}
          handleEnd={this.handleEnd}
        >
        </ChatBot>
      </Provider>
    );
  }
}

export default App;
