import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import WorkoutList from '../MyComponents/WorkoutList';
import ExercisePage from './ExercisePage';
const Stack = createNativeStackNavigator();

export default class WorkoutHistory extends Component {
  render() {
    return (
        //Stack Navigator that starts on the "WorkoutList" and navigates
        //using a stack format to Excercise search
        <Stack.Navigator initialRouteName='WorkoutList' screenOptions={{
          headerShown: true
      }}>
          <Stack.Screen name="WorkoutList" component={WorkoutList} />
          <Stack.Screen name="Exercise Search" component={ExercisePage} />
        </Stack.Navigator>
      );
  }
}