'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import changeQuote from '../redux/actions/changeQuote.js';

// Importing components
import CustomHeader from '../components/customHeader.js';
import Habit from '../components/habit.js';

// Import actions
import addHabit from '../redux/actions/addHabit.js';

class GoodHabitScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({navigation}) => {
        return {
            headerRight: () => (
                <View style={{margin: 10}}>
                    <Button
                        onPress={() => navigation.navigate('CreateHabit')}
                        title="Create"
                        color="green"
                    />
                </View>

            )
        }
    }

    render() {
        console.log(this.props.goodHabits);

        return (
            <ScrollView style={{flex: 1, backgroundColor: "blue"}}>
                {this.props.goodHabits.map((habit, index) => (
                    <Habit key={index}/>
                ))}
            </ScrollView>
        )
    }
}



const mapStateToProps = state => ({
    goodHabits: state.goodHabits
})
export default connect(mapStateToProps)(GoodHabitScreen);
