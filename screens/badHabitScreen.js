'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

// Import screens
import CreateHabitScreen from './createHabitScreen.js';
import HabitDetailScreen from './habitDetailScreen.js';

class BadHabitScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "Random inspiration word?",
            headerRight: () => (
                <Button
                    onPress={() => navigation.navigate('CreateHabit')}
                    title="Create"
                    color="green"
                />
            )
        }
    }

    render() {
        return (
            <View>

            </View>
        )
    }
}


const BadHabitStack = createStackNavigator({
    BadHabitsHome: BadHabitScreen,
    CreateHabit: CreateHabitScreen,
    HabitDetail: HabitDetailScreen
},
{
    initialRouteName: "BadHabitsHome"
})

export default BadHabitStack;
