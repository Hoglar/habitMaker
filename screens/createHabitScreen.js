'use strict';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

// How does a basic habbit look?

const habit = {
    // Title must be typed out
    title: "Title of the habit",
    // description may be optional? must be written.
    description: "Explanation of the habit",
    // needs to be drop down selector
    updateFrequens: "1 - 7",
    timeOfCreation: Date.now(),
    lastUpdated: "datoen sist denne ble opdatert",
    level: 1,
    difficulity: "number that modify decay rate",
    pointsNeededToLevel: "number",
    points: ""

}

class CreateHabitScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Text>
                    Hello! Bad Habits! we got ways to create habits
                </Text>
            </View>
        )
    }
}


// createscrean need to be connected and needs acces to goodHabits and badHabits

const mapStateToProps = state => ({
    goodHabits: state.goodHabits,
    badHabits: state.badHabits
})
export default connect(mapStateToProps)(CreateHabitScreen);
