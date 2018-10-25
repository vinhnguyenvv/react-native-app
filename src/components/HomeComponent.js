import React, { Component } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements'

export default class HomeComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        title = "Home";
        let headerTitleStyle = { color: "red" };
        let headerRight = (<Button
            title='Login'
            color="#16759b"
            backgroundColor="red"
            onPress={() => {
                params.onSave();
            }}
        />);
        return { title, headerTitleStyle, headerRight };
    };
    _onSave() {
        console.log('ok hihi');
        
        this.props.navigation.navigate("LoginScreen")

    }
    componentDidMount() {
        this.props.navigation.setParams({onSave: this._onSave.bind(this), isSaving:false})
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>welcome</Text>
                <Button title='Learn More' />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16759b',
        justifyContent: 'center',
        alignItems: 'center',
    }
});