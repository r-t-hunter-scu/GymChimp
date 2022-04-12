import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { Card } from "react-native-shadow-cards";
import { useDispatch, useSelector } from "react-redux";
import { incrementSets } from "../../store/counterSlice";
import SetComponent from "./SetComponent";

export default ({ Exercise }) => {
  const list = useSelector((state) => state.counter.Elist[Exercise - 1].Slist);
  const dispatch = useDispatch();
  //add new set component on press
  const renderItem = ({ item }) => (
    <SetComponent Set={item.id} Exercise={Exercise} />
  );

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.text}>Squat</Text>
      {/* rendering list of sets */}
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableHighlight onPress={() => dispatch(incrementSets(Exercise - 1))}>
        <Card style={styles.card}>
          <Text style={styles.text}>Add Set</Text>
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
    width: 100,
    textAlign: "center",
    backgroundColor: "#2B2118",
  },
});
