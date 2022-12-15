import React, { Component } from 'react';
import { Text,View } from 'react-native';
import NavBar from './layout/navbar';
class Dashboard extends Component {
  render() {
    return (
      <View>
      <NavBar title = "DASHBOARD" navigation = {this.props.navigation}></NavBar>
      <Text>Soy una pantalla de Dashboard</Text>
      </View>
    );
  }
}

export default Dashboard;