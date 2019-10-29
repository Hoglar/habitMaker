'use strict';
import React from 'react';
// import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


// screens
import GoodHabitStack from './screens/goodHabitScreen.js';
import BadHabitStack from './screens/badHabitScreen.js';



// We start the app in the Good habit screen. and with a press at bottom
// we get to the bad habits.
const MainScreenTabNavigator = createBottomTabNavigator({
    GoodHabits: GoodHabitStack,
    BadHabits: BadHabitStack
},
{
    initialRouteName: "GoodHabits",
})

export default createAppContainer(MainScreenTabNavigator);
