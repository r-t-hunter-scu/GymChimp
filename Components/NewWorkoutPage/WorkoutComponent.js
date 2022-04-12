import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { Card } from "react-native-shadow-cards";
import { useDispatch, useSelector } from "react-redux";
import { incrementExercises } from "../../store/counterSlice";
import ExerciseComponent from "./ExerciseComponent";

export default ({ navigation }) => {
  const list = useSelector((state) => state.counter.Elist);
  const dispatch = useDispatch();
  //console.log(list);
  //add new exercise component on button press
  const renderItem = ({ item }) => <ExerciseComponent Exercise={item.id} />;

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {/*rendering list of exercises*/}
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableHighlight onPress={() => dispatch(incrementExercises())}>
        <Card style={styles.card}>
          <Text style={styles.text}>Add Exercise</Text>
        </Card>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  card: {
    width: 150,
    textAlign: "center",
    backgroundColor: "#2B2118",
  },
});
