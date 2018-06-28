import React, { Component } from 'react';
import {
    View, StyleSheet, Text
} from 'react-native';


export default class Admob extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>Hello Admob</Text>
            </View>
        );
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})