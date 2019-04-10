import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from '../commons';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const {
        containerStyle,
        textStyle,
        cardSectionStyle,
        viewButtonStyle,
        wrapper,
    } = styles;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <View style={wrapper}>
                    <View style={cardSectionStyle}>
                        <Text style={textStyle}>{children}</Text>
                    </View>
                    <View style={viewButtonStyle}>
                        <Button onPress={onDecline}>No</Button>
                        <Button onPress={onAccept}>Yes</Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40,
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
    },
    wrapper: {
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 8,
        paddingBottom: 10,
    },
    viewButtonStyle: {
        backgroundColor: '#FFF',
    },
};

export default Confirm;
