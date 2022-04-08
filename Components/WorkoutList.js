import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Counter from "./Counter";
import WorkoutCard from "./WorkoutCard";
var styles = StyleSheet.create({
  content: {},
});

//lis
export default ({ navigation }) => (
  <ScrollView
    contentContainerStyle={styles.content}
    contentInsetAdjustmentBehavior="automatic"
  >
    <WorkoutCard navigation={navigation} />
    <WorkoutCard navigation={navigation} />
    <WorkoutCard navigation={navigation} />
    <WorkoutCard navigation={navigation} />
    <WorkoutCard navigation={navigation} />
    <WorkoutCard navigation={navigation} />
    <Counter />
  </ScrollView>
);
