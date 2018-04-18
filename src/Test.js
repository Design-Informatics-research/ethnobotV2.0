import React from 'react';
import { Image, StatusBar, StyleSheet, TouchableOpacity, View, Text, FlatList, Alert } from 'react-native';

import ImageStyle from './styles/ImageStyle';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {source: ''};
  }

  render(props) {
    let test = this.props.previousStep.value;
    return(
      <Image
        style={ImageStyle.container}
        source={{uri: test}}
      />
    )
  }
}
