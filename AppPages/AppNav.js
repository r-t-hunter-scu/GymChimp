import React from 'react';
import { StyleSheet, View } from 'react-native';
import Search from '../MyComponents/SearchBar';

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#EFB905',
  },
  navBar: {
    backgroundColor: '#EFB905',
  },
  title: {
    color: '#E7259C',
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
})

export default ({ navigation }) => (
  <View>
    <Search/>
  </View>
)
