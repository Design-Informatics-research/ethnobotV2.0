import React, { Component } from 'react';
import { StyleSheet, Text, View, ART, Alert} from 'react-native';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <View style={{ width: '100%', height: '100%' }}>
       <Text>Summary</Text>
       <Text>Name</Text>
       <Text>{name.value}</Text>
       <Text>Gender</Text>
       <Text>{gender.value}</Text>
       <Text>Age</Text>
       <Text>{age.value}</Text>
     </View>
    );
  }
}

export default Review;
