
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



