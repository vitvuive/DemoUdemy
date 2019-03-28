import React, {Component} from 'react';
import {View, Text,TextInput} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Button from '../components/Button';
import Input from './Input';
export default class LoginForm extends Component{
    state={
        email:'',
        password:'',
        error:''
    }
    onButtonPress(){
        const {email, password}= this.state;
        this.setState({error:''});
        firebase.auth().signInWithEmailAndPassword(email,password)
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .catch(()=>{
                this.setState({error:'Authentication Failed.'});
            });
        });
    }
    render(){
        return(
            <Card>
            <CardSection>
            <TextInput
            style={styles.textInputStyle}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            placeholder='Enter your email'
            />
            </CardSection>
            <Text style={styles.textErrorStyle}>{this.state.error}</Text>
            <CardSection>
            <TextInput
            secureTextEntry
            style={styles.textInputStyle}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder='Enter your password'
            />
            </CardSection>

            <CardSection>
                <Button
                onPress={this.onButtonPress.bind(this)}
                >Login</Button>
            </CardSection>
            </Card>
        );
    }
}

const styles = {
    textInputStyle:{
        height: 40, 
        flex:1, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius:20
    },
    textErrorStyle:{
        fontColor:"red",
        alignSeft:'center',
    }
}