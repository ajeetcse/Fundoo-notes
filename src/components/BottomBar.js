import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//import Notes from '../screens/Notes';

function BottomBar() {
const navigation = useNavigation();
  return (
    <View style={styles.viewMain}>
      <TouchableOpacity style={{marginLeft: 20}} onPress={() => {}}>
        <Ionicons name="checkbox-outline" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft: 20}} onPress={() => {}}>
        <Ionicons name="md-brush" size={25} />
      </TouchableOpacity>

      <TouchableOpacity style={{marginLeft: 20}} onPress={() => {}}>
        <Ionicons name="mic" size={25} />
      </TouchableOpacity>

      <TouchableOpacity style={{marginLeft: 20}} onPress={() => {}}>
        <Ionicons name="ios-image" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Notes')}
        >
        <Ionicons name="add" size={50} color={'black'}/>
      </TouchableOpacity>
    </View>
  );
}
export default BottomBar;
const styles = StyleSheet.create({
  viewMain: {
    width: '100%',
    height: 50,
    borderColor: 'white',
    marginTop: 10,
    opacity: 0.8,
    flexDirection: 'row',
    backgroundColor: '#6495ed',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius:15,
  },
  floatingButton: {
    height: 80,
    width: 80,
    borderWidth: 10,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6495ed',
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 30,
    marginBottom: 30,
    marginRight: 10,
  },
});

