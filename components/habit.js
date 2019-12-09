'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import saveStateToStorage from '../functions/saveStateToStorage.js';

import levelUpGoodHabit from '../redux/actions/levelUpGoodHabit.js';
import levelUpBadHabit from '../redux/actions/levelUpBadHabit.js';
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
    habitBox: {
        height: 60,
        backgroundColor: "teal",
        justifyContent: "space-between"
    },
    habitBoxTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    progressBarBox: {
        margin: 2,
        flexDirection: "row",
        backgroundColor: "grey",
        alignItems: "center",
        borderWidth: 1,
        height: 10,
    },
    progressBar: {
        height: 6,
        flexDirection: "row",
        backgroundColor: "yellow",
        borderWidth: 1,
        marginLeft: 1,
        marginRight: 1,
    },
    text: {

    }
})

let today = getTodayDate();

export default class Habit extends React.Component {


    componentWillUnmount() {
        console.log("AAAAHRG");
    }

    componentDidUpdate() {
        let progressMeter = this.props.habit.points / this.props.habit.pointsNeededToLevel;
        console.log(progressMeter);
        if(progressMeter >= 1) {
            if (this.props.goodOrBad === "goodHabits") {
                this.props.dispatch(levelUpGoodHabit(this.props.index));
                // after we should be taken to the level up screen.
                // Så dette blir next step. Lage level up screen.
            } else {
                this.props.dispatch(levelUpBadHabit(this.props.index));
            }
        }
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
            <View style={styles.habitBox}>
                <View style={styles.habitBoxTop}>
                    {(this.props.habit.lastUpdated !== today && this.props.habit.weekCounter !== 0) ?
                        <Button
                            title="Complete"
                            onPress={this._completeDailyHabit.bind(this)}></Button>

                            : null }
                    <Text style={styles.text}>
                        {this.props.habit.title + "  "}
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
                <View style={styles.progressBarBox}>
                    <View style={[styles.progressBar, {flex: (this.props.habit.points / this.props.habit.pointsNeededToLevel)}]}>

                    </View>
                </View>
            </View>
        )
    }
}
