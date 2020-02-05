'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import saveLevelUpNote from '../redux/actions/saveLevelUpNote.js';
import saveAchievement from '../redux/actions/saveAchievement.js';

const styles = StyleSheet.create({
    levelUpMainframe: {
        flex: 1,
        justifyContent: "space-between"
    },
    levelUpInfo: {
        margin: 10,

    },
    levelUpInfoText: {
        fontSize: 14,
        letterSpacing: 3,
        textAlign: "center"
    },
    levelUpNoteInput: {
        flex: 1,
        margin: 5,
        borderWidth: 2,
        fontSize: 18,
        padding: 5,
        textAlignVertical: "top",
    },
    levelUpButton: {
        backgroundColor: "#6E8393",
        borderWidth: 2,
        margin: 5
    }
})

class LevelUpScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            levelUpNote: "",
            index: this.props.navigation.getParam("habitIndex", "err"),
            goodOrBad: this.props.navigation.getParam("goodOrBad", "err")
        }
    }

    _saveLevelUpNote() {
        this.props.dispatch(saveLevelUpNote(this.state))
        if(this.state.goodOrBad === "goodHabits") {
            this.props.dispatch(saveAchievement(this.props.goodHabits[this.state.index]))
        }
        else {
            this.props.dispatch(saveAchievement(this.props.badHabits[this.state.index]))
        }

        this.props.navigation.goBack()
    }

    render() {
        let backgroundColor = "#96B3C9";
        let boxColor = "grey";
        let pickerColor = "white";
        let placeholderColor = "black";

        if (this.state.goodOrBad === "goodHabits") {
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
                <View style={styles.levelUpMainframe}>
                    <View style={styles.levelUpInfo}>
                        <Text style={styles.levelUpInfoText}>
                            Good job! You have leveled up, its gonna be harder reaching the next level.
                            Now write a note, reflect on your journey.
                        </Text>
                    </View>
                    <TextInput
                        style={[styles.levelUpNoteInput, {backgroundColor: boxColor}]}
                        placeholderTextColor={placeholderColor}
                        placeholder="Note"
                        onChangeText={levelUpNoteInput => this.setState({levelUpNote: levelUpNoteInput})}>
                    </TextInput>
                    <View style={styles.levelUpButton}>
                        <Button color="#6E8393"
                                title="Save note"
                                onPress={this._saveLevelUpNote.bind(this)}>
                        </Button>
                    </View>

                </View>
                <View style={{height: 85}}></View>
            </KeyboardAvoidingView>
        )
    }
}


const mapStateToProps = state => ({
    goodHabits: state.goodHabits,
    badHabits: state.badHabits
})
export default connect(mapStateToProps)(LevelUpScreen);
