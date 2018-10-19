import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAir1LNmmcmeRJHu7JfQ8kJHp8cCObGqU0',
      authDomain: 'auth-e4039.firebaseapp.com',
      databaseURL: 'https://auth-e4039.firebaseio.com',
      projectId: 'auth-e4039',
      storageBucket: 'auth-e4039.appspot.com',
      messagingSenderId: '219128051918'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}
