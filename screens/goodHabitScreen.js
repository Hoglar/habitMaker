'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

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

export default GoodHabitScreen;
