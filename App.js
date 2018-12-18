import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    state = {
        placeName: '',
        places: []
    };

    placeNameChangeHandler = val => {
        this.setState({ placeName: val });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }
        this.setState(prevState => {
            console.log(prevState);
            return {
                places: prevState.places.concat(prevState.placeName)
            };
        });
    };

    render() {
        const placesOutput = this.state.places.map((place, idx) => (
            <Text key={idx}>{place}</Text>
        ));
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.placeInput}
                        value={this.state.placeName}
                        placeholder="Awesome"
                        onChangeText={this.placeNameChangeHandler}
                    />
                    <Button
                        title="Add"
                        style={styles.placeButton}
                        onPress={this.placeSubmitHandler}
                    />
                </View>
                <View>{placesOutput}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 25
    },
    inputContainer: {
        // flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    }
});
