'use strict';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

// Import screens
import AchievementsScreen from './achievementsScreen.js';


// Importing components
import CustomHeader from '../components/customHeader.js';

const AchievementsStack = createStackNavigator({
    AchievementsScreen: AchievementsScreen
},
{
    initialRouteName: "AchievementsScreen",
    defaultNavigationOptions: {
        headerTitle: <CustomHeader />,

        headerStyle: {
            backgroundColor: '#84A1FF',
            borderBottomWidth: 2,

        }
    }
})



export default AchievementsStack;
