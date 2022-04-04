import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import NewWorkoutButton from '../MyComponents/NewWorkoutButton';
const Stack = createNativeStackNavigator();

export default class NewWorkoutPage extends Component {
  render() {
    return (
        <ScrollView>
            <NewWorkoutButton />
        </ScrollView>
      );
  }
}