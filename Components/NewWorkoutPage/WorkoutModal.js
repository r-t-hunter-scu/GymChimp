import React from 'react';
import { Button, Text, View } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import WorkoutComponent from './WorkoutComponent';



export default ({}) => {
    return(
        <Card  style={styles.modalCard}>
            <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                <Button onPress={toggleModal} title="x"/>
            </View>
            <Text style={styles.text}>Exercises </Text>
            <WorkoutComponent />
        </Card>
    );
}