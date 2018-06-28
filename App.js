import React, { Component } from 'react';
import {
  View
} from 'react-native';
import AppNav from './src/Navigation/AppNavigation';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}} >
        <AppNav />
      </View>
    );
  }
}
