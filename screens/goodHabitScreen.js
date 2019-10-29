'use strict';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

// Import screens
import CreateHabitScreen from 'CreateHabitScreen.js';
import HabitDetailScreen from 'HabitDetailScreen.js';


class GoodHabitScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Hello! Good Habits die hard!
                </Text>
            </View>
        )
    }
}

export default const GoodHabitStack = createStackNavigator({
    GoodHabitsHome: GoodHabitScreen,
    GoodHabit: CreateHabitScreen,
    habitDetail: HabitDetailScreen
},
{
    initialRouteName: GoodHabitsHome
})
