import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import WorkoutList from '../MyComponents/WorkoutList';
import ExercisePage from './ExercisePage';
const Stack = createNativeStackNavigator();

export default class WorkoutHistory extends Component {
  render() {
    return (
        <Stack.Navigator initialRouteName='WorkoutList' screenOptions={{
          headerShown: true
      }}>
          <Stack.Screen name="WorkoutList" component={WorkoutList} />
          <Stack.Screen name="Excercise Search" component={ExercisePage} />
        </Stack.Navigator>
      );
  }
}