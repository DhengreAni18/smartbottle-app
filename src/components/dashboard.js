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
import axios from "axios";

import AlbumDetail from "./list";
import Add from "./add";

class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Dashboard"
  };

  state = {
    albums: []
  };

  componentWillMount() {
    //Run as the app starts
    axios
      .get("http://192.168.43.179:8000/api/get_patients_list/")
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.id} album={album} />
    ));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>{this.renderAlbums()}</ScrollView>
        <Add />
      </View>
    );
  }
}

export default ProfileScreen;
