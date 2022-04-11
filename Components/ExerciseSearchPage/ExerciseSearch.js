import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { Component, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { TouchableHighlight } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { Card } from "react-native-shadow-cards";
import { useDispatch } from "react-redux";
import AboutExercise from "../../AppPages/ModalPages/AboutExercise";
import ExerciseHistory from "../../AppPages/ModalPages/ExerciseHistory";
import { DATA } from "../../localStore/ListOfExercises";
//How each item(exercise) on the SearchPage will be rendered
const Item = ({ title, imgSource }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <TouchableHighlight onPress={toggleModal}>
        <Card style={styles.card}>
          <Image source={imgSource} />
          <Text
            style={{ color: "#F9EBD7", fontSize: 30, justifyContent: "center" }}
          >
            {title}
          </Text>
        </Card>
      </TouchableHighlight>
      {/* Each searchable exercise will bring up a pop-up (Modal)
			that will tell the user about the exercise */}
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          <Card style={styles.modal}>
            <Tab.Navigator>
              <Tab.Screen
                name="About"
                children={() => <AboutExercise title={title} />}
              />
              <Tab.Screen name="History" children={() => <ExerciseHistory />} />
              <Tab.Screen name="graphs" children={() => <ExerciseHistory />} />
            </Tab.Navigator>
          </Card>
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
  image: {
    width: 30,
    marginBottom: 15,
  },
  modal: {
    opacity: 1,
    width: "100%",
    height: 550,
    backgroundColor: "#000",
  },
  card: {
    width: "100%",
    padding: 10,
    margin: 0,
    opacity: 1,
    backgroundColor: "#695645",
    borderWidth: 5,
    borderColor: "#2B2118",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 0,
  },
});
