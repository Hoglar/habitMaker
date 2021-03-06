'use strict';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux'
import {AppLoading} from 'expo';
import { createStore } from "redux";

// importing reducer
import rootReducer from './redux/reducers/rootReducer.js';

// Importing functions
import saveStateToStorage from './functions/saveStateToStorage.js';
import loadStateFromStorage from './functions/loadStateFromStorage.js';
import getNextMonday from './functions/getNextMonday.js';
import getTodayDate from './functions/getTodayDate.js';

// Import actions
import changeQuote from './redux/actions/changeQuote.js';
import updateStatus from './redux/actions/updateStatus.js';
import decayHabitpointsOnStart from './redux/actions/decayHabitpointsOnStart.js';
import resetWeeklyCounter from './redux/actions/resetWeeklyCounter.js';
// screens
import GoodHabitStack from './screens/goodHabitStack.js';
import BadHabitStack from './screens/badHabitStack.js';
import AchievementsStack from './screens/achievementsStack.js';

// We start the app in the Good habit screen. and with a press at bottom
// we get to the bad habits.
const MainScreenTabNavigator = createBottomTabNavigator({
    GoodHabits: {
        screen: GoodHabitStack,
        navigationOptions: {
            tabBarLabel: "Good",
        },
    },
    BadHabits: {
        screen: BadHabitStack,
        navigationOptions: {
            tabBarLabel: "Bad"
        }
    },
    Achievements: AchievementsStack
},
{
    initialRouteName: "GoodHabits",
    tabBarOptions: {
        activeBackgroundColor: "#B39C7E",
        style: {
            borderTopWidth: 1,
            borderTopColor: "black",
            backgroundColor: "#877864",
        },
        tabStyle: {
            borderWidth: 1
        },
        labelStyle: {
            fontSize: 16,
            color: "black",

        }
    }
})

let RootNavigation = createAppContainer(MainScreenTabNavigator);

let store;

export default class App extends React.Component {

    // Lets create loading screen!
    constructor(props) {
        super(props)
        this.state = {
            isReady: false
        };
    }

    async _getTheAppReadyAsync() {
        // We create the app in here, that should be the first thing we do.
        // First we load
        try {
            let preLoadedStore = await loadStateFromStorage();
            if (preLoadedStore === null) {
                // We create store from scratch

                preLoadedStore = {
                    goodHabits: [],
                    badHabits: [],
                    quote: {},
                    status: {
                        lastOnline: Date.now(),
                        decayPoints: 0,
                        nextWeeklyCounterReset: getNextMonday()
                    },
                    achievements: []
                };
            }
            store = createStore(rootReducer, preLoadedStore);

            // Store is created, now we need to update status.
            store.dispatch(updateStatus());
            // And we are ready!
            // Now we must degrade points in the habits.

            // Need to build action for this.
            store.dispatch(changeQuote())
            store.subscribe(async () => {
                await saveStateToStorage(store.getState())
            })
            store.dispatch(decayHabitpointsOnStart(store.getState().status.decayPoints));
            // We check if today is the next monday where we get more pints!
            if(store.getState().status.nextWeeklyCounterReset <= getTodayDate()) {
                store.dispatch(resetWeeklyCounter());
            }
        } catch(error) {
            console.error(error, "Wee goot an error here in APP Loading!")
        }
    }

    render() {

        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._getTheAppReadyAsync.bind(this)}
                    onFinish={() => this.setState({isReady: true})}
                    onError={console.warn}
                />
            )
        }

        return(
            <Provider store={store}>
                <RootNavigation />
            </Provider>
        )
    }
};
