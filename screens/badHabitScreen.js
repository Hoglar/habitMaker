'use strict';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Import screens
import CreateHabitScreen from 'CreateHabitScreen.js';
import HabitDetailScreen from 'HabitDetailScreen.js';

class BadHabitScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Hello! Bad Habits!
                </Text>
            </View>
        )
    }
}

export default const GoodHabitStack = createStackNavigator({
    BadHabitsHome: BadHabitScreen,
    CreateHabit: CreateHabitScreen,
    HabitDetail: HabitDetailScreen
},
{
    initialRouteName: BadHabitsHome
})
