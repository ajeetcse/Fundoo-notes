import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const CustomButton = ({ MyText, buttonOnClick }) => {
  return (
    <TouchableOpacity onPress={buttonOnClick}>
      <View style={styles.button}>
        <Text style={styles.buttonTxt}>{MyText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#42A5F5',
    alignItems: 'center',
    padding: 8,
    margin: 10,
    width: 150,
    marginBottom: 20,
    borderRadius: 10,
    alignSelf:'center',
  },
  buttonTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default CustomButton;