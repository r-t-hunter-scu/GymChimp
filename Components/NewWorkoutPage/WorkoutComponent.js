import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { Card } from 'react-native-shadow-cards';
import ExerciseComponent from './ExerciseComponent';

const initialList = [
    {
      id: 1,
    },
  ];
export default ({navigation}) => {
    const [list, setList] = React.useState(initialList);
    const [id, setId] = React.useState(2);
    const handleAdd = () => {
        const newL = list.concat({id});
        setId(id + 1)
        setList(newL);

    } 
    const renderItem = ({ item }) => <ExerciseComponent num={item.id}/>;

    return(
    <View style={{flex: 1, alignItems: 'center'}}>
        <FlatList
		data={list}
		renderItem={renderItem}
		keyExtractor={(item) => item.id}
		/>
        <TouchableHighlight onPress={handleAdd}>
            <Card style={styles.card}>
                <Text style={styles.text}>Add Exercise</Text>
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
        width: 150,
        textAlign: 'center',
        backgroundColor: '#2B2118'
    }
});