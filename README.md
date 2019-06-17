# react-navigation

        yarn add react-navigation
        yarn add react-native-gesture-handler
        react-native link react-native-gesture-handler

next in your main activity you have to add this code 
MainActivity.java
          package com.vishnugupta;

        import com.facebook.react.ReactActivity;
        import com.facebook.react.ReactActivityDelegate;
        import com.facebook.react.ReactRootView;
        import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

        public class MainActivity extends ReactActivity {

            /**
             * Returns the name of the main component registered from JavaScript.
             * This is used to schedule rendering of the component.
             */
            @Override
            protected String getMainComponentName() {
                return "vishnugupta";
            }

            @Override
          protected ReactActivityDelegate createReactActivityDelegate() {
            return new ReactActivityDelegate(this, getMainComponentName()) {
              @Override
              protected ReactRootView createRootView() {
               return new RNGestureHandlerEnabledRootView(MainActivity.this);
              }
            };
          }

        }



App.js


        import React, {Component} from 'react';
        import { createStackNavigator, createAppContainer, AppRegistry } from 'react-navigation';

        import HomeScreen from './app/Component/HomeScreen'
        import DetailsScreen from './app/Component/DetailsScreen'
        import Third from './app/Component/third'


        export default class App extends Component {
          render() {
            return (
              <AppContainer/>
            );
          }
        }


        const RootStack = createStackNavigator(
          {
            Home: HomeScreen,
            Details: DetailsScreen,
            NewThird: Third

          }, {
            initialRouteName: 'Home'
          }
        );

        const AppContainer = createAppContainer(RootStack);



HomeScreen.js

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
          
          
   DetailsScreen.js

             import React, {Component} from 'react';
          import {Platform, StyleSheet, Text, View, Button} from 'react-native';
          import { createStackNavigator, createAppContainer, AppRegistry } from 'react-navigation';


            export default class DetailsScreen extends Component {
              render() {
                return (
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Details Screen</Text>
                    <Button
                      title="Go to Details... again"
                      onPress={() => this.props.navigation.navigate('NewThird')}
                    />
                  </View>
                );
              }
            }



Third.js


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
