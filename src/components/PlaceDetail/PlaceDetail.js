/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {
    Modal,
    View,
    Image,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

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
                <TouchableOpacity onPress={props.onItemDeleted}>
                    <View style={styles.deleteButton}>
                        <Icon size={30} name="ios-trash" color="red" />
                    </View>
                </TouchableOpacity>
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
    },
    deleteButton: {
        alignItems: 'center'
    }
});

export default placeDetail;
