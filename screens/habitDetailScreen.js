'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import deleteBadHabit from '../redux/actions/deleteBadHabit.js';
import deleteGoodHabit from '../redux/actions/deleteGoodHabit.js';

// The plan for details.
// We make a title at the top.
// Then we have the description. This should be fixed size for the looks.
// under we got some stats, xp circle, weekly count, level
// Under this we got a delete button

// If im to list the level up notes, this goes under here.


class HabitDetailScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: this.props.navigation.getParam("habitIndex", "err"),
            goodOrBad: this.props.navigation.getParam("goodOrBad", "err")
        }
    }

    // Doing the delete part async, i dont know if this is done right.
    // but the idea is to make app unmount first, then delete.
    _deleteHabit() {
        // This function dispatches an action to delete a habit,
        if (this.state.goodOrBad === "goodHabits") {
            setTimeout(() => {this.props.dispatch(deleteGoodHabit(this.state.index))}, 500);
            this.props.navigation.goBack();
        }
        else {
            this.props.navigation.goBack();
            setTimeout(() => {this.props.dispatch(deleteBadHabit(this.state.index))}, 500);
        }
    }

    render() {
        let habitDocument = {};
        if (this.state.goodOrBad === "goodHabits") {
            habitDocument = this.props.goodHabits[this.state.index]

        }
        else {
            habitDocument = this.props.badHabits[this.state.index]
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
                {(habitDocument.levelUpNotes.length > 0) ?
                    habitDocument.levelUpNotes.map((levelUpNote, index) => (
                         <View key={index}>
                             <Text>
                                 {levelUpNote}
                             </Text>
                         </View>
                    ))
                : null}
                <Button
                    title="Delete"
                    onPress={this._deleteHabit.bind(this)}>
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
