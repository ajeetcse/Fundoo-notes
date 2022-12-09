import React from 'react';
//import {View,Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerStack from './DrawerStack';
import Notes from '../Screen/Notes';
//import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DrawerStack" component={DrawerStack}options={{headerShown: false}} />
            <Stack.Screen name ="Notes" component ={Notes} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
};
export default AppStack;
