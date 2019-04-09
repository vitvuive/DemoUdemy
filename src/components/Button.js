import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    // padding:10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSeft: 'stretch',
    // flex:1,
    backgroundColor: '#5056ff',
    borderRadius: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF'
  }
};

export default Button;
