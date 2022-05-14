import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { Component, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { SearchBar } from "react-native-elements";
import Modal from "react-native-modal";
import { DATA } from "../../localStore/ListOfExercises";
import AboutExercise from "./ModalPages/AboutExercise";
import ExerciseHistory from "./ModalPages/ExerciseHistory";

//How each item(exercise) on the SearchPage will be rendered
const Item = ({ title, imgSource }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <TouchableNativeFeedback onPress={toggleModal}>
        <View style={styles.card}>
          <Image source={imgSource} style={styles.image} />
          <Text
            style={{ color: "#F9EBD7", fontSize: 30, justifyContent: "center" }}
          >
            {title}
          </Text>
        </View>
      </TouchableNativeFeedback>
      {/* Each searchable exercise will bring up a pop-up (Modal)
			that will tell the user about the exercise */}
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          <View style={styles.modal}>
            <Tab.Navigator>
              <Tab.Screen
                name="About"
                children={() => <AboutExercise title={title} />}
              />
              <Tab.Screen name="History" children={() => <ExerciseHistory />} />
              <Tab.Screen name="graphs" children={() => <ExerciseHistory />} />
            </Tab.Navigator>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();
//creating renderItem function to be used by the FlatList component
const renderItem = ({ item }) => (
  <Item title={item.title} imgSource={item.imgSource} />
);

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: DATA,
      error: null,
      searchValue: "",
    };
    this.arrayholder = DATA;
  }

  //Searching through the items in the current search to see
  //if the text currently in the search bar matches any of the entries
  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.title.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* SearchBar component + stylization. Also takes in the searchFunction()
			and runs it whenever the text changes within the Searchbar*/}
        <SearchBar
          placeholder="ie: Bench Press"
          darkTheme
          round={true}
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={true}
        />
        {/* FlatList component rendering the current data */}
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
  },
  container: {
    marginTop: 0,
    marginBottom: "38%",
    padding: 0,
  },
  navBar: {
    backgroundColor: "#EFB905",
    padding: 20,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  title: {
    color: "#FFF",
  },
  statusBar: {
    backgroundColor: "#EFB905",
  },
  modal: {
    opacity: 1,
    width: "100%",
    height: 550,
    backgroundColor: "#000",
  },
  card: {
    width: "100%",
    height: 50,
    opacity: 1,
    backgroundColor: "#695645",
    borderWidth: 2,
    borderColor: "#2B2118",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});
