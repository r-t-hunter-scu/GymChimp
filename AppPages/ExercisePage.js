import React, { Component } from 'react';
import { View } from 'react-native';
import ExerciseSearch from '../MyComponents/ExerciseSearch';


export default class ExercisePage extends Component {
  render() {
    return (
        <View style={{marginBottom: '13%'}}>
          <ExerciseSearch/>
        </View>
      );
  }
}