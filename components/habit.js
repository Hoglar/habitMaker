'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import saveStateToStorage from '../functions/saveStateToStorage.js';

import completeDailyGoodHabit from '../redux/actions/completeDailyGoodHabit.js';
import completeDailyBadHabit from '../redux/actions/completeDailyBadHabit.js';
import getTodayDate from '../functions/getTodayDate.js';
// Ok, lets make an Habit.
// this component needs some props, dont know if this is bad practise while
// using redux. But anyway.

// Hver box burde ha en drop down button som gjør at jeg ser mer informasjon
// Men ønsker ikke å bytte screan, vi bare forlenger den eksisterende.
// Eller ikke, vi kan bytte screen

// Creating styles for habit box.

const styles = StyleSheet.create({
    box: {
        height: 50,
        backgroundColor: "teal",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 3
    },
    text: {

    }
})

let today = getTodayDate();

export default class Habit extends React.Component {

    componentWillUnmount() {
        console.log("AAAAHRG");
    }

    _completeDailyHabit() {
        if(this.props.habit.lastUpdated !== today && this.props.habit.weekCounter !== 0) {
            if(this.props.goodOrBad === "goodHabits") {
                this.props.dispatch(completeDailyGoodHabit(this.props.index));
            } else {
                this.props.dispatch(completeDailyBadHabit(this.props.index));
            }

        }
    }

    render() {
        return(
            <View style={styles.box}>
                {(this.props.habit.lastUpdated !== today && this.props.habit.weekCounter !== 0) ?
                    <Button
                        title="Complete"
                        onPress={this._completeDailyHabit.bind(this)}></Button>

                        : null }
                <Text style={styles.text}>
                    {this.props.habit.title + "  "}
                    {this.props.habit.points}
                </Text>

                <FontAwesome.Button
                    iconStyle={{marginTop: 3}}
                    padding={6}
                    name="chevron-right"
                    backgroundColor="transparent"
                    size={26}
                    onPress={() => this.props.navigation.navigate("HabitDetail", {
                        habitIndex: this.props.index,
                        goodOrbad: this.props.goodOrBad
                    })}>
                </FontAwesome.Button>
            </View>
        )
    }
}
