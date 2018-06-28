import React, { Component } from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import firebase from 'react-native-firebase';

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();

request.addKeyword('foobar');
const advert = firebase.admob().rewarded('ca-app-pub-3940256099942544/1033173712');

request.addKeyword('foo').addKeyword('bar');

// Load the advert with our AdRequest
advert.loadAd(request.build());

advert.on('onAdLoaded', () => {
    console.log('Advert ready to show.');
});

advert.on('onRewarded', (event) => {
    console.log('The user watched the entire video and will now be rewarded!', event);
});



export default class Admob extends Component {
    click(){
        onLevelComplete()
        .then(() => {
            if (advert.isLoaded()) {
                advert.show();
            } else {
                // skip...
            }
        });
    }
    render() {
        return (
            <View style={styles.container} >
                <Banner
                    unitId='ca-app-pub-3940256099942544~3347511713'
                    size={"LARGE_BANNER"}
                    request={request.build()}
                    onAdLoaded={() => {
                        console.log('Advert loaded');
                    }}
                />
                <TouchableOpacity onPress={()=> this.click()} >
                    <Text>Show Admob</Text>
                </TouchableOpacity>
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