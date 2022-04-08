import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NewWorkoutButton from "../Components/NewWorkoutPage/NewWorkoutButton";

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default class NewWorkoutPage extends Component {
  render() {
    return (
      <ScrollView>
        {/* Page where a user will be able to create an empty workout,
                as well as access past templates or pick from our recommended 
                templates. */}
        <NewWorkoutButton />
        <Text style={styles.text}>Recommended Templates:</Text>
        <Text style={styles.text}>Personal Templates:</Text>
      </ScrollView>
    );
  }
}
