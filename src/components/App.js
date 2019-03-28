import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Header from './Header';
import AlbumList from './AlbumList';

export default class App extends Component{
    render(){
        return(
            <View>
            <Header
            headerText='Talor Switf'
            />
            <AlbumList/>
            </View>
        );
    }
}