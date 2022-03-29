/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// Color theme: dark-brown: #2B2118, light brown: #695645, yellow: #EFB905
// Card documentation: 
// navbar documentation: https://morioh.com/p/c472677920a1
// searchbar documentation: https://callstack.github.io/react-native-paper/searchbar.html
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import type { Node } from 'react';
import React from 'react';
import { Image, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import AppNav from './AppPages/AppNav';
import WorkoutHistory from './AppPages/WorkoutHistory';



const App: () => Node = () => {
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
    <NavigationContainer theme={MyTheme} >
      <StatusBar barStyle={'light-content'} />
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
          height: '9.9%',
          zIndex: 0,
      },
        tabBarIcon: ({ focused, color, size, tintColor }) => {
          let iconName;

          if (route.name === 'Excercises') {
            if(focused) {
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('./img/inverted-search.png')}
              />;
            }else{
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('./img/grey-search.png')}
              />;
            }
          } else if (route.name === 'Past Workouts') {
            if(focused) {
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('./img/inverted-chart.png')}
              />;
            }else{
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('./img/grey-chart.png')}
              />;
            }
          } else if (route.name === 'New Workout')  {
            if(focused) {
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('./img/inverted-square-add.png')}
              />;
            }else{
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('./img/grey-square-add.png')}
              />;
            }
          }else if (route.name === 'Weight Room') {
            if(focused) {
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('./img/inverted-man-working.png')}
              />;
            }else{
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('./img/grey-man-working.png')}
              />;
            }
          }else if (route.name === 'Profile') {
            if(focused) {
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('./img/inverted-gorilla.png')}
              />;
            }else{
              return <Image style={styles.image}
                resizeMode={"contain"}
                source={require('./img/grey-gorilla.png')}
              />;
            }
          }
        },
        
        tabBarBackgroundColor: 'white',
        tabBarActiveTintColor: 'grey',
        tabBarInactiveTintColor: 'grey',
        tabBarActiveBackgroundColor: '#2B2118',
        tabBarInactiveBackgroundColor: '#2B2118',
      })}>
        <Tab.Screen name="Excercises" component={AppNav} />
        <Tab.Screen name="Past Workouts" component={WorkoutHistory} />
        <Tab.Screen name="New Workout" component={WorkoutHistory} />
        <Tab.Screen name="Weight Room" component={WorkoutHistory} />
        <Tab.Screen name="Profile" component={WorkoutHistory} />
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

export default App;