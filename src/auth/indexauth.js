import React,{Component} from 'react';
import {View, Text} from 'react-native';
import firebase from '@firebase/app';
import Header from '../components/Header';
import LoginForm from './LoginForm';
import Button from '../components/Button';
import Spinner from './Spinner';
export default class indexauth extends Component{
    state= {
        loggedIn:true
    };
    // componentWillMount(){
    //     // connect to firebase
    //     firebase.initializeApp({
    //         apiKey: "AIzaSyDXQFbvCSfbjKKZOBGZuv6kKZIVBuvOE7k",
    //         authDomain: "demoudemy-8dd65.firebaseapp.com",
    //         databaseURL: "https://demoudemy-8dd65.firebaseio.com",
    //         projectId: "demoudemy-8dd65",
    //         storageBucket: "demoudemy-8dd65.appspot.com",
    //         messagingSenderId: "429068600220"
    //     });

    //     firebase.auth().onAuthStateChanged((user)=>{
    //         if(user){
    //             this.setState({loggedIn:true});
    //         }
    //         else{
    //             this.setState({loggedIn:false});
    //         }
    //     });
    // }

    renderContent(){
        switch (this.state.loggedIn) {
            case true:
                return <Button onPress={()=>{firebase.auth().signOut()}}>Log out</Button>;
                // after sign out , return logged is False
            case false:
                return <LoginForm/>;
            default:
            return <Spinner size= 'small'/>;
        }
    }

    render(){
        return(
            <View>
            <Header
            headerText='Authentication'
            />
            {this.renderContent()}
            </View>
        );
    }
}