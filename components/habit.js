'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// access to store?

// Ok, lets make an Habit.
// this component needs some props, dont know if this is bad practise while
// using redux. But anyway.

// Hver box burde ha en drop down button som gjør at jeg ser mer informasjon
// Men ønsker ikke å bytte screan, vi bare forlenger den eksisterende.
// Eller ikke, vi kan bytte screen

// Creating styles for habit box.

const styles = StyleSheet.create({
    box: {
        height: 40,
        backgroundColor: "teal",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 3
    },
    text: {

    }
})


export default class Habit extends React.Component {

    render() {
        return(
            <View style={styles.box}>
                <Button title="Complete"></Button>
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
                <FontAwesome.Button name="angle-right" backgroundColor="teal" size={30}></FontAwesome.Button>
            </View>
        )
    }
}
