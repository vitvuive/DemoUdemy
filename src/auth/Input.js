import React from 'react';
import { View, Text, TextInput } from 'react-native';
const Input = ({
    onChangeText,
    value,
    placeholder,
    secureTextEntry,
    keyboardType,
    returnKeyType,
}) => {
    const { containerStyle, textInputStyle, lableStyle } = styles;
    return (
        <View style={containerStyle}>
            <TextInput
                style={textInputStyle}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 55,
        backgroundColor: '#F4F4F4',
        borderBottomWidth: 1,
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        borderColor: '#A6A6A6',
    },
    textInputStyle: {
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        paddingLeft: 15,
    },
    // lableStyle:{
    //     fontSize: 15,
    //     paddingLeft: 15,
    //     flex: 1,
    // }
};
export { Input };
