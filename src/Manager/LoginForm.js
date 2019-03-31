import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {connect} from 'react-redux';
export {emailChanged} from './action';
import Button from '../components/Button';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
class LoginForm extends Component{
    
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    render(){
        return(
            <Card>
            <CardSection>
            <TextInput
            style={styles.textInputStyle}
            onChangeText={this.onEmailChange.bind(this)}
            placeholder='Enter your email'
            />
            </CardSection>
            
            <CardSection>
            <TextInput
            secureTextEntry
            style={styles.textInputStyle}
            placeholder='Enter your password'
            />
            </CardSection>
            <CardSection>
            <Button>
            Login
            </Button>
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

export default connect(null,)(LoginForm);