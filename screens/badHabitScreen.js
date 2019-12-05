'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import changeQuote from '../redux/actions/changeQuote.js';

// Importing components
import CustomHeader from '../components/customHeader.js';
import Habit from '../components/habit.js';


class BadHabitScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerRight: () => (
                <View style={{margin: 10}}>
                    <Button
                        onPress={() => navigation.navigate('CreateHabit', {
                            goodOrBad: "bad"
                        })}
                        title="Create"
                        color="green"
                    />
                </View>

            )
        }
    }

    render() {
        return (
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
        )
    }
}


const mapStateToProps = state => ({
    badHabits: state.badHabits
})
export default connect(mapStateToProps)(BadHabitScreen);
