import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomButton from '../components/Custombutton';
import Textvalue from '../components/Textvalue';
import {AuthContext} from '../navigation/AuthProvider';

const ResetPassword = ({navigation}) => {
  const onSignIn = () => {
    navigation.navigate('Login');
  };
  const [email,setEmail] = useState('');
  const {reset} = useContext(AuthContext);

  return (
    <View style={styles.mainBody}>
      <View style={styles.subView}>
        <Text style={styles.text}> Reset your password </Text>
      </View>
      <View>
      <View>
        <Textvalue
        placeholder="Email"
        setValue={text => setEmail(text)} value={email}
        />
      </View>
      </View>
      <View>
        <CustomButton
          MyText="Next"
          onPress={() => {
            reset(email);
          }}
        />
      </View>
      <View>
        <CustomButton
          MyText="Back to Signin"
          buttonOnClick={() => {
            onSignIn();
          }}
        />
      </View>
    </View>
  );
};

export default ResetPassword;

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
  input: {
    width: 400,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
