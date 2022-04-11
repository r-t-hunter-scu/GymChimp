import React from "react";
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Swipeable, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { incrementSets } from "../../store/counterSlice";

const useFetchEvents = () => {
  const dispatch = useDispatch();
  return () => {
    dispatch(incrementSets(2));
  };
};

const renderRightActions = (progress, dragX) => {
  const fetchEvents = useFetchEvents();
  const scale = dragX.interpolate({
    inputRange: [-50, 0],
    outputRange: [0.7, 0],
  });
  return (
    <>
      <TouchableOpacity onPress={() => fetchEvents()}>
        <View
          style={{
            backgroundColor: "#EFB905",
            justifyContent: "center",
            height: "100%",
            borderRadius: 3,
          }}
        >
          <Animated.Text
            style={{
              color: "white",
              paddingHorizontal: 10,
              fontWeight: "500",
              transform: [{ scale }],
            }}
          >
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ({ num }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View>
        <View style={styles.card}>
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
        </View>
      </View>
    </Swipeable>
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
    borderRadius: 10,
    borderColor: "#F9EBD7",
    flexDirection: "row",
    justifyContent: "center",
  },
  deleteButton: {
    backgroundColor: "red",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
  },
  deleteButtonText: {
    textAlignVertical: "center",
    color: "white",
  },
  swipedRow: {
    backgroundColor: "grey",
    width: "95%",
    height: "95%",
    margin: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
