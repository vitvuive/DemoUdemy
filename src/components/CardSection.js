import React from 'react';
import { View, Text } from 'react-native';
const CardSection = props => {
    return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        // padding:5,
        height: 48,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    },
};

export default CardSection;
