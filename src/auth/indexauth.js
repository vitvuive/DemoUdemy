import React,{Component} from 'react';
import {View, Text} from 'react-native';
import firebase from '@firebase/app';
import Header from '../components/Header';
import LoginForm from './LoginForm';
export default class indexauth extends Component{
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDXQFbvCSfbjKKZOBGZuv6kKZIVBuvOE7k",
            authDomain: "demoudemy-8dd65.firebaseapp.com",
            databaseURL: "https://demoudemy-8dd65.firebaseio.com",
            projectId: "demoudemy-8dd65",
            storageBucket: "demoudemy-8dd65.appspot.com",
            messagingSenderId: "429068600220"
        });
    }
    render(){
        return(
            <View style={{flex:1}}>
            <Header
            headerText='Authentication'
            />
            <LoginForm/>
            </View>
        );
    }
}