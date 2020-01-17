import React, { Component } from "react";
import {
  Modal,
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

  state = {
    modalVisible: false,
    modalVisible0: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setModalVisible0(visible) {
    this.setState({ modalVisible0: visible });
  }

  render() {
    let styles = StyleSheet.create({
      backgroundImage: {
        flex: 1,
        resizeMode: "stretch", // or 'stretch'
        height: 100,
        width: 100,
        alignSelf: "flex-end",
        margin: 10
      }
    });
    return (
      <ScrollView>
        <Grid>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible0}
            onRequestClose={() => {
              this.setModalVisible0(!this.state.modalVisible0);
            }}
          >
            <View style={{ marginTop: 22 }}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible0(!this.state.modalVisible0);
                  }}
                >
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible0(true);
            }}
          >
            <Row style={{ height: 200, backgroundColor: "#ededed" }}>
              <Col style={{ margin: 10 }}>
                <Text style={{ color: "blue" }}>Status :</Text>
                <Text>Bottle ID :</Text>
                <Text>Current Percentage :</Text>
              </Col>
              <Col>
                <Image
                  source={require("../images/bottle.png")}
                  style={styles.backgroundImage}
                />
              </Col>
            </Row>
          </TouchableHighlight>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            <View style={{ marginTop: 22 }}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Row style={{ height: 200, backgroundColor: "#FFFFFF" }}>
              <Col style={{ margin: 10 }}>
                <Text style={{ color: "blue" }}>Status :</Text>
                <Text>Bottle ID :</Text>
                <Text>Current Percentage :</Text>
              </Col>
              <Col>
                <Image
                  source={require("../images/bottle.png")}
                  style={styles.backgroundImage}
                />
              </Col>
            </Row>
          </TouchableHighlight>

          <Row style={{ height: 200 }}></Row>
        </Grid>
      </ScrollView>
    );
  }
}

export default ProfileScreen;
