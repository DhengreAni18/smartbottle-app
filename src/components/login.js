import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import axios from "axios";

import ProfileScreen from "./dashboard";

class LoginView extends Component {
  static navigationOptions = {
    title: "Login"
  };

  first() {
    Alert.alert("aa");
    window.setInterval(first, 10000);
  }

  constructor(props) {
    super(props);
    state = {
      email: "",
      password: ""
    };
  }

  handleRequest() {
    if (this.state == null) {
      Alert.alert("Error", "Form cannot be empty");
    } else if (this.state.password == null) {
      Alert.alert("Error", "Password cannot be empty");
    } else if (this.state.email == null) {
      Alert.alert("Error", "Username cannot be empty");
    } else {
      const payload = {
        username: this.state.email,
        password: this.state.password
      };
      console.log("asdasd");
      axios
        .post("http://192.168.43.179:8000/api/accounts/auth/login/", payload)
        .then(response => {
          const { token, user } = response.data;

          // We set the returned token as the default authorization header
          axios.defaults.headers.common.Authorization = `Token ${token}`;

          console.log("Login done");
          console.log(payload.username);
          // Navigate to the home screen
          console.log(token);
          console.log(response.data);
          this.props.navigation.navigate("Profile");
        })
        .catch(error => {
          console.log(error);
          if (error) {
            Alert.alert("Invalid", "Enter valid Username or Password");
          }
        });
    }
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/message/ultraviolet/50/3498db"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Username"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.handleRequest.bind(this)}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <Button
          title="go to dashboard"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#00b5ec"
  },
  loginText: {
    color: "white"
  }
});

const AppNavigator = createStackNavigator({
  Home: { screen: LoginView },
  Profile: ProfileScreen
});

const AppContainer = createAppContainer(AppNavigator);
export default class LoginForm extends Component {
  render() {
    return <AppContainer />;
  }
}

// export default LoginView;
