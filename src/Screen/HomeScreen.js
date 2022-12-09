import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
//import CustomButton from '../components/Custombutton';

import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topAndBottom}>
        <TopBar/>
      </View>
      <View style={styles.NoteList}>
        <Text>hello</Text>
      </View>
      <View style={styles.topAndBottom}>
        <BottomBar />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  topAndBottom: {
    flex: 0.1,
  },
  NoteList: {
    flex: 0.8,
    marginEnd: 10,
  },
  modelDisplay: {
    width: 300,
    height: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
    textAlign: 'conter',
  },
});
