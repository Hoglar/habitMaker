'use strict';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

// Import screens
import CreateHabitScreen from './createHabitScreen.js';
import HabitDetailScreen from './habitDetailScreen.js';

import store from '../redux/store/store.js';
import changeQuote from '../redux/actions/changeQuote.js';

store.dispatch(changeQuote());

class GoodHabitScreen extends React.Component {

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
        return (
            <View>

            </View>
        )
    }
}

function CustomHeader(title) {
    return (
        <View>
            <Text style={{
                fontSize: 17,
                fontWeight: "300",
                margin: 10,
                marginRight: 50,
                color: "#3A3F3D"
            }}>
                {title + "."}
            </Text>
        </View>
    )
};

const GoodHabitStack = createStackNavigator({
    GoodHabitsHome: GoodHabitScreen,
    CreateHabit: CreateHabitScreen,
    HabitDetail: HabitDetailScreen
},
{
    initialRouteName: "GoodHabitsHome",
    defaultNavigationOptions: {
        headerTitle: CustomHeader(store.getState().quote.text),

        headerStyle: {
            backgroundColor: '#84A1FF',

        }
    }
})

export default GoodHabitStack;
