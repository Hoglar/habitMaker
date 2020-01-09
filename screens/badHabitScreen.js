'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import changeQuote from '../redux/actions/changeQuote.js';

// Importing components
import CustomHeader from '../components/customHeader.js';
import Habit from '../components/habit.js';


class BadHabitScreen extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1}}>
                    {this.props.badHabits.map((habit, index) => (
                        <Habit  key={index}
                                index={index}
                                goodOrBad="badHabits"
                                habit={habit}
                                navigation={this.props.navigation}
                                dispatch={this.props.dispatch}/>
                    ))}
                </ScrollView>
                <View style={{margin: 5, borderWidth: 2, backgroundColor: "green"}}>
                    <Button
                        onPress={() => this.props.navigation.navigate('CreateHabit', {
                            goodOrBad: "bad"
                        })}
                        title="Create habit"
                        color="green"
                    />
                </View>
            </View>

        )
    }
}


const mapStateToProps = state => ({
    badHabits: state.badHabits
})
export default connect(mapStateToProps)(BadHabitScreen);
