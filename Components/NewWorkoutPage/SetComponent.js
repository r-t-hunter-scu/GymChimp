import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import {
  Swipeable,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import {
  lbsChange,
  logSet,
  removeSet,
  repsChange,
} from "../../store/counterSlice";

export default ({ Set, Exercise }) => {
  const numbers = [Set - 1, Exercise - 1];
  const dispatch = useDispatch();
  const thisSet = useSelector(
    (state) => state.counter.Elist[Exercise - 1].Slist[Set - 1]
  );
  var lbs = thisSet.clbs;
  var reps = thisSet.creps;
  var dispData = [lbs, reps].concat(numbers);
  const lbsChangeLocal = (text) => {
    console.log(lbs);
    lbs = text;
    dispData = [lbs, dispData[1]].concat(numbers);
    dispatch(lbsChange(dispData));
  };
  const repsChangeLocal = (text) => {
    console.log(reps);
    reps = text;
    dispData = [dispData[0], reps].concat(numbers);
    dispatch(repsChange(dispData));
  };
  const renderRightActions = () => {
    return (
      <>
        <TouchableNativeFeedback onPress={() => dispatch(removeSet(numbers))}>
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
        </TouchableNativeFeedback>
      </>
    );
  };
  let sComponent;
  if (thisSet.completed) {
    sComponent = (
      <View style={styles.checkedCard}>
        <Text style={styles.text}>{Set}</Text>
        <TextInput
          onChangeText={(newText) => lbsChangeLocal(newText)}
          keyboardType="numeric"
          style={styles.TextIn}
          placeholder={thisSet.lbs}
        ></TextInput>
        <TextInput
          onChangeText={(newText) => repsChangeLocal(newText)}
          keyboardType="numeric"
          style={styles.TextIn}
          placeholder={thisSet.reps}
        ></TextInput>
        <View style={{ paddingHorizontal: 20 }}>
          <TouchableNativeFeedback
            activeOpacity={0.5}
            underlayColor={"#EFB905"}
            onPress={() => dispatch(logSet(dispData))}
          >
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../img/check.png")}
            />
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  } else {
    sComponent = (
      <View style={styles.card}>
        <Text style={styles.text}>{Set}</Text>
        <TextInput
          onChangeText={(newText) => lbsChangeLocal(newText)}
          keyboardType="numeric"
          style={styles.TextIn}
          placeholder={thisSet.lbs}
        ></TextInput>
        <TextInput
          onChangeText={(newText) => repsChangeLocal(newText)}
          keyboardType="numeric"
          style={styles.TextIn}
          placeholder={thisSet.reps}
        ></TextInput>
        <View style={{ paddingHorizontal: 20 }}>
          <TouchableNativeFeedback
            activeOpacity={0.5}
            underlayColor={"#F9EBD7"}
            onPress={() => dispatch(logSet(dispData))}
          >
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../../img/check.png")}
            />
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View>{sComponent}</View>
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
  checkedCard: {
    width: "90%",
    marginLeft: "5%",
    paddingTop: 20,
    margin: 2,
    opacity: 1,
    height: 75,
    backgroundColor: "#EFB905",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#2B2118",
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
  image: {
    width: 30,
    height: 30,
  },
});
