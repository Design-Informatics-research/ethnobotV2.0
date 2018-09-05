import React, { Component } from 'react';
import { Image, StatusBar, StyleSheet, TouchableOpacity, View, Text, FlatList, Alert } from 'react-native';

import ImageStyle from '../styles/ImageStyle';

class ImageContainer extends Component {
  constructor(props) {
    super(props);
  }

  renderImage = () => {
    return (
      <Image
        style={ImageStyle.container}
        source={{uri: this.props.previousStep.value}}
      />
    )
  }

  render() {
    return (
      this.renderImage()
    )
  }
}

export default ImageContainer;
