import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { isloggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAir1LNmmcmeRJHu7JfQ8kJHp8cCObGqU0',
      authDomain: 'auth-e4039.firebaseapp.com',
      databaseURL: 'https://auth-e4039.firebaseio.com',
      projectId: 'auth-e4039',
      storageBucket: 'auth-e4039.appspot.com',
      messagingSenderId: '219128051918'
    });
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isloggedIn: true });
      } else {
        this.setState({ isloggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.isloggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
          return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}
