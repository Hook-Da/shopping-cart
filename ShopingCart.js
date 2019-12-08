import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import BooksScreen from './containers/BooksScreen';
import ElectronicsScreen from './containers/ElectronicsScreen';
import HomeScreen from './containers/HomeScreen';
import ShopingCartIcon from './containers/ShopingCartIcon';

const AppStackNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions:()=>({
            title:'HomeScreen'
        })
    },
    Electronics: ElectronicsScreen,
    Books: BooksScreen
},{
    navigationOptions:{
        headerTitle:'Shoping App',
        headerRight:(
            <ShopingCartIcon />
        )
    }
});
const ShopingCart = createAppContainer(AppStackNavigator);
export default ShopingCart;