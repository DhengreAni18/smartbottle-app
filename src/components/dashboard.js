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
    title: "Dashboard",
    headerLeft: null
  };

  state = {
    albums: []
  };
  constructor(props) {
    super(props);
    this.RefetchList = this.RefetchList.bind(this);
  }

  componentDidMount() {
    //Run as the app starts
     setInterval(this.RefetchList, 5000);
    console.log('API fetch started')
    this.fetchList();
  }

  RefetchList() {
    axios
    .get("http://192.168.43.179:8000/api/get_patients_list/")
    .then(response => {
      this.setState({ albums: response.data });
      console.log(this.state.albums);
    });
  }

  fetchList() {
    axios
    .get("http://192.168.43.179:8000/api/get_patients_list/")
    .then(response => {
      console.log('aaaaa')
      this.setState({ albums: response.data });
      console.log('asd');
      // this.interval = setInterval(() => this.setState({ albums:response.data }), 5000);
      // console.log(this.state.albums);
      // setInterval(() => console.log(this.state.albums), 5000);
    });
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
