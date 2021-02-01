import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState("");

    return (
        <View>
            <Text>Enter Password: </Text>
            <TextInput
              style={styles.input}
              value={password}
              autoCapitalize="none"
              autoCorrect={false}
              onChange={(text) => {
                setPassword(text)
              }}
            />
            <Text>My Password is: {password}</Text>
            {password.length < 4 ? <Text>Password must be longer than 4 characters.</Text> : null}
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