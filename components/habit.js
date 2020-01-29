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
        backgroundColor: "#B39C7E",
        justifyContent: "space-between",
        margin: 5,
        borderWidth: 2,

    },
    habitBoxTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    progressBarBox: {
        margin: 2,
        flexDirection: "row",
        backgroundColor: "#877864",
        alignItems: "center",
        borderWidth: 1,
        height: 10,
    },
    progressBar: {
        height: 6,
        flexDirection: "row",
        backgroundColor: "#96B3C9",
        borderWidth: 1,
        marginLeft: 1,
        marginRight: 1,
    },
    textBox: {
        flexDirection: "row",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        flex: 1

    },
    text: {
        fontSize: 18,
        letterSpacing: 3,
        color: "#292E31",

    },
    buttonBox: {
        marginLeft: 2,
        marginRight: 2,
        borderWidth: 1,
        backgroundColor: "#96B3C9"
    }
})

let today = getTodayDate();

export default class Habit extends React.Component {


    componentWillUnmount() {
        // WE can do shitt here
    }

    componentDidUpdate() {
        let progressMeter = this.props.habit.points / this.props.habit.pointsNeededToLevel;

        if(progressMeter >= 1) {
            if (this.props.goodOrBad === "goodHabits") {
                this.props.dispatch(levelUpGoodHabit(this.props.index));
                // after we should be taken to the level up screen.
                // Så dette blir next step. Lage level up screen.
            } else {
                this.props.dispatch(levelUpBadHabit(this.props.index));
            }
            // When we level up we go to level up screen
            this.props.navigation.navigate("LevelUp", {
                habitIndex: this.props.index,
                goodOrBad: this.props.goodOrBad
            })
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
    // Ckomm

    render() {
        return(
            <View style={styles.habitBox}>
                <View style={styles.habitBoxTop}>
                    <View>
                        {(this.props.habit.lastUpdated !== today && this.props.habit.weekCounter !== 0) ?
                            <View style={styles.buttonBox}>
                                <Button
                                    color="#6E8393"
                                    title="Complete"
                                    onPress={this._completeDailyHabit.bind(this)}>
                                </Button>
                            </View>
                                : null }
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.text}>
                            {this.props.habit.title + "  "}
                        </Text>
                    </View>


                    <FontAwesome.Button
                        iconStyle={{marginTop: 3}}
                        padding={6}
                        name="chevron-right"
                        backgroundColor="transparent"
                        color="#292E31"
                        size={26}
                        onPress={() => this.props.navigation.navigate("HabitDetail", {
                            habitIndex: this.props.index,
                            goodOrBad: this.props.goodOrBad
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
