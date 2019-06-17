
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer, AppRegistry } from 'react-navigation';
 

 
export default class Third extends Component {
    // static navigationOptions = {
    //     header: null
    // }
    render() {
      return (
        <View >
          <Text>this is the third page </Text>

          {/* <Button title='Click' onPress={() => this.props.navigation.navigate('Details')} /> */}
        </View>
      );
    }
  }