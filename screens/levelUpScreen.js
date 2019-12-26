'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';

import saveLevelUpNote from '../redux/actions/saveLevelUpNote.js';

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
        console.log(this.props)
        this.props.dispatch(saveLevelUpNote(this.state))
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View>
                <Text>
                    Hello! level Upper. Good job leveling up. Plz write a note reflectiong on you journey.
                </Text>
                <TextInput
                    placeholder="Title"
                    onChangeText={levelUpNoteInput => this.setState({levelUpNote: levelUpNoteInput})}>
                </TextInput>
                <Button title="Save note"
                        onPress={this._saveLevelUpNote.bind(this)}>
                </Button>
            </View>
        )
    }
}


const mapStateToProps = state => ({})
export default connect(mapStateToProps)(LevelUpScreen);
