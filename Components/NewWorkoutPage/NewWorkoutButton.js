import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { Card } from "react-native-shadow-cards";
import WorkoutComponent from "./WorkoutComponent";

export default ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableHighlight onPress={toggleModal}>
        <Card style={styles.card}>
          <Text style={{ textAlign: "center", color: "#000", fontSize: 20 }}>
            New Empty Workout
          </Text>
        </Card>
      </TouchableHighlight>

      {/* Visualizing Modal onPress which renders WorkoutComponent */}
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={{ borderRadius: 10 }}>
          <Card style={styles.modalCard}>
            <View
              style={{
                justifyContent: "flex-end",
                flexDirection: "row",
              }}
            >
              <TouchableHighlight onPress={toggleModal}>
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
              </TouchableHighlight>
            </View>
            <Text style={styles.text}>Exercises </Text>
            <WorkoutComponent />
          </Card>
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
    width: "99%",
    padding: 10,
    margin: 2,
    opacity: 1,
    justifyContent: "center",
    backgroundColor: "#F9EBD7",
    borderWidth: 3,
    borderColor: "#F9EBD7",
  },
  modalCard: {
    height: "95%",
    width: "99%",
    padding: 10,
    margin: 2,
    opacity: 1,
    justifyContent: "center",
    backgroundColor: "#695645",
    borderWidth: 8,
    borderRadius: 10,
    borderColor: "#F9EBD7",
  },
});
