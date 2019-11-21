import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

export default class PlayPage extends Component {

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeImg} onPress={() => this.props.navigation.goBack()}> 
          <Image source={require('../assets/close.png')}/>
        </TouchableOpacity>
   
        <View style={styles.middleText}>
          <Text style={styles.texts}> Word </Text>
          <Text style={styles.paginas}> 1/5 </Text>
        </View>
        <TouchableOpacity style={styles.closeImg} onPress={() => this.props.navigation.navigate('PlayPage2')}> 
          <Text>Next</Text>
        </TouchableOpacity>

        <View style={styles.img}>
          <Image source={require('../assets/volume.png')}></Image>
        </View>
        
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightskyblue',
    flex: 1,
    alignItems: 'center',
  },
  closeImg: {
    paddingLeft: '80%',
    paddingTop: '2%',
  },
  middleText:{
    transform: [{ rotate: '90deg'}],
    marginTop:'60%',
    marginRight:'2%',
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


