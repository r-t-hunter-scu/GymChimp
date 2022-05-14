import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchModal } from "../../store/counterSlice";
import ExerciseComponent from "./ExerciseComponent";

export default ({ navigation }) => {
  const list = useSelector((state) => state.counter.Elist);
  const dispatch = useDispatch();
  const renderItem = ({ item }) => <ExerciseComponent Exercise={item.id} />;
  let Exerciselist;
  if (list.length > 0) {
    Exerciselist = (
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  } else {
    Exerciselist = <View></View>;
  }

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {/*rendering list of exercises*/}
      {Exerciselist}
      <TouchableNativeFeedback onPress={() => dispatch(toggleSearchModal())}>
        <View style={styles.card}>
          <Text style={styles.text}>Add Exercise</Text>
        </View>
      </TouchableNativeFeedback>
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
    borderRadius: 5,
    width: 150,
    textAlign: "center",
    backgroundColor: "#2B2118",
  },
});
