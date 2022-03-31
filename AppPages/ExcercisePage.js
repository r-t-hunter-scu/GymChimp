import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import ExcerciseSearch from '../MyComponents/ExcerciseSearch';

const Stack = createNativeStackNavigator();

export default class ExcercisePage extends Component {
  render() {
    return (
        <Stack.Navigator initialRouteName='WorkoutList' screenOptions={{
          headerShown: false
      }}>
          <Stack.Screen name="Excercise Search" component={ExcerciseSearch} />
          <Stack.Screen name="AppNav" component={ExcerciseSearch} />
        </Stack.Navigator>
      );
  }
}