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
        justifyContent: "space-between",
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
        textAlignVertical: "top",
    },
    createHabitButtonBox: {
        margin: 5,
        flexDirection: "row",
        padding: 5,
        height: 50,
        borderWidth: 2,
        alignItems: "center",

    },
    createHabitButton: {
        backgroundColor: "#6E8393",
        borderWidth: 1,
    },
    createHabitPicker: {
        flex: 1,
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

        } else if (this.state.title.length > 15){
            alert("Title to long, max 15 letters")
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
        let backgroundColor = "#96B3C9";
        let boxColor = "grey";
        let pickerColor = "white";
        let placeholderColor = "black";

        if (this.state.goodOrBad === "good") {
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
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1, backgroundColor: backgroundColor}}>
                <View style={styles.habitCreateScreenBox}>
                    <View style={{flex: 1}}>
                        <TextInput
                            style={[styles.habitTitleInput, {backgroundColor: boxColor}]}
                            placeholder="Title"
                            placeholderTextColor={placeholderColor}
                            onChangeText={titleInput => this.setState({title: titleInput})}>
                        </TextInput>
                        <TextInput
                            style={[styles.habitDescriptionInput, {backgroundColor: boxColor}]}
                            placeholder="Description"
                            placeholderTextColor={placeholderColor}
                            multiline={true}
                            onChangeText={descriptionInput=> this.setState({description: descriptionInput})}
                            >
                        </TextInput>

                    </View>
                    <View style={[styles.createHabitButtonBox, {backgroundColor: pickerColor}]}>
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
                        <View style={styles.createHabitButton}>
                            <Button
                                title="Create Habit"
                                onPress={this._saveNewHabit.bind(this)}
                                color="#6E8393">
                            </Button>
                        </View>

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
