import React, { Component } from "react";
import {
  Modal,
  TextInput,
  Text,
  TouchableHighlight,
  View,
  Alert
} from "react-native";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import Form from "./form";

export default class Add extends Component {
  SampleFunction = () => {
    Alert.alert("Floating Button Clicked");
  };

  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <Text style={{fontSize:25,textAlign:"center"}}>ADD PATIENT FORM</Text>
          <View style={{ marginTop: 100, marginLeft: 30,fontWeight: 'bold' }}>
            <Form />
          </View>
        </Modal>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={styles.TouchableOpacityStyle}
        >
          <Image
            source={{
              uri:
                "https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png"
            }}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5"
  },

  TouchableOpacityStyle: {
    zIndex: 1,
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30
  },

  FloatingButtonStyle: {
    
    resizeMode: "contain",
    width: 60,
    height: 60
  }
});
