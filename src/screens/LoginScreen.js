
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

//components
import Wallpaper from './../component/Wallpaper';
import Logo from './../component/Logo';
import Form from './../component/form/Form';
import ButtonSubmit from './../component/form/ButtonSubmit';
import SignupSection from './../component/form/SignupSection'
//img
// import bg from './assets/images/wallpaper.png';

type Props = {};
export default class LoginScreen extends Component<Props> {
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
