import React, {Component} from 'react';
import {View,Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser,loginUserFail} from './action';
import Button from '../components/Button';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Spinner from '../auth/Spinner';
class LoginForm extends Component{
    
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text)
    }
    onButtonPress(){
        const {email, password}= this.props;

        this.props.loginUser({email, password});
    }
    onError(){
        if(this.props.error){
            return (
                <View style={{backgroundColor:'white', alignItems:'center'}}>
                    <Text style={{color:'red',alignSelf:'center'}}>
                    {this.props.error}
                    </Text>
                </View>
            );
        }
    }
    renderSpinner(){
        if(this.props.loading){
            return <Spinner/>
        }
        return (
            <Button onPress= {this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <TextInput
                    style={styles.textInputStyle}
                    placeholder='Enter your email'
                    onChangeText={this.onEmailChange.bind(this)}
                    value= {this.props.email}
                    />
                </CardSection>
            
                <CardSection>
                    <TextInput
                    secureTextEntry
                    style={styles.textInputStyle}
                    placeholder='Enter your password'
                    onChangeText={this.onPasswordChange.bind(this)}
                    value= {this.props.password}
                    />
                </CardSection>
                {this.onError()}
                <CardSection>
                </CardSection>
                <CardSection>
                    {this.renderSpinner()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    textInputStyle:{
        height: 40, 
        flex:1, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius:20
    },
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser,loginUserFail})(LoginForm);