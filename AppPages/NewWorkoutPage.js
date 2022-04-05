import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NewWorkoutButton from '../MyComponents/NewWorkoutButton';
import SetComponent from '../MyComponents/SetComponent';

const styles = StyleSheet.create({
    text: {
      color: 'white',
      fontSize: 20,
    },
  });

export default class NewWorkoutPage extends Component {
  render() {
    return (
        <ScrollView>
            <NewWorkoutButton />
            <Text style={styles.text}>Recommended Templates:</Text>
            <SetComponent />
            <Text style={styles.text}>Personal Templates:</Text>
        </ScrollView>
      );
  }
}