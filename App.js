'use strict';
// import React from 'react';
// import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


// screens
import GoodHabitScreen from './screens/goodHabitScreen';
import BadHabitScreen from './screens/badHabitScreen';


// We start the app in the Good habit screen. and with a press at bottom
// we get to the bad habits.
const MainScreenTabNavigator = createBottomTabNavigator({
    GoodHabits: GoodHabitScreen,
    BadHabits: BadHabitScreen
})

export default createAppContainer(MainScreenTabNavigator);
