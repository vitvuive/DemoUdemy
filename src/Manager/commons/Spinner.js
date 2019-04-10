import React from 'react';
import { View, ActivityIndicator } from 'react-native';
const Spinner = ({ size }) => {
    return (
        <View style={styles.SpinnerStyles}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    SpinnerStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
    },
};

export { Spinner };
