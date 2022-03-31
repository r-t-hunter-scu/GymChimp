import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
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
    opacity: .9, 
    backgroundColor: '#695645', 
    borderWidth: 3, 
    borderColor: '#EFB905',
  },
})

export default ({ navigation }) => (
  <Card style={styles.card}>
    <Text style={{color:'#EFB905', fontSize: 20}}>Workout card</Text>
    <Button
      onPress={()=>navigation.navigate('AppNav')}
      title="add"
      color='white'
    />
  </Card>
)