import React from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import WorkoutCard from './WorkoutCard';
var styles = StyleSheet.create({
  content:{

  },
});

//lis
export default ({ navigation }) =>(
          <ScrollView contentContainerStyle={styles.content}
          contentInsetAdjustmentBehavior="automatic">
            <WorkoutCard navigation={navigation}/>
            <WorkoutCard  navigation={navigation}/>
            <WorkoutCard  navigation={navigation}/>
            <WorkoutCard  navigation={navigation}/>
            <WorkoutCard  navigation={navigation}/>
            <WorkoutCard  navigation={navigation}/>
          </ScrollView>
);