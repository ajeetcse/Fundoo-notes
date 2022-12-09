import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import CustomText from '../components/CustomText';
import CustomButton from '../components/Custombutton';
import Textvalue from '../components/Textvalue';
import {AuthContext} from '../navigation/AuthProvider';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import { firebase } from '@react-native-firebase/auth';
//import firebase from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [email, setUserInput] = useState(' ');
  const [error, setError] = useState({});
  const [password, setPwd] = useState('');

  const {login, googleLogin} = useContext(AuthContext);

  const validation = () => {
    let regxEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let regxPassword = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{7,15}$/;
    const array = {};
    let valid = true;

    if (email === '' || !regxEmail.test(email)) {
      array.user = 'Please Enter valid email';
      valid = false;
    }

    if (email.length < 9 && email.length > 1) {
      array.user = 'Please enter email more than 6 character';
      valid = false;
    }

    if (password === '' || regxPassword.test(password)) {
      array.password = 'Please Enter valid password';
      valid = false;
    }
    if (password.length < 6 && !password.length > 1) {
      array.password = 'Please enter password more than 6 character';
      valid = false;
    }
    setError(array);
    return valid;
  };
  const onSignIn = () => {
    if (validation()) {
      console.log('Login successfully');
      login(email, password);
    }
  };

  const onRegister = () => {
    navigation.navigate('Registration');
  };
  // const onResetpwd = () => {
  //  firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
  //  .then(()=>{
  //   //alert('Password reset email sent')
  //   console.log('Password reset email sent');
  //  }).catch((error)=>{
  //   //alert(error);
  //   console.log('error');
  //  });
  // };

  console.log(email);
  return (
    <View style={styles.mainBody}>
      <Image style={styles.image} source={require('../../assest/Icon.png')} />

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
            margin: 10,
          }}>
          Email
        </Text>
      </View>
      <View>
        <Textvalue
          placeholder="Enter email"
          setValue={text =>setUserInput(text)}
          value={email}
        />
        <Text style={{color: 'red', alignSelf: 'center', margin: 5}}>
          {error.user}
        </Text>
      </View>
      <View>
        <Textvalue
          placeholder="Enter Password"
          setValue={text => setPwd(text)}
          value={password}
        />
        <Text style={{color: 'red', alignSelf: 'center', margin: 5}}>
          {error.password}
        </Text>
      </View>
      <View>
        <CustomButton MyText="LogIn" buttonOnClick={() => onSignIn()} />
      </View>
      <View>
        <CustomText
          ButtonText="Goole-signin"
          buttonClick={() => googleLogin(email)}
        />
        <CustomText
          ButtonText="create an account"
          buttonClick={() => onRegister()}
        />
        <CustomText
          ButtonText="Forget Password ?"
          buttonClick={() => navigation.navigate('ResetPassword')}
        />
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  mainBody: {
    flex: 0,
    padding: 0,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  subView: {
    width: '100%',
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  image: {
    height: 100,
    width: 100,
    margin: 10,
    alignSelf: 'center',
  },
  buttonTxt: {
    color: '#0000ff',
    textAlign: 'center',
    margin: 5,
  },
});
