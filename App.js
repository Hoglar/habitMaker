'use strict';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux'
import {AppLoading} from 'expo';


// importing redux store
import store from './redux/store/store.js';

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


export default class App extends React.Component {

    // Lets create loading screen!
    constructor(props) {
        super(props)
        this.state = {
            isReady: false
        };
    }


    async _getTheAppReadyAsync() {
        // Hva trenger vi og gjøre. Vi må på en måte skaffe info
        // if it is first time we log inn, we should set status to something.
        if(store.getState().status.lastOnline === "") {
            store.dispatch(firstLoginStatusUpdate());
        } else {
            store.dispatch(updateStatus());
        }
        // Så må vi update status, så opdatere state.

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

        return(
            <Provider store={store}>
                <RootNavigation />
            </Provider>
        )
    }
};
