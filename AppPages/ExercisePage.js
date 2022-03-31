import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import ExerciseSearch from '../MyComponents/ExerciseSearch';
const Stack = createNativeStackNavigator();



export default class ExercisePage extends Component {
  render() {
    return (
        <ExerciseSearch/>
      );
  }
}