import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, InputField, Spinner } from './common';

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
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ 
      error: 'Authentication Failed.',
      loading: false
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderBtn() {
    if (this.state.loading) {
      return <Spinner spinnerSize='small' />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)} >
        Log In
      </Button>
    );
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <InputField
              autoCapitalize='none'
              label='Email'
              onChangeText={email => this.setState({ email })}
              placeholder='user@gmail.com'
              value={this.state.email}
            />
          </CardSection>
          <CardSection>
            <InputField
              autoCapitalize='none'
              label='Password'
              onChangeText={password => this.setState({ password })}
              placeholder='password'
              secureTextEntry
              value={this.state.password}
            />
          </CardSection>
        </Card>
        <Text style={styles.errorStyle}>{this.state.error}</Text>
        {this.renderBtn()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});
