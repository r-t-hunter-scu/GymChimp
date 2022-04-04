import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { Card } from 'react-native-shadow-cards';
const styles = StyleSheet.create({
  statusBar: {   
    backgroundColor: '#EFB905',
  },
  navBar: {
    backgroundColor: '#EFB905',
    height: 40
  },
  title: {
    color: '#000',
    height: 30,
  },
  buttonText: {
    color: 'rgba(231, 37, 156, 0.5)',
  },
  navButton: {
    flex: 1,
  },
  image: {
    width: 30,
    height: 30,
  },
  card: {
    width: '99%', 
    padding: 10, 
    margin: 2, 
    opacity: 1, 
    justifyContent: 'center',
    backgroundColor: '#695645', 
    borderWidth: 3, 
    borderColor: '#EFB905',
  },
})

export default ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
	const toggleModal = () => {
	  setModalVisible(!isModalVisible);
	};
  return(
    <View>
        <TouchableHighlight onPress={toggleModal}>
            <Card style={styles.card}>
                <Text style={{color:'#EFB905', fontSize: 20}}>New Empty Workout</Text>
            </Card>
        </TouchableHighlight>
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
            <View style={{ borderRadius: 10, overflow: 'hidden'}}>
                <Card  style={{height: '95%', width: '100%'}}>

                </Card>
            </View>
        </Modal>
    </View>
  );
}