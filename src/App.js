import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/common';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <Text style={styles.welcome}>Hello, world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
