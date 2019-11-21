'use strict';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';

// How does a basic habbit look?

const habit = {
    // Title must be typed out
    title: "Title of the habit",
    // description may be optional? must be written.
    description: "Explanation of the habit",
    // needs to be drop down selector
    updateFrequens: "1 - 7",
    weekCounter: "Some counter to say how many times a week you can score points"
    timeOfCreation: Date.now(),
    lastUpdated: "datoen sist denne ble opdatert",
    level: 1,
    difficulity: "number that modify decay rate",
    pointsNeededToLevel: "number",
    points: ""

}

class CreateHabitScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            updateFrequency: 1
        }
    }
    render() {
        return (
            <View>
                <Text>
                    Hello! Bad Habits! we got ways to create habits
                </Text>
                <TextInput
                    placeholder="Title">
                </TextInput>
                <TextInput
                    style={{textAlignVertical: "top"}}
                    placeholder="Description"
                    multiline={true}
                    >
                </TextInput>
                <Picker
                    selectedValue={this.state.updateFrequency}
                    style={{height: 50, width: 200}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({updateFrequency: itemValue})
                    }>
                    <Picker.Item label="Every day" value={1} />
                    <Picker.Item label="Every second day" value={2} />
                    <Picker.Item label="Two times a week" value={2} />
                    <Picker.Item label="Three times a week" value={3} />
                    <Picker.Item label="Four times a week" value={4} />
                    <Picker.Item label="Five times a week" value={5} />
                    <Picker.Item label="Six times a week" value={6} />
                    <Picker.Item label="Once a week" value={7}/>
                    <Picker.Item label="Once a month" value={30}/>
                </Picker>

            </View>
        )
    }
}


// createscrean need to be connected and needs acces to goodHabits and badHabits

const mapStateToProps = state => ({
    goodHabits: state.goodHabits,
    badHabits: state.badHabits,
})
export default connect(mapStateToProps)(CreateHabitScreen);
