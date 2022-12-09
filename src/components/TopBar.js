import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';
import {AuthContext} from '../navigation/AuthProvider';
import ImagePicker from 'react-native-image-crop-picker';
const TopBar = ({onModalDisplay}) => {
  const [showModal, setshowModal] = useState(false);
  const [image, setImage] = useState();
  const {logout} = useContext(AuthContext);
  const openPickerImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };
  return (
    <View style={styles.inputView}>
      <View style={styles.mainView}>
        <TouchableOpacity>
          <Ionicons name={'menu'} size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{left: 30, textAlign: 'center'}}>
          <Text style={{fontSize: 20, paddingLeft: 10, textAlign: 'center'}}>
            Search your notes
          </Text>
        </TouchableOpacity>
        <View style={styles.avatar}>
          <TouchableOpacity
            onPress={() => {
              setshowModal(true);
            }}>
            <Avatar.Image size={30} source={require('../../assest/ak.jpg')} />
          </TouchableOpacity>
          <View>
            <Modal
              animationType={'slide'}
              visible={showModal}
              onRequestClose={onModalDisplay}>
              <View style={styles.modelDisplay}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'red',
                    paddingLeft: 100,
                  }}>
                  Google
                </Text>
                <View style={{left: 100}}>
                  <TouchableOpacity
                    style={{flexDirection: 'row'}}
                    onPress={openPickerImage}>
                    <Avatar.Image
                      size={30}
                      source={
                        image ? {uri: image} : require('../../assest/ak.jpg')
                      }
                    />
                  </TouchableOpacity>
                  <Text style={styles.text}>ajeetnaurojpur@gmail.com</Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      logout();
                    }}>
                    <Text style={styles.buttonText}> LOGOUT</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  mainView: {
    marginTop: 10,
    marginLeft: 6,
    marginRight: 6,
    justifyContent: 'center',
  },
  inputView: {
    marginTop: 5,
    flexDirection: 'row',
    backgroundColor: '#6495ed',
    borderRadius: 50,
    // padding: 10,
    // opacity: 0.7,
  },
  text: {
    fontSize: 12,
    paddingRight: 200,
    color: 'black',
    textAlign: 'center',
    alignContent: 'center',
  },
  avatar: {
    left: 300,
    top: -13,
  },
  imageSize: {
    justifyContent: 'center',
    paddingLeft: 140,
  },
  proStyle: {
    width: 20,
    height: 20,
    resizeMode: 'center',
    color: 'red',
    borderRadius: 15,
    left: 350,
    top: -25,
    padding: 15,
  },
  modelDisplay: {
    width: 350,
    height: 200,
    marginTop: 8,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'white',
    elevation: 20,
    padding: 10,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#00bfff',
    alignItems: 'center',
    padding: 9,
    margin: 10,
    width: 150,
    borderRadius: 10,
    right: 50,
  },
});
