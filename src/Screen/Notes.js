import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
//import Textvalue from '../components/Textvalue';

const Notes = props => {
  return (
    <View>
      <TextInput
        style={styles.titleText}
        placeholder="Title"
        value={props.title}
        onChangeText={value => props.setTitle(value)}
      />
      <TextInput
        style={styles.noteText}
        placeholder="Note"
        multiline={true}
        value={props.note}
        onChangeText={value => props.setNote(value)}
      />
    </View>
  );
};
export default Notes;
const styles = StyleSheet.create({
  titleText: {
    paddingTop: 30,
    padding: 20,
    fontSize: 30,
    color: 'black',
    marginBottom: -17,
    marginTop: 30,
  },
  noteText: {
    padding: 20,
    fontSize: 20,
    color: 'black',
  },
});
