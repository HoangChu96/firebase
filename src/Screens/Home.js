import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, StyleSheet
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigate('Admob')} >
          <Text>Admob</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigate('Analytics')}>
          <Text>Analytics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigate('Authentication')}>
          <Text>Authentication</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cloud Firestore</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cloud Messaging</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Crash Reporting</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Database</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Dynamic Links</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Storage</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Invites</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Remote Config</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Storage</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Performance Monitoring</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

styles= StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
