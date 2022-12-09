import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Textvalue = ({ placeholder, setValue, value, password }) => {

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={setValue}
                value={value}
                secureTextEntry={password}
            />
        </View>
    );
};
export default Textvalue;
const styles = StyleSheet.create({
    input: {
        width: 400,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
});

