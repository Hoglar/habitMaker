'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// access to store?

// Ok, lets make an Habit.
// this component needs some props, dont know if this is bad practise while
// using redux. But anyway.

export default class Habit extends React.Component {

    render() {
        return(
            <View style={{height: 20}}>
                <Text>
                    Good Habit
                </Text>
            </View>
        )
    }
}
