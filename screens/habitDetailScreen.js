'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import deleteBadHabit from '../redux/actions/deleteBadHabit.js';
import deleteGoodHabit from '../redux/actions/deleteGoodHabit.js';

// The plan for details.
// We make a title at the top.
// Then we have the description. This should be fixed size for the looks.
// under we got some stats, xp circle, weekly count, level
// Under this we got a delete button

// If im to list the level up notes, this goes under here.


const styles = StyleSheet.create({
    habitDetailContainer: {
        flex: 1,
        justifyContent: "space-between",
    },
    habitDetailScrollView: {
        flex: 1
    },
    habitDetailTitle: {
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
        fontSize: 24,
        color: "#292E31",
        letterSpacing: 3,
    },
    habitDetailInfo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    habitDetailDescription: {
        flex: 1,
    },
    habitDetailText: {
        letterSpacing: 1,
        fontSize: 17,
        color: "#292E31",
        margin: 20
    },
    habitDetailNotes: {
        flex: 1,
    },
    habitDetailNote: {
        flex: 1,
        padding: 5,
        borderWidth: 1,
        margin: 5,
    },
    habitDetailNoteInfo: {
        letterSpacing: 1,
        fontSize: 12,
        color: "#292E31",
        fontStyle: "italic"
    },
    habitDetailDeleteButton: {
        margin: 5,
        borderWidth: 2,
        backgroundColor: "red",
    }
})

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
        // We also make some style logic here.
        let backgroundColor = "#96B3C9";
        let boxColor = "grey";
        let pickerColor = "white";
        let placeholderColor = "black";

        if (this.state.goodOrBad === "goodHabits") {
            backgroundColor = "#5C8369";
            boxColor = "#7AA889";
            pickerColor = "#4A6352";
            placeholderColor = "#2E3831"
        }
        else {
            backgroundColor = "#B3867E";
            boxColor = "#E5B0A6";
            pickerColor = "#876A64";
            placeholderColor = "#4C413F"
        }

        let habitDocument = {};
        if (this.state.goodOrBad === "goodHabits") {
            habitDocument = this.props.goodHabits[this.state.index]

        }
        else {
            habitDocument = this.props.badHabits[this.state.index]
        }

        return (
            <View style={[styles.habitDetailContainer, {backgroundColor: backgroundColor}]}>
                <ScrollView style={styles.habitDetailScrollView}>
                    <View>
                        <Text style={styles.habitDetailTitle}>
                            {habitDocument.title}
                        </Text>
                    </View>

                    <View style={styles.habitDetailInfo}>
                        <Text>

                            level: {habitDocument.level}
                        </Text>
                        <Text>
                            Week Counter: {habitDocument.weekCounter}
                        </Text>
                    </View>
                    <View style={styles.habitDetailDescription}>
                        <Text style={styles.habitDetailText}>
                            {habitDocument.description}
                        </Text>
                    </View>
                    {(habitDocument.levelUpNotes.length > 0) ?
                        <View style={styles.habitDetailNotes}>

                            {habitDocument.levelUpNotes.map((levelUpNote, index) => (
                                 <View key={index} style={[styles.habitDetailNote, {backgroundColor: boxColor}]}>
                                     <Text style={styles.habitDetailNoteInfo}>Note created 19.20</Text>
                                     <Text style={styles.habitDetailText}>
                                         {levelUpNote}
                                     </Text>
                                 </View>
                            ))}
                        </View>

                    : null}
                </ScrollView>
                <View style={styles.habitDetailDeleteButton}>
                    <Button
                        color="#4C413F"
                        title="Delete"
                        onPress={this._deleteHabit.bind(this)}>
                    </Button>
                </View>
            </View>
        )
    }
}


const mapStateToProps = state => ({
    goodHabits: state.goodHabits,
    badHabits: state.badHabits
})
export default connect(mapStateToProps)(HabitDetailScreen);
