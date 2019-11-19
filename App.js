'use strict';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux'

// importing redux store
import store from './redux/store/store.js';

// Import actions
import addHabit from './redux/actions/addHabit.js';
import changeQuote from './redux/actions/changeQuote.js';

// screens
import GoodHabitStack from './screens/goodHabitStack.js';
import BadHabitStack from './screens/badHabitStack.js';
import AchivementsScreen from './screens/achivementsScreen.js';

// We start the app in the Good habit screen. and with a press at bottom
// we get to the bad habits.
const MainScreenTabNavigator = createBottomTabNavigator({
    GoodHabits: GoodHabitStack,
    BadHabits: BadHabitStack,
    Achivements: AchivementsScreen
},
{
    initialRouteName: "GoodHabits",
})

let RootNavigation = createAppContainer(MainScreenTabNavigator);

export default class App extends React.Component {

    render() {
        return(
            <Provider store={store}>
                <RootNavigation />
            </Provider>
        )
    }
};
