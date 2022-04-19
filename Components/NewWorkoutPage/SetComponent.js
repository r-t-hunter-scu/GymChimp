import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Swipeable, TouchableHighlight } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { logSet, removeSet } from "../../store/counterSlice";

export default ({ Set, Exercise }) => {
  const numbers = [Set - 1, Exercise - 1];
  const dispatch = useDispatch();
  const thisSet = useSelector(
    (state) => state.counter.Elist[Exercise - 1].Slist[Set - 1]
  );
  var lbs = "";
  var reps = "";
  var dispData = [lbs, reps].concat(numbers);
  const lbsChange = (text) => {
    lbs = text;
    dispData = [lbs, dispData[1]].concat(numbers);
  };
  const repsChange = (text) => {
    reps = text;
    dispData = [dispData[0], reps].concat(numbers);
  };
  const renderRightActions = () => {
    return (
      <>
        <TouchableHighlight onPress={() => dispatch(removeSet(numbers))}>
          <View
            style={{
              backgroundColor: "#EFB905",
              justifyContent: "center",
              height: "100%",
              borderRadius: 3,
            }}
          >
            <Text
              style={{
                color: "white",
                paddingHorizontal: 10,
                fontWeight: "500",
              }}
            >
              Delete
            </Text>
          </View>
        </TouchableHighlight>
      </>
    );
  };
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View>
        <View style={styles.card}>
          <Text style={styles.text}>{Set}</Text>
          <TextInput
            onChangeText={(newText) => lbsChange(newText)}
            keyboardType="numeric"
            style={styles.TextIn}
            placeholder={thisSet.lbs}
          ></TextInput>
          <TextInput
            onChangeText={(newText) => repsChange(newText)}
            keyboardType="numeric"
            style={styles.TextIn}
            placeholder={thisSet.reps}
          ></TextInput>
          <Button title={"ADD"} onPress={() => dispatch(logSet(dispData))} />
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
