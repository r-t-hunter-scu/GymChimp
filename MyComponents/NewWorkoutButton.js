import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { Card } from 'react-native-shadow-cards';


export default ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
	  setModalVisible(!isModalVisible);
	};


  return(
    <View>
        <TouchableHighlight onPress={toggleModal}>
            <Card style={styles.card}>
                <Text style={{textAlign: 'center', color:'#000', fontSize: 20}}>New Empty Workout</Text>
            </Card>
        </TouchableHighlight>


        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
            <View style={{ borderRadius: 10, overflow: 'hidden'}}>
                <Card  style={styles.modalCard}>
                    <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                        <Button onPress={toggleModal} title="x"/>
                    </View>
                    <Text style={styles.text}>Exercises: </Text>
                    <FlatList></FlatList>
                </Card>
            </View>
        </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20
    },
    card: {
        width: '99%', 
        padding: 10, 
        margin: 2, 
        opacity: 1, 
        justifyContent: 'center',
        backgroundColor: '#EFB905', 
        borderWidth: 3, 
        borderColor: '#EFB905',
      },
    modalCard: {
        height: '95%',
        width: '99%', 
        padding: 10, 
        margin: 2, 
        opacity: 1, 
        justifyContent: 'center',
        backgroundColor: '#EFB905', 
        borderWidth: 8, 
        borderRadius: 10,
        borderColor: '#695645',
    },
    })