import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import type { Node } from 'react';
import React from 'react';
import { Image, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import ExercisePage from './ExercisePage';
import NewWorkoutPage from './NewWorkoutPage';
import WorkoutHistoryPage from './WorkoutHistoryPage';

// Main page (loaded first after login page)
const MainAppTabNavigation: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const MyTheme = {
    dark: true,
    colors: {
      primary: 'rgb(255,0, 0)',
      background: '#695645',
      card: 'rgb(43,33,24)',
      text: 'rgb(255,255, 255)',
      border: '#695645',
      notification: 'rgb(255,255, 255)',
    },
  };
  return (
    //Entire app is within a Navigation container (react navigation)
    <NavigationContainer theme={MyTheme} >
      {/* Setting the status bar style (phone icons like battery and cell connection) */}
      <StatusBar barStyle={'light-content'} />
      {/* Main tab navigation located at bottom of App at all times
          below we have the stylization of the Tab.Navigator*/}
      <Tab.Navigator
      initialRouteName='New Workout'
      theme={MyTheme}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          shadowOffset: {
              width: 0,
              height: 8,
          },
          shadowOpacity: 1,
          shadowRadius: 16.0,
          elevation: 24,
          borderTopLeftRadius: 22,
          borderTopRightRadius: 22,
          backgroundColor: '#2B2118',
          position: 'absolute',
          bottom: 0,
          padding: 10,
          width: '100%',
          height: '10%',
          zIndex: 0,
      },
        tabBarIcon: ({ focused, color, size, tintColor }) => {
          if (route.name === 'Exercises') {
            if(focused) {
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('../img/inverted-search.png')}
              />;
            }else{
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('../img/grey-search.png')}
              />;
            }
          } else if (route.name === 'Past Workouts') {
            if(focused) {
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('../img/inverted-chart.png')}
              />;
            }else{
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('../img/grey-chart.png')}
              />;
            }
          } else if (route.name === 'New Workout')  {
            if(focused) {
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('../img/inverted-square-add.png')}
              />;
            }else{
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('../img/grey-square-add.png')}
              />;
            }
          }else if (route.name === 'Weight Room') {
            if(focused) {
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('../img/inverted-man-working.png')}
              />;
            }else{
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('../img/grey-man-working.png')}
              />;
            }
          }else if (route.name === 'Profile') {
            if(focused) {
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('../img/inverted-gorilla.png')}
              />;
            }else{
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('../img/grey-gorilla.png')}
              />;
            }
          }
        },
        
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarActiveBackgroundColor: '#2B2118',
        tabBarInactiveBackgroundColor: '#2B2118',
      })}>
        {/* All Tab.Screens, where the "name" denotes the name to 
            navigate to using the navigate prop (ie: 
            navigation.navigate('Profile)). The "component" is which page will
            be loaded. */}
        <Tab.Screen name="Exercises" component={ExercisePage} />
        <Tab.Screen name="Past Workouts" component={WorkoutHistoryPage} />
        <Tab.Screen name="New Workout" component={NewWorkoutPage} />
        <Tab.Screen name="Weight Room" component={WorkoutHistoryPage} />
        <Tab.Screen name="Profile" component={WorkoutHistoryPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});


export default MainAppTabNavigation;