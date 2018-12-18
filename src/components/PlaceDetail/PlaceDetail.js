/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = props => (
    <Modal
        visible={props.selectedPlace !== null}
        animationType="slide"
        onRequestClose={props.onModalClosed}>
        <View style={styles.modalContainer}>
            <Image
                style={styles.placeImage}
                source={props.selectedPlace ? props.selectedPlace.image : null}
            />
            <Text style={styles.placeName}>
                {props.selectedPlace ? props.selectedPlace.name : null}
            </Text>
            <View>
                <Button
                    title="Delete"
                    color="red"
                    onPress={props.onItemDeleted}
                />
                <Button title="Close" onPress={props.onModalClosed} />
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    }
});

export default placeDetail;
