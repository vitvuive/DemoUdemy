import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
const Header = (props) =>{
    return(
        <View style={style.viewStyle}>
        <Text style={style.textStyle}>
        {props.headerText}
        </Text>
        </View>
    );
}

const style=StyleSheet.create({
    viewStyle:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        shadowColor:'#000',
        shadowOffset:{width:0, height:20},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'

    },
    textStyle:{
        fontSize:20
    }
});

export default Header;