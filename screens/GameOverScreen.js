import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {


    return (
        <View style={styles.screen}>
            <Text> Game is over</Text>
            <Text>Number was :{props.userNumber}</Text>
            <Text>Number of Round :{props.roundsNumber}</Text>
            <Text>Timer :{props.time}</Text>

            <Button title="New Game" onPress={props.onRestart} />
        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GameOverScreen;