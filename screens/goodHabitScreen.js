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

    static navigationOptions = ({navigation}) => {
        return {
            headerRight: () => (
                <View style={{margin: 10}}>
                    <Button
                        onPress={() => navigation.navigate('CreateHabit', {
                            goodOrBad: "good"
                        })}
                        title="Create"
                        color="green"
                    />
                </View>

            )
        }
    }

    render() {
        console.log(this.props.goodHabits);
        //this.props.dispatch(addHabit({title: "Hehehehehe"}))

        return (
            <ScrollView style={{flex: 1}}>
                {this.props.goodHabits.map((habit, index) => (
                    <Habit  key={index}
                            index={index}
                            goodOrBad="goodHabits"
                            title={habit.title}
                            navigation={this.props.navigation}/>
                ))}
            </ScrollView>
        )
    }
}



const mapStateToProps = state => ({
    goodHabits: state.goodHabits
})
export default connect(mapStateToProps)(GoodHabitScreen);
