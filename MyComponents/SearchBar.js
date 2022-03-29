import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";

const DATA = [
{
	id: "1",
	title: "Bench",
},
{
	id: "2",
	title: "Rows",
},
{
	id: "3",
	title: "Pull-Ups",
},
{
	id: "4",
	title: "Push-Ups",
},
{
	id: "5",
	title: "Abs",
},
{
	id: "6",
	title: "Back",
},
{
	id: "7",
	title: "Shoulder Press",
},
{
	id: "8",
	title: "Burpees",
},
{
	id: "9",
	title: "Curls",
},
{
	id: "10",
	title: "Leg Curls",
},
{
	id: "11",
	title: "Nordic Curls",
},
{
	id: "12",
	title: "Squats",
},
];

const Item = ({ title }) => {
return (
	<View style={styles.item}>
	<Text>{title}</Text>
	</View>
);
};

const renderItem = ({ item }) => <Item title={item.title} />;
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
		<SearchBar
		placeholder="Search Here..."
		lightTheme
		round
		value={this.state.searchValue}
		onChangeText={(text) => this.searchFunction(text)}
		autoCorrect={false}
		/>
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
    marginBottom: '55%',
	padding: 0,
},
item: {
	backgroundColor: "#EFB905",
	padding: 20,
	marginVertical: 1,
	marginHorizontal: 0,
},
});

