'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

// Import screens
import CreateHabitScreen from './createHabitScreen.js';
import HabitDetailScreen from './habitDetailScreen.js';


class GoodHabitScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Hello! Good Habits die hard why so hard!
                </Text>
            </View>
        )
    }
}

const GoodHabitStack = createStackNavigator({
    GoodHabitsHome: GoodHabitScreen,
    CreateHabit: CreateHabitScreen,
    HabitDetail: HabitDetailScreen
},
{
    initialRouteName: "GoodHabitsHome"
})

export default GoodHabitStack;
