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

const myButton = (
  <FontAwesome.Button
      iconStyle={{marginTop: 3}}
      padding={6}
      name="chevron-right"
      backgroundColor="transparent"
      size={26}
      onPress={()=> {console.log("Hello")}}>
  </FontAwesome.Button>
);


export default class Habit extends React.Component {

    render() {
        return(
            <View style={styles.box}>
                <Button title="Complete"></Button>
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
                {myButton}
            </View>
        )
    }
}
