import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import WorkoutList from '../MyComponents/WorkoutList';
import AppNav from './AppNav';

const Stack = createNativeStackNavigator();

export default class Excercises extends Component {
  render() {
    return (
        <Stack.Navigator initialRouteName='WorkoutList' screenOptions={{
          headerShown: false
      }}>
          <Stack.Screen name="WorkoutList" component={WorkoutList} />
          <Stack.Screen name="AppNav" component={AppNav} />
        </Stack.Navigator>
      );
  }
}