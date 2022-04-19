import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default ({ navigation }) => (
  <View style={styles.card}>
    <Text style={{ color: "#EFB905", fontSize: 20 }}>Workout card</Text>
    <Button
      onPress={() => navigation.navigate("Exercise Search")}
      title="add"
      color="white"
    />
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: "99%",
    padding: 10,
    margin: 2,
    opacity: 1,
    justifyContent: "center",
    backgroundColor: "#695645",
    borderWidth: 3,
    borderColor: "#EFB905",
  },
});
