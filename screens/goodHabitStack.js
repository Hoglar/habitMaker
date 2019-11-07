'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

// Import screens
import CreateHabitScreen from './createHabitScreen.js';
import HabitDetailScreen from './habitDetailScreen.js';
import GoodHabitScreen from './goodHabitScreen.js';

// Importing components
import CustomHeader from '../components/customHeader.js';

import store from '../redux/store/store.js';

const GoodHabitStack = createStackNavigator({
    GoodHabitsHome: GoodHabitScreen,
    CreateHabit: CreateHabitScreen,
    HabitDetail: HabitDetailScreen
},
{
    initialRouteName: "GoodHabitsHome",
    defaultNavigationOptions: {
        headerTitle: CustomHeader(store.getState().quote.text),

        headerStyle: {
            backgroundColor: '#84A1FF',

        }
    }
})

export default GoodHabitStack;
