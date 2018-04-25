import { StyleSheet, Dimensions } from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

CameraStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  containerHeight: {
    height: height*.5
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

export default CameraStyle;
