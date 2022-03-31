import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import ExcerciseSearch from '../MyComponents/ExcerciseSearch';
import WorkoutList from '../MyComponents/WorkoutList';

const Stack = createNativeStackNavigator();

export default class WorkoutHistory extends Component {
  render() {
    return (
        <Stack.Navigator initialRouteName='WorkoutList' screenOptions={{
          headerShown: true
      }}>
          <Stack.Screen name="WorkoutList" component={WorkoutList} />
          <Stack.Screen name="AppNav" component={ExcerciseSearch} />
        </Stack.Navigator>
      );
  }
}