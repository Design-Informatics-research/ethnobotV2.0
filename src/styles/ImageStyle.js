import { StyleSheet, Dimensions, Image} from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

ImageStyle = StyleSheet.create({
  container: {
    flex: 1,
    height: height*.6,
    flexDirection: 'column',
  }
});

export default ImageStyle;
