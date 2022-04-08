import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Card } from "react-native-shadow-cards";

export default ({ num }) => {
  return (
    <View>
      <Card style={styles.card}>
        <Text style={styles.text}>{num}</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.TextIn}
          placeholder="lbs"
        ></TextInput>
        <TextInput
          keyboardType="numeric"
          style={styles.TextIn}
          placeholder="reps"
        ></TextInput>
        <Button title={"ADD"} onPress={() => 5} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginLeft: 15,
    marginRight: "30%",
    justifyContent: "center",
  },
  TextIn: {
    backgroundColor: "#FFF",
    width: 50,
    marginLeft: 10,
    height: 30,
    textAlign: "center",
    borderRadius: 10,
  },
  card: {
    width: "90%",
    marginLeft: "5%",
    paddingTop: 20,
    margin: 2,
    opacity: 1,
    height: 75,
    backgroundColor: "#F9EBD7",
    borderWidth: 3,
    borderColor: "#F9EBD7",
    flexDirection: "row",
    justifyContent: "center",
  },
});
