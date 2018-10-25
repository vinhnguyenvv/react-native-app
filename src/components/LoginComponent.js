
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

//components
import Wallpaper from './Wallpaper';
import Logo from './Logo';
import Form from './form/Form';
import ButtonSubmit from './form/ButtonSubmit';
import SignupSection from './form/SignupSection'
//img
// import bg from './assets/images/wallpaper.png';

type Props = {};
export default class LoginComponent extends Component<Props> {
  // static navigationOptions = {
  //   title: 'Welcome',
  // };
  render() {
    return (
      <Wallpaper>
        <LinearGradient colors={['#4db8e6', '#0d4259']}
          style={styles.line} >
          <Logo />
          <Form />
          <SignupSection />
          <ButtonSubmit />
        </LinearGradient>
      </Wallpaper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'#16759b'
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  line: {
    flex: 1,
    opacity: 1
  }
});
