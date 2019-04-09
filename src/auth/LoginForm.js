import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Button from '../components/Button';
import Input from './Input';
import Spinner from './Spinner';
export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSucess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSucess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    });
  }

  onLoginSucess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            placeholder="Enter your email"
          />
        </CardSection>

        <CardSection>
          <TextInput
            secureTextEntry
            style={styles.textInputStyle}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            placeholder="Enter your password"
          />
        </CardSection>

        <Text style={styles.textErrorStyle}>{this.state.error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  textInputStyle: {
    height: 40,
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20
  },
  textErrorStyle: {
    // fontColor:"red",
    // alignSeft:'center',
  }
};
