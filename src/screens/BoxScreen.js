import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            </View>
            <View style={styles.viewTwoStyle}>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            </View>
            <View style={styles.viewThreeStyle}>
            <Text style={styles.textThreeStyle}>Child #3</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: "black",
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: "red",
        alignSelf: 'flex-start'
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: "red",
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: "red",
        alignSelf: 'flex-start'
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'

    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
    },
})

export default BoxScreen;
