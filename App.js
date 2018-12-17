/* eslint-disable no-undef */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    state = {
        placeName: ''
    };

    placeNameChangeHandler = val => {
        this.setState({ placeName: val });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <TextInput
                    style={{
                        width: 300
                    }}
                    value={this.state.placeName}
                    placeholder="Awesome"
                    onChangeText={this.placeNameChangeHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
