import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { Component } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { useDispatch } from "react-redux";
import { DATA } from "../../localStore/ListOfExercises";
import {
  incrementExercises,
  toggleSearchModal,
} from "../../store/counterSlice";
//How each item(exercise) on the SearchPage will be rendered
const Item = ({ title, imgSource }) => {
  const dispatch = useDispatch();
  const incrementAndClose = () => {
    dispatch(incrementExercises(title));
    dispatch(toggleSearchModal());
  };
  return (
    <View>
      <TouchableNativeFeedback onPress={() => incrementAndClose()}>
        <View style={styles.card}>
          <Image source={imgSource} />
          <View style={{ flexWrap: "wrap" }}>
            <Text
              style={{
                color: "#F9EBD7",
                fontSize: 20,
                justifyContent: "center",
                overflow: "scroll",
              }}
            >
              {title}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
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
