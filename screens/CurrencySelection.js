import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native';

const App = ({
  navigation
}) => {
  
  return(
    <View style={styles.container}>
      <Image style={styles.imgLogo} source={require('../assets/logo.png')}/>

      <TextInput 
        style={styles.txtInput} 
        placeholder="Insira seu nome">
      </TextInput>
      <View style={styles.viewInit}>
        <TouchableOpacity style={styles.buttonInit}>
          <Text style={styles.txtInit} onPress={() => navigation.navigate('HelloPage')}>Iniciar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewLeave}>
        <TouchableOpacity style={styles.buttonLeave} onPress={() => navigation.goBack('')}>
          <Text style={styles.txtLeave}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightskyblue',
    flex: 1,
    alignItems: 'center',
  },
  imgLogo:{
    width: 200, 
    height: 200,
  },
  texts: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  txtInput: {
    marginTop:'30%',
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center',
    backgroundColor: 'gainsboro',
    borderRadius: 15,
    width: 240,
    height: 1,
  },
  viewInit: {
    marginTop:'30%',
  },
  buttonInit: {
    backgroundColor: 'gainsboro',
    borderRadius: 15,
    width: 120,
    height: 30,
    alignItems:'center', 
    justifyContent:'center',
  },
  txtInit:{
    fontWeight:'bold',
  },
  viewLeave: {
    marginTop:'3%',
  },
  buttonLeave: {
    backgroundColor: 'gainsboro',
    borderRadius: 15,
    width: 70,
    height: 30,
    alignItems:'center',
    justifyContent:'center',
  },
  txtLeave:{
    fontWeight:'bold',
  },

});

export default App;
