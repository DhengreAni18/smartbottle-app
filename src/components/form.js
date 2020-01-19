import React from "react";
import { View, Button, TextInput, StyleSheet, ScrollView, Alert } from "react-native";
import axios from "axios";

export default class Form extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone_number: ""
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const {
      id,
      name,
      age,
      bottle,
      disease,
      room_number,
      bed_number
    } = this.state;

    const payload = {
      name: name,
      age: parseInt(age),
      bottle: parseInt(bottle),
      disease: disease,
      room_number: parseInt(room_number),
      bed_number: parseInt(bed_number)
    };
    console.log("asdasd");
    console.log(payload);

    axios
      .post("http://192.168.43.179:8000/api/get_patients_list/", payload)
      .then(response => {
        // We set the returned token as the default authorization header
        console.log("post from form done");
        Alert.alert('Success', 'Patient details added Successfully');
        console.log(response.data);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <ScrollView>
        {/* <TextInput
          style={styles.input}
          placeholder="ID of Patient"
          autoCapitalize="none"
          keyboardType="numeric"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("id", val)}
        /> */}
        <TextInput
          style={styles.input}
          placeholder="Name of Patient"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("name", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Age of Patient"
          keyboardType="numeric"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("age", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Bottle ID"
          autoCapitalize="none"
          keyboardType="numeric"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("bottle", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Disease of Patient"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("disease", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Room number"
          autoCapitalize="none"
          keyboardType="numeric"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("room_number", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Bed number"
          autoCapitalize="none"
          keyboardType="numeric"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("bed_number", val)}
        />
        <View
          style={{
            width: 100,
            marginTop: 30,
            marginLeft: 130,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button title="Add Patient" onPress={this.signUp} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#42A5F5",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
