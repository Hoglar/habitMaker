'use strict';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

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
        return (
            <View>
                <Text>
                    {habitDocument.title}
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
