import React from 'react';
import { Platform, Text, View } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const textStyles = {
  fontSize: 20
};

const activeTextStyles = {
  fontSize: 28
};

const activeStyles = {
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: '#d6d7da'
};

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  showLabel: false,
  tabBarOptions: {
    showLabel: false
  },

  tabBarIcon: ({ focused, tintColor }) =>
    focused ? (
      <View styles={activeStyles}>
        <Text style={activeTextStyles}>🏷</Text>
      </View>
    ) : (
      <View>
        <Text style={textStyles}>🏷</Text>
      </View>
    )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  showLabel: false,
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused, tintColor }) =>
    focused ? (
      <View styles={activeStyles}>
        <Text style={activeTextStyles}>🔍</Text>
      </View>
    ) : (
      <View>
        <Text style={textStyles}>🔍</Text>
      </View>
    )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  showLabel: false,
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused, tintColor }) =>
    focused ? (
      <View styles={activeStyles}>
        <Text style={activeTextStyles}>🗒</Text>
      </View>
    ) : (
      <View>
        <Text style={textStyles}>🗒</Text>
      </View>
    )
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});
