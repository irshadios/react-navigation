
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer, AppRegistry } from 'react-navigation';
 

 
export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
      return (
        <View >
          <Text>What </Text>

          <Button title='Click' onPress={() => this.props.navigation.navigate('Details')} />
        </View>
      );
    }
  }