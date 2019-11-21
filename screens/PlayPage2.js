import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  Button,
} from 'react-native';

import PostData from '../screens/words.json';
import Dialog from "react-native-dialog";

class Buttone extends Component {
    render(){
        return <TouchableOpacity style={styles.eachButton} onPress = {() => {this.props.handleClick(this.props.label)}}>
                    <Text style={styles.words}>{this.props.label}</Text>
                </TouchableOpacity>
    }
}

class Label extends Component {
    render(){
        return <Text style={{fontSize:25}}>Você selecionou: {this.props.text}</Text>
    }
}

export default class PlayPage2 extends Component {
    constructor(props){
        super(props);

        this.state = {
            labelText: '',
            contG1: 1,
            dialogVisible: false
        };
    }

    setLabelText = labelText => {
        this.setState({ labelText });
    }

    somaG1 = () => {
        this.setState({contG1:this.state.contG1+1}),
        this.handleCancel()
    }

    showDialog(word, word2) {
        if (Object.is(word, word2)){
            this.setState({ dialogVisible: true });
        } else {
            Alert.alert(
                'Resposta incorreta',
                'Tente novamente',
                [
                    {text: 'Tente novamente'},
                    {text: 'Menu', onPress: () => this.props.navigation.navigate('HelloPage')},
                ],
                { cancelable : false }
            );
        }
    }
     
    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };
    
    render(){
        const { navigate } = this.props.navigation;
        const selectedWord = this.state.labelText;      
        return(
            <View style={styles.label}>
                <View>
                  {PostData.map((postDetail, index) => {
                        if(Object.is(postDetail.id, this.state.contG1)){
                        return <View key={postDetail}>  
                               
                            <View style={styles.initialText}>
                                <Text style={styles.mainWord}>{postDetail.word}</Text>
                            </View>
                            <View style={styles.textField}>
                                <Label text={this.state.labelText}/>
                            </View> 
                            <View style={styles.buttons}>
                                <Buttone handleClick = {this.setLabelText} label = {postDetail.var1}/>
                                <Buttone handleClick = {this.setLabelText} label = {postDetail.var2}/>
                                <Buttone handleClick = {this.setLabelText} label = {postDetail.var3}/>
                                <Buttone handleClick = {this.setLabelText} label = {postDetail.var4}/>
                            </View>          
                            
                            <View style={styles.confirm}>
                                <Button onPress = {() => this.showDialog(postDetail.word, selectedWord)} title ="Confirmar" />

                                <Dialog.Container visible={this.state.dialogVisible}>
                                    <Dialog.Title>Você acertou</Dialog.Title>
                                    <Dialog.Description>
                                        Deseja continuar?
                                    </Dialog.Description>
                                    <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                                    <Dialog.Button label="Próximo" onPress={this.somaG1} />
                                </Dialog.Container>
                            </View>
                      </View>
                    }
                  })}
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    label: {
        backgroundColor: 'lightskyblue',
        paddingTop: '15%',
        flex: 1,
    },
    textField: {
        paddingTop:'10%',
        paddingLeft:'15%',
    },
    buttons: {
        marginTop: '5%',
        marginLeft: '33.3%',
    },
    mainWord: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    words: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    eachButton: {
        backgroundColor: 'gainsboro',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 15,
        width: 120,
        height: 40,
        marginTop: '11%',
    },
    confirm :{
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 15,
        width: 150,
        height: 50,
        marginTop: '15%',
        marginLeft: '29.5%',
    },
    confirmText: {
        fontSize: 20,
    }
});
  



    