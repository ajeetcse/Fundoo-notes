import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
const CustomText = ({ButtonText, buttonClick}) => {
  return (
    <TouchableOpacity onPress={buttonClick}>
      <View>
        <Text style={styles.buttonTxt}>{ButtonText}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default CustomText;
const styles = StyleSheet.create({
  buttonTxt: {
    color: '#0000ff',
    textAlign: 'center',
    margin: 5,
  },
});


