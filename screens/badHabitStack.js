'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

// Import screens
import CreateHabitScreen from './createHabitScreen.js';
import HabitDetailScreen from './habitDetailScreen.js';
import BadHabitScreen from './badHabitScreen.js';
import LevelUpScreen from './levelUpScreen.js';

// Importing components
import CustomHeader from '../components/customHeader.js';

const BadHabitStack = createStackNavigator({
    BadHabitsHome: BadHabitScreen,
    CreateHabit: CreateHabitScreen,
    HabitDetail: HabitDetailScreen,
    LevelUp: LevelUpScreen,
},
{
    initialRouteName: "BadHabitsHome",
    defaultNavigationOptions: {
        headerTitle: <CustomHeader />,

        headerStyle: {
            backgroundColor: '#536573',
            borderBottomWidth: 2,
        }
    }
})

export default BadHabitStack;
