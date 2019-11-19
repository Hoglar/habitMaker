'use strict';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class HabitDetailScreen extends React.Component {
    render() {
        const index = this.props.navigation.getParam("habitIndex", "err");
        const goodOrBad = this.props.navigation.getParam("goodOrbad", "err");
        console.log(goodOrBad)
        if (goodOrBad === "goodHabits") {
            console.log(index)
            console.log(this.props.goodHabits[index])
        }
        else {
            console.log(this.props.badHabits[index])
        }
        return (
            <View>
                <Text>
                    Hello! Bad Habits! we got Details
                </Text>
            </View>
        )
    }
}


const mapStateToProps = state => ({
    goodHabits: state.goodHabits,
    badHabits: state.badHabits
})
export default connect(mapStateToProps)(HabitDetailScreen);
