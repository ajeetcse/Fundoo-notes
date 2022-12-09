import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../components/Custombutton';
import Textvalue from '../components/Textvalue';
import { AuthContext } from '../navigation/AuthProvider';

const Registration = () => {
  const [name,setUserInput] = useState(' ');
  const [email,SetEmail] = useState('');
  const [password,SetPassword] = useState('');

  const {register} = useContext(AuthContext);

  return (
    <View style={styles.mainBody}>
      <View style={styles.subView}>
        <Text style={styles.text}> Craete An Account</Text>
      </View>
      <View>
        <Text style={{fontWeight: 'bold'}}>Name</Text>
      </View>
      <View>
        <Textvalue
        placeholder="First name"
        setValue={text => setUserInput(text)} value={name}
        />
      </View>
      <View>
      <Textvalue
        placeholder="Last name"
        setValue={text => setUserInput(text)}
        />
      </View>
      <View>
        <Text style={{fontWeight: 'bold'}}> Choose your username</Text>
        <Textvalue
        placeholder="Email id"
         setValue={text => SetEmail(text)} value={email}
        />
      </View>
      <View>
        <Text style={{fontWeight: 'bold'}}>Create a password</Text>
       <Textvalue
       placeholder="Password"
       setValue={text=>SetPassword(text)} value={password}
       />
        <Text style={{fontWeight: 'bold'}}>Confirm your password</Text>
        <Textvalue
       placeholder="Password"
       setValue={text=>SetPassword(text)} value={password}
       />
      </View>
      <View>
        <CustomButton
          style={{padding: 20}}
          MyText="REGISTER"
          buttonOnClick={() => register(email,password)
          }
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('');
        }}>
        <Text style={{color: 'blue', alignSelf: 'center'}}>
          Already Register? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Registration;

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
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    justifyContent: 'center',
    textAlign: 'center',
  },
});


