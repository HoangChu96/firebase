import React, { Component } from 'react';
import {
  View, TextInput, Text, TouchableOpacity,
  StyleSheet, KeyboardAvoidingView, Alert
} from 'react-native';
import firebase from 'react-native-firebase';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
     onSignIn() {
      const {navigation} = this.props;
      const { email, password } = this.state;
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        Alert.alert(
            'Notice',
            'Sign up successfully',
            [
                { text: 'OK'}
            ],
            { cancelable: false }
        ),
      
      )
      .catch(function(error) {
        Alert.alert(
            'Notice',
            'fail!',
            [
                { text: 'OK' }
            ],
            { cancelable: false }
        );
      });
    }

    render() {
        const { btnText, inputStyle, btnInputStyle, text } = styles;
        const { email, password } = this.state;
        return (
          <View>
            <KeyboardAvoidingView>
              <TextInput
                style={inputStyle}
                placeholder='Enter Your Email'
                value={email}
                onChangeText={text => this.setState({ email: text })}
              />
              <TextInput
                style={inputStyle}
                placeholder='Enter Your Password'
                value={password}
                onChangeText={text => this.setState({ password: text })}
                secureTextEntry
              />
              <TouchableOpacity style={btnInputStyle} onPress={this.onSignIn.bind(this) } >
                <Text style={btnText}>SIGN IN NOW</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        );
    }
}

export default SignIn;

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