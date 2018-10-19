import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

export default class LoginForm extends Component {
  state = {
    text: ''
  }

  render() {
    return (
        <Card>
          <CardSection>
            <TextInput
              value={this.state.text}
              onChange={text => this.setState({ text })} 
              style={{ height: 30, width: 100 }} 
            />
          </CardSection>
          <CardSection />
          <CardSection>
            <Button>
              Log In
            </Button>
          </CardSection>
        </Card>
    );
  }
}

