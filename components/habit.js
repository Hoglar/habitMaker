'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// access to store?
// Nah
import completeDailyGoodHabit from '../redux/actions/completeDailyGoodHabit.js';
import completeDailyBadHabit from '../redux/actions/completeDailyBadHabit.js';
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


export default class Habit extends React.Component {

    _completeDailyHabit() {
        this.props.dispatch(completeDailyGoodHabit(this.props.index))
        // When we compleet we dispatch!
        // And what needs to be done then!
            // We need to
    }

    render() {
        return(
            <View style={styles.box}>
                <Button
                    title="Complete"
                    onPress={this._completeDailyHabit.bind(this)}></Button>
                <Text style={styles.text}>
                    {this.props.title + "  "}
                    {this.props.points}
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
