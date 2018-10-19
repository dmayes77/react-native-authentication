import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, InputField } from './common';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '' });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed.' });
          });
      });
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

            <Text style={styles.errorStyle}>{this.state.error}</Text>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Log In
            </Button>
          </CardSection>
        </Card>
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
