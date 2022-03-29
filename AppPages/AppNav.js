import React from 'react';
import { Image, StyleSheet } from 'react-native';
import NavBar, { NavButton } from 'react-native-nav';

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
      <NavBar style={styles}>
        <NavButton style={styles.navButton} onPress={() => navigation.navigate('WorkoutList')}>
          <Image style={styles.image}
            resizeMode={"contain"}
            source={require('../img/search.png')}
          />
        </NavButton>
        <NavButton style={styles.navButton} onPress={()=>5}>
          <Image style={styles.image}
            resizeMode={"contain"}
            source={require('../img/stats.png')}
          />
        </NavButton>
        <NavButton style={styles.navButton} onPress={()=>5}>
          <Image style={styles.image}
            resizeMode={"contain"}
            source={require('../img/add.png')}
          />
        </NavButton>
        <NavButton style={styles.navButton} onPress={()=>5}>
          <Image style={styles.image}
            resizeMode={"contain"}
            source={require('../img/weight.png')}
          />
        </NavButton>
      </NavBar>
)
