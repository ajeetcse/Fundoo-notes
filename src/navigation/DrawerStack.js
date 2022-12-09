import React from 'react';
import {} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screen/HomeScreen';
import Reminder from '../Screen/Reminder';
import Labels from '../Screen/Labels';
import Archive from '../Screen/Archive';
import Delete from '../Screen/Delete';
import Setting from '../Screen/Setting';
import DrawerContainer from '../components/DrawerContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLableStyle: {
          marginLeft: -30,
        },
      }}
      drawerContent={props => <DrawerContainer {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Reminder"
        component={Reminder}
        options={{
          drawerIcon: () => (
            <Ionicons name="md-notifications-outline" size={25} style={{color: 'blue'}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Labels"
        component={Labels}
        options={{
          drawerIcon: () => (
            <Ionicons name="add-outline" size={25} style={{color: 'blue'}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Archive"
        component={Archive}
        options={{
          drawerIcon: () => (
            <Ionicons name="archive" size={25} style={{color: 'blue'}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Delete"
        component={Delete}
        options={{
          drawerIcon: () => (
            <Ionicons name="trash-outline" size={25} style={{color: 'blue'}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: () => (
            <Ionicons name="ios-settings-outline" size={25} style={{color: 'blue'}} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerStack;
