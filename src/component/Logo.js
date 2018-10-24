import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Text } from 'react-native';

import Logoimg from '../assets/images/logo/logosml.png'

export default class Logo extends React.Component {
    render() {
        return (
            <View style={styles.container1}>
                <Image source={Logoimg} style={styles.image} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 60,
        resizeMode: 'contain',
    }
});
