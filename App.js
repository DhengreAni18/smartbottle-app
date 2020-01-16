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

class App extends Component {
  render() {
    return (
      <LoginView />
    );
  }
}

export default App;