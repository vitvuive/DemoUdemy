import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    emailChanged,
    passwordChanged,
    createUser,
    createUserFail,
    setValue,
} from '../action';
import { Button, Spinner } from '../commons';
class RegisterForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    _onButtonPress() {
        const { email, password } = this.props;

        this.props.createUser({ email, password });
    }
    _onError() {
        if (this.props.error) {
            return (
                <View
                    style={{ backgroundColor: 'white', alignItems: 'center' }}
                >
                    <Text style={{ color: 'red', alignSelf: 'center' }}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    _textSuccess() {
        if (this.props.succ) {
            return (
                <View
                    style={{ backgroundColor: 'white', alignItems: 'center' }}
                >
                    <Text style={{ color: 'green', alignSelf: 'center' }}>
                        {this.props.succ}
                    </Text>
                </View>
            );
        }
    }
    _renderButton() {
        if (this.props.loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={this._onButtonPress.bind(this)}>
                {'SIGN IN'}
            </Button>
        );
    }

    render() {
        const {
            contentForm,
            containerForm,
            textContentForm,
            containerRegister,
            containerLogo,
        } = styles;
        return (
            <LinearGradient
                colors={['#5056ff', '#5056ff', '#FFFFFF', '#FFFFFF']}
                style={styles.bao}
            >
                <View style={containerLogo}>
                    <Text
                        style={{
                            color: '#FFF',
                            fontSize: 30,
                            fontWeight: '500',
                        }}
                    >
                        LOGO
                    </Text>
                </View>
                <View style={containerForm}>
                    <View style={contentForm}>
                        <Text style={textContentForm}>Create an Account</Text>
                    </View>
                    <TextInput
                        style={styles.textInputStyle}
                        label="Email:"
                        placeholder="Enter your email"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            this.secondTextInput.focus();
                        }}
                        blurOnSubmit={false}
                    />

                    <TextInput
                        style={styles.textInputStyle}
                        label="Password:"
                        placeholder="Enter your password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        secureTextEntry
                        ref={input => {
                            this.secondTextInput = input;
                        }}
                        returnKeyType="go"
                        onSubmitEditing={this._onButtonPress.bind(this)}
                    />
                    <View>{this._onError()}</View>
                    <View>{this._textSuccess()}</View>
                    {this._renderButton()}
                </View>
                <View style={containerRegister}>
                    <Text style={{ fontSize: 18, fontWeight: '400' }}>
                        Do you have an account?
                    </Text>
                    <TouchableOpacity onPress={() => Actions.auth()}>
                        <Text
                            style={{
                                color: '#8e83ff',
                                fontSize: 18,
                                fontWeight: '500',
                            }}
                        >
                            LOG IN
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        // backgroundColor:'#aaccff',
        backgroundColor: '#FCFCFC',
        justifyContent: 'center',
    },
    containerForm: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white',
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
        paddingBottom: 10,
    },
    containerRegister: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 70,
    },
    containerLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 70,
    },
    contentForm: {
        alignItems: 'center',
        padding: 15,
    },
    textContentForm: {
        fontSize: 25,
        fontWeight: '500',
    },
    bao: {
        flex: 1,
        justifyContent: 'center',
    },
    textInputStyle: {
        fontSize: 18,
        paddingLeft: 15,
        height: 55,
        backgroundColor: '#F4F4F4',
        borderBottomWidth: 1,
        margin: 10,
        alignItems: 'center',
        borderColor: '#A6A6A6',
    },
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading,
        succ: state.auth.succ,
    };
};

export default connect(
    mapStateToProps,
    {
        emailChanged,
        passwordChanged,
        createUser,
        createUserFail,
        setValue,
    }
)(RegisterForm);
