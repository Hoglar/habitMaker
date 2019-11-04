'use strict';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// importing redux store
import store from './redux/store/store.js';

// Import actions
import addHabit from './redux/actions/addHabit.js';

console.log(store.getState());
store.dispatch(addHabit({title: "Hello friendss", id: 1}));
store.dispatch(addHabit({title: "The first habit", description: "hehehe"}))
console.log(store.getState());

// screens
import GoodHabitStack from './screens/goodHabitScreen.js';
import BadHabitStack from './screens/badHabitScreen.js';
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

export default createAppContainer(MainScreenTabNavigator);
