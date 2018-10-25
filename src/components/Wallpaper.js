import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Dimensions from 'Dimensions';
import { StyleSheet, Image, ImageBackground, activeOpacity } from 'react-native';


// import bgSrc from '../assets/images/wallpaper.png';
import bgSrc from '../assets/images/bg/bg.png';

export default class Wallpaper extends Component {
  render() {
    return (
        <ImageBackground source={bgSrc} style={styles.picture} activeOpacity={-1}>
          {this.props.children}
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
});
