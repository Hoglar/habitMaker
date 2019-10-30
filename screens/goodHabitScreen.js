'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

// Import screens
import CreateHabitScreen from './createHabitScreen.js';
import HabitDetailScreen from './habitDetailScreen.js';


class GoodHabitScreen extends React.Component {

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

const GoodHabitStack = createStackNavigator({
    GoodHabitsHome: GoodHabitScreen,
    CreateHabit: CreateHabitScreen,
    HabitDetail: HabitDetailScreen
},
{
    initialRouteName: "GoodHabitsHome"
})

export default GoodHabitStack;
