import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const App = ({
  navigation
}) => {
  return(
    <View style={styles.container}>
      <View style={styles.closeImg}>
        <TouchableOpacity onPress={() => navigation.goBack('')}> 
          <Image source={require('../assets/close.png')}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.middleText}>
        <Text style={styles.texts}> Word </Text>
        <Text style={styles.paginas}> 1/5 </Text>
      </View>

      <View style={styles.img}>
        <Image source={require('../assets/volume.png')}></Image>
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
  closeImg: {
    paddingLeft: '80%',
    paddingTop: '10%',
  },
  middleText:{
    transform: [{ rotate: '90deg'}],
    marginTop:'65%',
  },
  texts: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  img: {
    paddingTop: '80%',
    paddingRight:'20%',
    width:5,
    height:5,
    transform: [{ rotate: '90deg'}],
  },
  paginas: {
    padding:10,
    textAlign:'center',
    justifyContent:'center',
  },
});

export default App;
