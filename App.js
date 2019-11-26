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

// Import actions
import changeQuote from './redux/actions/changeQuote.js';
import updateStatus from './redux/actions/updateStatus.js';
import firstLoginStatusUpdate from './redux/actions/firstLoginStatusUpdate.js';

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
                        decayPoints: 0
                    }
                };
            }
            // nå har vi state, la oss se hva det ble
            store = createStore(rootReducer, preLoadedStore);

        } catch(error) {
            console.error(error)
        }
    }

    render() {

        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._getTheAppReadyAsync}
                    onFinish={() => this.setState({isReady: true})}
                    onError={console.warn}
                />
            )
        }

        // We save down here i guess
        store.dispatch(changeQuote())
        return(
            <Provider store={store}>
                <RootNavigation />
            </Provider>
        )
    }
};
