import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Dashboard"
  };
  render() {
    return (
      <ScrollView>
        <Grid>
          <Row style={{height:200}}>
            <Text>Fixed width</Text>
          </Row>
          <Row style={{height:200}}>
            <View style={{ flex: 1, backgroundColor: "#6ED4C8" }}></View>
          </Row>
          <Row style={{height:200}}>
            <Text>Fixed width</Text>
          </Row>
          <Row style={{height:200}}>
            <View style={{ flex: 1, backgroundColor: "#6ED4C8" }}></View>
          </Row>
        </Grid>
      </ScrollView>
    );
  }
}

export default ProfileScreen;
