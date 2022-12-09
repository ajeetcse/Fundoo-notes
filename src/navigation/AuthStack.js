import React, {useEffect} from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {NavigationContainer} from '@react-navigation/native';
import Login from '../Screen/Login';
import Registration from '../Screen/Registration';
import ResetPassword from '../Screen/ResetPassword';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '333709305939-ohmm75bdcqocf9n44k8kj3vatapakhb7.apps.googleusercontent.com',
    });
  }, []);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
