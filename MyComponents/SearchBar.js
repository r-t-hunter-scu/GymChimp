import React, { Component } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-elements";
import NavBar, { NavButton, NavTitle } from "react-native-nav";
import { DATA } from '../localStore/ListOfExercises';



const Item = ({ title, imgSource }) => {
return (
	<NavBar backgroundColor={'blue'}>
		<NavTitle>{title}</NavTitle>
			<NavButton>
				<Image
            		source={imgSource}
    			/>
			</NavButton>
	</NavBar>
);
};

const renderItem = ({ item }) => <Item title={item.title} imgSource={item.imgSource} />;

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
		placeholder="ie: Bench Press"
		darkTheme
		value={this.state.searchValue}
		onChangeText={(text) => this.searchFunction(text)}
		autoCorrect={true}
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

