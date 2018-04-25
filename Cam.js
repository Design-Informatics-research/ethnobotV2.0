import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, Text, TouchableOpacity, View, CameraRoll } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFS from 'react-native-fs';

import CameraStyle from './src/styles/CameraStyle';

export default class Cam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewHeight: 0,
      selectedCam: RNCamera.Constants.Type.back,
      camName: 'selfie cam',
      newPath: ''
    };
  }

  componentWillMount() {
    this.setState({previewHeight: CameraStyle.containerHeight})
  }

  render() {
    return (
      <View style={[CameraStyle.container, CameraStyle.containerHeight]}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {CameraStyle.preview}
            type={this.state.selectedCam}
            flashMode={RNCamera.Constants.FlashMode.off}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity
            onPress={()=>this.takePicture()}
            style = {CameraStyle.capture}
        >
            <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>this.swap()}
          style = {CameraStyle.capture}
        >
            <Text style={{fontSize: 14}}> {this.state.camName} </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  getImageNameFromPath = imagePathAsString => {
    let imagePathAsArray = imagePathAsString.split('/');
    return imagePathAsArray[imagePathAsArray.length - 1];
  }

  moveImageFromCacheToProjectFolder = async (imagePathAtCache) => {
    const imageName = this.getImageNameFromPath(imagePathAtCache);
    let date = new Date();
    let dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    this.setState({newPath: `${RNFS.DocumentDirectoryPath}/${dateStr}.jpg`})
    return await RNFS.moveFile(imagePathAtCache, `${RNFS.DocumentDirectoryPath}/${dateStr}.jpg`);
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)

      CameraRoll.saveToCameraRoll(data.uri);

      let date = new Date();
      let dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      // this.moveImageFromCacheToProjectFolder()
      //   .then(
      //     this.props.triggerNextStep({ value: `${RNFS.DocumentDirectoryPath}/${dateStr}.jpg`})
      //   );

      this.props.triggerNextStep({ value: data.uri});
    }
  };

  swap = async function() {
    if (this.state.selectedCam == RNCamera.Constants.Type.back) {
      this.setState({selectedCam: RNCamera.Constants.Type.front, camName: 'selfie cam'})
    } else {
      this.setState({selectedCam: RNCamera.Constants.Type.back, camName: 'front cam'})
    }
  };
}
