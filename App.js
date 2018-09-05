import React, { Component } from 'react';
import { StyleSheet, Text, View, ART, Alert, TouchableOpacity, Image} from 'react-native';
import ChatBot from 'react-native-chatbot';
import { ThemeProvider } from 'styled-components';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'
const store = createStore(rootReducer)

import ImageContainer from './src/components/ImageContainer'; //image component
import Cam from './src/components/Cam'; //cam component
import Geolocation from './src/components/Geolocation'; //geolocation component
import steps from './src/steps'; //dialog steps

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
    return (
      <Provider store={store}>
        <ChatBot
          ref={(bot)=>{this.bot = bot}}
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
