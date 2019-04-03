import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native'
const Button = ({onPress,children}) => {
    return(
        <TouchableOpacity 
        onPress={onPress}
        style={styles.buttonStyle}>
        <Text style = {styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonStyle:{
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        alignSeft:'stretch',
        flex:1,
        backgroundColor:'#B2C4F2',
        borderRadius:20,
        marginLeft:15,
        marginRight:15,
        marginTop:15
    },
    textStyle:{
        fontSize:16,
        fontWeight:'600',
    }
}

export default Button;