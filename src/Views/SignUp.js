import React, { Component } from 'react';
import {
  View, TextInput, Text, TouchableOpacity,
  StyleSheet, Alert, KeyboardAvoidingView
} from 'react-native';
import firebase from 'react-native-firebase';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        };
    }
    //  sử dụng firebase register;
    registerUser(){
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        this.onSuccess()
      )
      .catch(function(error) {
        this.onFail()
      });
    }
    onSuccess() {
      Alert.alert(
          'Notice',
          'Sign up successfully',
          [
              { text: 'OK', onPress: this.props.gotoSignIn() }
          ],
          { cancelable: false }
      );
  }

  onFail() {
      Alert.alert(
          'Notice',
          'Email has been used by other',
          [
              { text: 'OK', onPress: () => this.removeEmail.bind(this) }
          ],
          { cancelable: false }
      );
  }

    render() {
        const { btnText, inputStyle, btnInputStyle, text } = styles;
        return (
          <View>
            <KeyboardAvoidingView>
                <TextInput
                  style={inputStyle}
                  placeholder='Enter Your Name'
                  value={this.state.name}
                  onChangeText={text => this.setState({ name: text })}
                />
                <TextInput
                  style={inputStyle}
                  placeholder='Enter Your Email'
                  value={this.state.email}
                  onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                  style={inputStyle}
                  placeholder='Enter Your Password'
                  value={this.state.password}
                  secureTextEntry
                  onChangeText={text => this.setState({ password: text })}
                />
                <TextInput
                  style={inputStyle}
                  placeholder='Re-Enter Your Password'
                  value={this.state.rePassword}
                  secureTextEntry
                  onChangeText={text => this.setState({ rePassword: text })}
                />
                <TouchableOpacity style={btnInputStyle} onPress={this.registerUser.bind(this)} >
                  <Text style={btnText}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  btnText: {
    color: '#fff',
  },
  inputStyle: {
    backgroundColor:'#fff',
    marginBottom: 20,
    borderRadius: 10
  },
  btnInputStyle: {
    borderWidth:1,
    borderColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height:50
  },
  text:{
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
  },
});