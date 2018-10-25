/** @format */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import { StackNavigator } from 'react-navigation';

// components 
import LoginComponent from './src/components/LoginComponent';
import HomeComponent from './src/components/HomeComponent';

//screen name
import {HomeScreen, LoginScreen } from './src/screens/Screen';

const App = StackNavigator({
    HomeScreen: {
        screen: HomeComponent
    },
    LoginScreen: {
        screen: LoginComponent,
    }
    });

AppRegistry.registerComponent(appName, () => App);
