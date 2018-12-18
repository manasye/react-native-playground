/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/nat.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component {
    state = { places: [], selectedPlace: null };

    placeAddedHandler = placeName => {
        this.setState(prevState => ({
            places: prevState.places.concat({
                key: new Date().getTime(),
                name: placeName,
                image: placeImage
            })
        }));
    };

    placeSelectedHandler = key => {
        this.setState(prevState => ({
            selectedPlace: prevState.places.find(place => place.key === key)
        }));
    };

    placeDeletedHandler = () => {
        this.setState(prevState => ({
            places: prevState.places.filter(
                place => place.key !== prevState.selectedPlace.key
            ),
            selectedPlace: null
        }));
    };

    modalClosedHandler = () => {
        this.setState({ selectedPlace: null });
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.state.selectedPlace}
                    onItemDeleted={this.placeDeletedHandler}
                    onModalClosed={this.modalClosedHandler}
                />
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
                <PlaceList
                    places={this.state.places}
                    onItemSelected={this.placeSelectedHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});
