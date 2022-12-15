import React, { Component } from 'react';
import { Text,View } from 'react-native';
import NavBar from './layout/navbar';
class Register extends Component {
  render() {
    return (
      <View>
      <NavBar title = "REGISTER" navigation = {this.props.navigation}></NavBar>
      <Text>Soy una pantalla de Register</Text>
      </View>
    );
  }
}

export default Register;