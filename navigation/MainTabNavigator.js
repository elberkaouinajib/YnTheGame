import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ParisScreen from '../screens/ParisScreen';
import ShopScreen from '../screens/ShopScreen';
import StreamScreen from '../screens/StreamScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="home"
      type="feather"
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: StreamScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Stream',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="camera-metering-center"
      type="material-community"
    />
  ),
};

const ProfileStack = createStackNavigator({
  Settings: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="account-card-details"
      type="material-community"
    />
  ),
};

const ParisStack = createStackNavigator({
  Settings: ParisScreen,
});

ParisStack.navigationOptions = {
  tabBarLabel: 'Paris',

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="vote-outline"
      type="material-community"
    />
  ),
};

const ShopStack = createStackNavigator({
  Settings: ShopScreen,
});

ShopStack.navigationOptions = {
  tabBarLabel: 'Shop',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="shopify"
      type="material-community"
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ParisStack,
  ShopStack,
  LinksStack,
  ProfileStack,
},{
  tabBarOptions : {
    style: {
      backgroundColor: '#1D1D1B',
    },
    activeTintColor: Colors.tintColor,
    inactiveTintColor: Colors.tabIconDefault, 
  }
});