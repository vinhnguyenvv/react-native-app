/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import { createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

//components
import Wallpaper from './src/component/Wallpaper';
import Logo from './src/component/Logo';
import Form from './src/component/form/Form';
import ButtonSubmit from './src/component/form/ButtonSubmit';
import SignupSection from './src/component/form/SignupSection'

//screen
import LoginScreen from './src/screens/LoginScreen';
//img
import bg from './src/assets/images/wallpaper.png';

type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <Wallpaper>
//         <LinearGradient colors={['#4db8e6', '#0d4259']}
//           style={styles.line} >
//           <Logo />
//           <Form />
//           <SignupSection />
//           <ButtonSubmit />
//         </LinearGradient>
//       </Wallpaper>
//     );
//   }
// }
const App = createBottomTabNavigator({
  Login: { screen: LoginScreen },
  // Profile: { screen: ProfileScreen },
});
export default App

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
