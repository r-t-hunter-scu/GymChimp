import React from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import WorkoutNav from './WorkoutNav';
var styles = StyleSheet.create({
  content:{
      flex:1,
      flexDirection:'column',
  },
});

export default ({ navigation }) =>(
          <ScrollView contentContainerStyle={styles.content}
          contentInsetAdjustmentBehavior="automatic">
            <WorkoutNav navigation={navigation}/>
            <WorkoutNav navigation={navigation}/>
            <WorkoutNav navigation={navigation}/>
            <WorkoutNav navigation={navigation}/>
            <WorkoutNav navigation={navigation}/>
            <WorkoutNav navigation={navigation}/>
          </ScrollView>
);