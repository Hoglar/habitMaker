'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

// The plan for details.
// We make a title at the top.
// Then we have the description. This should be fixed size for the looks.
// under we got some stats, xp circle, weekly count, level
// Under this we got a delete button

// If im to list the level up notes, this goes under here.


class HabitDetailScreen extends React.Component {
    render() {
        const index = this.props.navigation.getParam("habitIndex", "err");
        const goodOrBad = this.props.navigation.getParam("goodOrbad", "err");
        let habitDocument = {};
        if (goodOrBad === "goodHabits") {
            habitDocument = this.props.goodHabits[index]

        }
        else {
            habitDocument = this.props.badHabits[index]
        }

        console.log("is it working still?")
        return (
            <View>
                <Text>
                    {habitDocument.title}
                </Text>
                <Text>
                    {habitDocument.description}
                </Text>
                <Text>XP</Text>
                <Text>
                    {habitDocument.weekCounter}
                </Text>
                <Text>Level</Text>
                <Button
                    title="Delete">
                </Button>

            </View>
        )
    }
}


const mapStateToProps = state => ({
    goodHabits: state.goodHabits,
    badHabits: state.badHabits
})
export default connect(mapStateToProps)(HabitDetailScreen);
