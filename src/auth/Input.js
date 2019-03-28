import React, {Component} from 'react';
import {View, Text,TextInput} from 'react-native';
const Input = (lable,onChangeText,value,placeholder) => {
    return(
        <View>
        <Text>{lable}</Text>
        <TextInput
            style={styles.textInputStyle}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            />
        </View>
    );
}

const styles = {
    textInputStyle:{
        height: 40, 
        flex:1, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius:20
    }
}
export default Input;