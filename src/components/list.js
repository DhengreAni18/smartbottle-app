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

const AlbumDetail = ({ album }) => {
  const { id, name, age, bottle, disease, room_number, bed_number } = album;
  // const {thumbnailContainer , thumbnailContainer , headerStyle ,textStyleHead , imageStyle}

  return (
    <ScrollView>
      <Grid>
        <TouchableHighlight
          onPress={() => {
            Alert.alert("Details", "Patient ID " + ": " + JSON.stringify(id), [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]);
          }}
        >
          <Row style={{ height: 200, backgroundColor: "#ededed" }}>
            <Col style={{ margin: 10 }}>
              <Text style={{ color: "blue" }}>Status :</Text>
              <Text>Bottle ID :{bottle}</Text>
              <Text>Patient's Name : {name}</Text>
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

        <Row style={{ height: 20 }}></Row>
      </Grid>
    </ScrollView>
  );
};

export default AlbumDetail;
