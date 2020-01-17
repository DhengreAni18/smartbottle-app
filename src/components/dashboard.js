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
import axios from 'axios';
import AlbumDetail from './list';

class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Dashboard"
  };

  state = {
    albums:[]
  };

  componentWillMount() {   //Run as the app starts
    axios.get('http://192.168.43.179:8000/get_patients_list/')
        .then(response => this.setState({ albums: response.data }));  
   
  } 

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.id} album={album}/>);
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default ProfileScreen;
