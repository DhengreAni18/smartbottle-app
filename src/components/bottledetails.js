// import React, {Component} from 'react';
// import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
// import Dashboardd from './dashboard';

// class BottleModal extends Component {
//   state = {
//     modalVisible: false,
//   };

//   constructor(props) {
//     super(props);
//     this.setModalVisible = this.setModalVisible.bind(this);
//   }
  
//   setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//   }

//   render() {
//     <Dashboardd setModalVisible = {this.setModalVisible} />
//     return (
//       <View style={{marginTop: 22}}>
//         <Modal
//           animationType="slide"
//           transparent={false}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//           }}>
//           <View style={{marginTop: 22}}>
//             <View>
//               <Text>Hello World!</Text>

//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>Hide Modal</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>

//       </View>
//     );
//   }
// }

// export default BottleModal;