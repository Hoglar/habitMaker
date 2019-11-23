'use strict';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button } from 'react-native';
import { connect } from 'react-redux';

// Import actions
import saveNewGoodHabit from '../redux/actions/saveNewGoodHabit.js';
import saveNewBadHabit from '../redux/actions/saveNewBadHabit.js';
// How does a basic habbit look?



class CreateHabitScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            updateFrequency: 1,
            goodOrBad: this.props.navigation.getParam("goodOrBad", "err")
        }
    }

    _saveNewHabit() {
        // This function needs to dispatch an action to save new habit.
        // It ises info from state.

        console.log(this.state.habitTitle, this.state.goodOrBad)
        if (this.state.goodOrBad === "good") {
            this.props.dispatch(saveNewGoodHabit(this.state))
        }
        if ( this.state.goodOrBad === "bad") {
            this.props.dispatch(saveNewBadHabit(this.state))
        }

    }
    render() {
        return (
            <View>
                <Text>
                    Hello! Bad Habits! we got ways to create habits
                </Text>
                <TextInput
                    placeholder="Title"
                    onChangeText={titleInput => this.setState({title: titleInput})}>
                </TextInput>
                <TextInput
                    style={{textAlignVertical: "top"}}
                    placeholder="Description"
                    multiline={true}
                    onChangeText={descriptionInput=> this.setState({description: descriptionInput})}
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
                </Picker>
                <Button
                    title="Create Habit"
                    onPress={this._saveNewHabit.bind(this)}>

                </Button>

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
