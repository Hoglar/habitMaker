'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

// Import screens
import CreateHabitScreen from './createHabitScreen.js';
import HabitDetailScreen from './habitDetailScreen.js';

import store from '../redux/store/store.js';
import changeQuote from '../redux/actions/changeQuote.js';

// Importing components
import CustomHeader from '../components/customHeader.js';
import Habit from '../components/habit.js';

store.dispatch(changeQuote());

class GoodHabitScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerRight: () => (
                <View style={{margin: 10}}>
                    <Button
                        onPress={() => navigation.navigate('CreateHabit')}
                        title="Create"
                        color="green"
                    />
                </View>

            )
        }
    }

    render() {
        return (
            <ScrollView>
                {store.getState().goodHabits.map((habit) => {
                    <Habit />
                })}
            </ScrollView>
        )
    }
}


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
