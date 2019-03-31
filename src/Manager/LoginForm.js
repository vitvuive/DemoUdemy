import React, {Component} from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
export default class LoginForm extends Component{
    render(){
        return(
            <Card>
            <CardSection>
            <Button>
            Login
            </Button>
            </CardSection>
            </Card>
        );
    }
}