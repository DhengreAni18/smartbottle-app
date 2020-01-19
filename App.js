import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import LoginView from './src/components/login';
import LoginForm from './src/components/login';
import {PermissionsAndroid} from 'react-native';




class App extends Component {
  render() {
    return (
      <LoginForm />
    );
  }
}

export default App;