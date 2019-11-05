import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

const Main = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Image style={styles.imgLogo} source={require('../assets/logo.png')}/>
      <TouchableOpacity style={styles.swipe} onPress={() => navigation.navigate('InsertName')}>
        <Text>Toque para iniciar</Text>
        <Image style={styles.imgs} source={require('../assets/icone.png')}/>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightskyblue',
    flex: 1,
    paddingTop: '29%',
    alignItems: 'center',
  },
  imgLogo:{
    width: 200, 
    height: 200,
  },
  texts: {
    fontSize: 30,
    fontWeight: 'bold',
    height: 450,
  },
  swipe: {
    marginTop: '60%',
    alignItems:'center',
    justifyContent:'center',
  },
  imgs: {
    width: 40, 
    height: 40,
  },
});

export default Main;
