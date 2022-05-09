import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  finishWorkout,
  toggleCurrentModal,
  toggleSearchModal,
} from "../../store/counterSlice";
import AddExerciseSearch from "./AddExerciseSearch";
import WorkoutComponent from "./WorkoutComponent";

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const modalOne = useSelector((state) => state.counter.CurrentExerciseModal);
  const modalTwo = useSelector((state) => state.counter.ExerciseSearchModal);

  const finish = () => {
    dispatch(finishWorkout());
    dispatch(toggleCurrentModal());
  };
  return (
    <View>
      <TouchableNativeFeedback onPress={() => dispatch(toggleCurrentModal())}>
        <View style={styles.card}>
          <Text style={{ textAlign: "center", color: "#000", fontSize: 20 }}>
            New Empty Workout
          </Text>
        </View>
      </TouchableNativeFeedback>

      {/* Visualizing Modal onPress which renders WorkoutComponent */}
      <Modal
        isVisible={modalOne}
        animationIn={"bounceIn"}
        animationOut={"fadeOut"}
        animationInTiming={200}
        animationOutTiming={150}
        onBackButtonPress={() => dispatch(toggleCurrentModal())}
        onBackdropPress={() => dispatch(toggleCurrentModal())}
      >
        <Modal
          isVisible={modalTwo}
          animationIn={"fadeIn"}
          animationOut={"fadeOut"}
          alignSelf={"center"}
          onBackdropPress={() => dispatch(toggleSearchModal())}
          onBackButtonPress={() => dispatch(toggleSearchModal())}
        >
          <View style={styles.modalCard2}>
            <AddExerciseSearch />
          </View>
        </Modal>
        <View style={{ borderRadius: 10 }}>
          <View style={styles.modalCard}>
            <View
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TouchableNativeFeedback
                onPress={() => dispatch(toggleCurrentModal())}
              >
                <View
                  style={{
                    width: 25,
                    height: 15,
                    backgroundColor: "#F9EBD7",
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ textAlign: "center", color: "#2B2118" }}>
                    X
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View
              style={{
                justifyContent: "flex-end",
                flexDirection: "row",
              }}
            >
              <TouchableNativeFeedback onPress={() => finish()}>
                <View
                  style={{
                    width: 50,
                    height: 20,
                    backgroundColor: "#F9EBD7",
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#2B2118",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    Finish
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
            <Text style={styles.text}>Workout </Text>
            <WorkoutComponent />
          </View>
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
    height: 500,
    width: 275,
    margin: 2,
    padding: 1,

    backgroundColor: "#695645",
    borderWidth: 4,
    borderRadius: 10,
    borderColor: "#695645",
  },
});
