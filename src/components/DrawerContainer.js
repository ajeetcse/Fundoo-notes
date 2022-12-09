import React, { useContext } from 'react';
//import { AuthContext } from '../navigation/AuthProvider';

import {View, StyleSheet, Text} from 'react-native';
//import {useNavigation} from '@react-navigation/native';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';

function DraewrContainer (props){
  return (
<DrawerContentScrollView {...props}>
<View style={styles.mainView}>
<Text style={styles.mainText}>Fundoo Notes</Text>
</View>
<View style={{flex:1,paddingTop:15}}>
<DrawerItemList {...props}/>
</View>
</DrawerContentScrollView>
  );
};
export default DraewrContainer;
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  mainText: {
    fontSize: 32,
    fontFamily: 'arial',
    fontWeight: 'bold',
    color: '#00ffff',
  },
  textView: {
    fontSize: 16,
    color: 'black',
    paddingBottom: 5,
  },
});
