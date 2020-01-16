import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
  } from "react-native";

class ProfileScreen extends Component {
    static navigationOptions = {
      title: "Dashboard"
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Profile Screen</Text>
        </View>
      );
    }
  }

export default ProfileScreen;