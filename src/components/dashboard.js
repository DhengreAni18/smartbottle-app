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
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
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
          <Row style={{ height: 200, backgroundColor: "#ededed" }}>
            <Col style={{ margin: 10 }}>
              <Text>Bottle ID :</Text>
            </Col>
            <Col>
              <Image
                source={require("../images/bottle.png")}
                style={styles.backgroundImage}
              />
            </Col>
          </Row>

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
              <Text>Bottle ID :</Text>
            </Col>
            <Col>
              <Image
                source={require("../images/bottle.png")}
                style={styles.backgroundImage}
              />
            </Col>
          </Row>
          </TouchableHighlight>

          <Row style={{ height: 200 }}>
            <Text>Fixed width</Text>
          </Row>
          <Row style={{ height: 200 }}>
            <View style={{ flex: 1, backgroundColor: "#6ED4C8" }}></View>
          </Row>
        </Grid>
      </ScrollView>
    );
  }
}

export default ProfileScreen;
