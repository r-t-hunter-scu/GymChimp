import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { incrementSets } from "../../store/counterSlice";
import SetComponent from "./SetComponent";

export default ({ Exercise }) => {
  const list = useSelector((state) => state.counter.Elist[Exercise - 1].Slist);
  const Elist = useSelector((state) => state.counter.Elist[Exercise - 1]);
  const dispatch = useDispatch();
  //add new set component on press
  const renderItem = ({ item }) => (
    <SetComponent Set={item.id} Exercise={Exercise} />
  );

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.title}>{Elist.Ename}</Text>
      <Text style={styles.text2}>
        {"Set" + "     " + "Past" + "          " + "Lbs" + "        " + "Reps"}
      </Text>
      {/* rendering list of sets */}
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableNativeFeedback
        onPress={() => dispatch(incrementSets(Exercise - 1))}
      >
        <View style={styles.card}>
          <Text style={styles.text}>Add Set</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "flex-start",
    color: "white",
    fontSize: 20,
    marginLeft: 20,
    textAlign: "center",
  },
  text2: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    marginLeft: 20,
    alignSelf: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  card: {
    width: 100,
    textAlign: "center",
    backgroundColor: "#2B2118",
    borderRadius: 5,
  },
});
