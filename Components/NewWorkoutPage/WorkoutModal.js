import React from "react";
import { Button, Text, View } from "react-native";
import WorkoutComponent from "./WorkoutComponent";

export default ({}) => {
  return (
    <View style={styles.modalCard}>
      <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
        <Button onPress={toggleModal} title="x" />
      </View>
      <Text style={styles.text}>Exercises </Text>
      <WorkoutComponent />
    </View>
  );
};
