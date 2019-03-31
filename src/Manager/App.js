import React, {Component} from 'react';
import firebase from '@firebase/app';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import LoginForm from './LoginForm';
export default class App extends Component{

    componentWillMount(){
        // connect to firebase
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
            <Provider store={createStore(reducer)}>
                <LoginForm/>
            </Provider>
        );
    }
}