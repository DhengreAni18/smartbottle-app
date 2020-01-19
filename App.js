import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import Pushy from 'pushy-react-native';
import LoginView from './src/components/login';
import LoginForm from './src/components/login';
import {PermissionsAndroid} from 'react-native';




class App extends Component {
//   componentDidMount() {
//     // Start the Pushy service
//     // Pushy.listen();
//     // Only necessary for Android
// if (Platform.OS === 'android') {
//   // Check whether the user has granted the app the WRITE_EXTERNAL_STORAGE permission
//   PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE).then((granted) => {
//       if (!granted) {
//           // Request the WRITE_EXTERNAL_STORAGE permission so that the Pushy SDK will be able to persist the device token in the external storage
//           PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE).then((result) => {
//               // User denied permission?
//               if (result !== PermissionsAndroid.RESULTS.GRANTED) {
//                   // Possibly ask the user to grant the permission
//               }
//           });
//       }
//   });
// }
//     Pushy.setNotificationListener(async (data) => {
//       // Print notification payload data
//       console.log('Received notification: ' + JSON.stringify(data));
    
//       // Notification title
//       let notificationTitle = 'MyApp';
    
//       // Attempt to extract the "message" property from the payload: {"message":"Hello World!"}
//       let notificationText = data.message || 'Test notification';
    
//       // Display basic system notification
//       Pushy.notify(notificationTitle, notificationText, data);
//     });
  // }
  render() {
    return (
      <LoginForm />
    );
  }
}

export default App;