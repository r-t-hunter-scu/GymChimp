import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import { togglePastWorkoutModal } from "../../store/counterSlice";
import WorkoutCard from "./WorkoutCard";

export default ({}) => {
  const dispatch = useDispatch();
  const modalOn = useSelector((state) => state.counter.PastWorkoutModal);
  return (
    <View>
      <TouchableHighlight onPress={() => dispatch(togglePastWorkoutModal())}>
        <WorkoutCard />
      </TouchableHighlight>
      <Modal
        isVisible={modalOn}
        onBackdropPress={() => dispatch(togglePastWorkoutModal())}
      >
        <View style={styles.modalCard2}>
          <TouchableNativeFeedback
            onPress={() => dispatch(togglePastWorkoutModal())}
          >
            <View
              style={{
                width: 25,
                height: 15,
                backgroundColor: "#F9EBD7",
                borderRadius: 5,
              }}
            >
              <Text style={{ textAlign: "center", color: "#2B2118" }}>X</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  card: {
    width: "97%",
    padding: 10,
    margin: 5,
    opacity: 1,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#F9EBD7",
    borderWidth: 3,
    borderColor: "#F9EBD7",
    borderRadius: 10,
  },
  modalCard: {
    height: "95%",
    width: "99%",
    padding: 10,
    margin: 2,
    justifyContent: "center",
    backgroundColor: "#695645",
    borderWidth: 8,
    borderRadius: 10,
    borderColor: "#F9EBD7",
  },
  modalCard2: {
    height: "50%",
    width: "99%",
    margin: 2,
    opacity: 1,

    backgroundColor: "#695645",
    borderWidth: 8,
    borderRadius: 10,
    borderColor: "#695645",
  },
});
