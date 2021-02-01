import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {
    const [text, setText] = useState("");

    return (
        <View>
            <Text>Text Screen</Text>
            <TextInput
              style={styles.input}
              value={text}
              onChange={(text) => {
                setText(text)
              }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
})

export default TextScreen;