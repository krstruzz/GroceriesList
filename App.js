/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import ShoppingList from './src/screens/ShoppingList.js';
import AppProduct from './src/screens/AddProduct.js';

const Navigator = StackNavigator({
    ShoppingList: { screen: ShoppingList},
    AppProduct: { screen: AppProduct }
    });

export default class App extends React.Component {
  constructor() {
      super();
  }

  render() {
    return <Navigator/>;
  }
}
