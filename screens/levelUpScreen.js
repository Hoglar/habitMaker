'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';


class LevelUpScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Hello! Achiver
                </Text>
            </View>
        )
    }
}


const mapStateToProps = state => ({
    goodHabits: state.goodHabits,
    badHabits: state.badHabits
})
export default connect(mapStateToProps)(LevelUpScreen);
