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
  } from "react-native";import { Col, Row, Grid } from "react-native-easy-grid";


const AlbumDetail = ({ album }) => {
  const { id, name, age, bottle, disease } = album;
  // const {thumbnailContainer , thumbnailContainer , headerStyle ,textStyleHead , imageStyle}


 
 
    return (
      
        <ScrollView>
          <Grid>
            {/* <Modal
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
            </Modal> */}
    
            <TouchableHighlight
              onPress={() => {
                alert(JSON.stringify(name));
              }}
            >
              <Row style={{ height: 200, backgroundColor: "#ededed" }}>
                <Col style={{ margin: 10 }}>
                  <Text style={{ color: "blue" }}>Status :</Text>
                  <Text>Bottle ID :</Text>
                  <Text>{name}</Text>
            <Text>{disease}</Text>
                </Col>
                <Col>
                  <Image
                    source={require("../images/bottle.png")}
                    style={{
                        flex: 1,
                        resizeMode: "stretch", // or 'stretch'
                        height: 100,
                        width: 100,
                        alignSelf: "flex-end",
                        margin: 10
                    }}
                  />
                </Col>
              </Row>
            </TouchableHighlight>
    
            <Row style={{ height: 200 }}></Row>
          </Grid>
        </ScrollView>
      );

  
};

export default AlbumDetail;
