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
      <Text style={styles.txtHello}>Olá, Joaquim</Text>
      <View style={styles.viewInit}>
        <TouchableOpacity style={styles.buttonInit} onPress={() => navigation.navigate('PlayPage')}>
          <Text style={styles.txtInit}>Jogar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewLeave}>
        <TouchableOpacity style={styles.buttonLeave} onPress={() => navigation.goBack('')}><Text style={styles.txtLeave}>Sair</Text></TouchableOpacity>
      </View>
      <Text style={styles.txtFooter}>Você completou 0 tarefas hoje</Text>
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
  txtHello: {
    fontWeight:'bold',
    fontSize: 30,
    marginTop:'30%',
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
  txtFooter:{
    fontWeight:'bold',
    fontSize: 14,
    marginTop:'20%',
  },

});

export default App;
