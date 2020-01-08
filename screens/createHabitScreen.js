'use strict';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button, KeyboardAvoidingView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
// Import actions
import saveNewGoodHabit from '../redux/actions/saveNewGoodHabit.js';
import saveNewBadHabit from '../redux/actions/saveNewBadHabit.js';
// How does a basic habbit look?

const styles = StyleSheet.create({
    habitCreateScreenBox: {
        flex: 1,
        justifyContent: "space-between"
    },
    habitTitleInput: {
        margin: 5,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 20,
        height: 40,
        borderWidth: 2,
    },
    habitDescriptionInput: {
        margin: 5,
        padding: 5,
        flex: 1,
        fontSize: 18,
        borderWidth: 2,
        textAlignVertical: "top"
    },
    createHabitButtonBox: {
        margin: 5,
        flexDirection: "row",
        padding: 5,
        height: 50,
        borderWidth: 2,
        alignItems: "center"

    },
    createHabitButton: {

    },
    createHabitPicker: {
        flex: 1
    }

})


class CreateHabitScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            // Week counter determine how many time a week we can update our
            // habit object. It will reset on sundays. or something like that.

            // A habit can be updated everyday, but only once.
            weekCounterLimit: 7,
            weekCounter: 7,
            goodOrBad: this.props.navigation.getParam("goodOrBad", "err"),
            timeOfCreation: Date.now(),
            // last updated is getting updated on every update og the data.
            lastUpdated: Date.now(),
            level: 1,
            difficulity: 0.5,
            pointsNeededToLevel: 1000000,
            points: 1,
            levelUpNotes: []
        }
    }

    _saveNewHabit() {
        // This function needs to dispatch an action to save new habit.
        // It ises info from state.

        if(this.state.title === "") {
            alert("Input title!");
        } else {
            if (this.state.goodOrBad === "good") {
                this.props.dispatch(saveNewGoodHabit(this.state))
                this.props.navigation.goBack();
            }
            if ( this.state.goodOrBad === "bad") {
                this.props.dispatch(saveNewBadHabit(this.state))
                this.props.navigation.goBack();
            }
        }



    }
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1}}>
                <View style={styles.habitCreateScreenBox}>
                    <View style={{flex: 1}}>
                        <TextInput
                            style={styles.habitTitleInput}
                            placeholder="Title"
                            onChangeText={titleInput => this.setState({title: titleInput})}>
                        </TextInput>
                        <TextInput
                            style={styles.habitDescriptionInput}
                            placeholder="Description"
                            multiline={true}
                            onChangeText={descriptionInput=> this.setState({description: descriptionInput})}
                            >
                        </TextInput>

                    </View>
                    <View style={styles.createHabitButtonBox}>
                        <Picker
                          selectedValue={this.state.weekCounterLimit}
                          style={styles.createHabitPicker}
                          onValueChange={(itemValue, itemIndex) =>
                              this.setState({weekCounterLimit: itemValue, weekCounter: itemValue})
                          }>
                          <Picker.Item label="Every day" value={7} />
                          <Picker.Item label="Two times a week" value={2} />
                          <Picker.Item label="Three times a week" value={3} />
                          <Picker.Item label="Four times a week" value={4} />
                          <Picker.Item label="Five times a week" value={5} />
                          <Picker.Item label="Six times a week" value={6} />
                          <Picker.Item label="Once a week" value={1}/>
                        </Picker>
                        <Button
                            style={styles.createHabitButton}
                            title="Create Habit"
                            onPress={this._saveNewHabit.bind(this)}>

                        </Button>
                    </View>
                </View>
                <View style={{height: 85}}></View>
            </KeyboardAvoidingView>
        )
    }
}


// createscrean need to be connected and needs acces to goodHabits and badHabits

const mapStateToProps = state => ({
    goodHabits: state.goodHabits,
    badHabits: state.badHabits,
})
export default connect(mapStateToProps)(CreateHabitScreen);
