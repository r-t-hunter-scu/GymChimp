import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { Card } from 'react-native-shadow-cards';
import SetComponent from './SetComponent';


const initialList = [
    {
      id: 1,
    },
  ];
export default ({num}) => {
    const [list, setList] = React.useState(initialList);
    const [id, setId] = React.useState(2);
    //add new set component on press
    const handleAdd = () => {
        const newL = list.concat({id});
        setId(id + 1)
        setList(newL);

    } 
    const renderItem = ({ item }) => <SetComponent num={item.id}/>;

    return(
    <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.text}>Squat</Text>
        {/* rendering list of sets */}
        <FlatList
		data={list}
		renderItem={renderItem}
		keyExtractor={(item) => item.id}
		/>
        <TouchableHighlight onPress={handleAdd}>
            <Card style={styles.card}>
                <Text style={styles.text}>Add Set</Text>
            </Card>
        </TouchableHighlight>
    </View>
    )
}

const styles = StyleSheet.create({
    text: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center'
    },
    card: {
        width: 100,
        textAlign: 'center',
        backgroundColor: '#2B2118'
    }
});