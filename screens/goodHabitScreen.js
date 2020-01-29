'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import changeQuote from '../redux/actions/changeQuote.js';

// Importing components
import CustomHeader from '../components/customHeader.js';
import Habit from '../components/habit.js';

// Import actions

class GoodHabitScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        //this.props.dispatch(addHabit({title: "Hehehehehe"}))

        return (
            <View style={{flex: 1, backgroundColor: "#5C8369"}}>
                <ScrollView style={{flex: 1}}>
                    {this.props.goodHabits.map((habit, index) => (
                        <Habit  key={index}
                                index={index}
                                goodOrBad="goodHabits"
                                habit={habit}
                                navigation={this.props.navigation}
                                dispatch={this.props.dispatch}/>
                    ))}
                </ScrollView>
                <View style={{margin: 5, borderWidth: 2, backgroundColor: "green"}}>
                    <Button
                        onPress={() => this.props.navigation.navigate('CreateHabit', {
                            goodOrBad: "good"
                        })}
                        title="Create habit"
                        color="#4A6352"
                    />
                </View>
            </View>
        )
    }
}


const mapStateToProps = state => ({
    goodHabits: state.goodHabits
})
export default connect(mapStateToProps)(GoodHabitScreen);
