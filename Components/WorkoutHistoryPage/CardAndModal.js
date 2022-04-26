import React from "react";
import { TouchableNativeFeedback } from "react-native";
import WorkoutCard from "./WorkoutCard";

export default ({ navigation }) => (
  <TouchableNativeFeedback onPress={() => console.log("4")}>
    <WorkoutCard />
  </TouchableNativeFeedback>
);
