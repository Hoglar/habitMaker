'use strict';
import {AsyncStorage} from 'react-native';
// Function description
// This function uses AsyncStorage to get state stored in storage.
// It need to parse this data and return it as an Object.


async function loadStateFromStorage() {
    try {
        const storeSavedAtStorage = await AsyncStorage.getItem("@habitMakerStore");
        return JSON.parse(storeSavedAtStorage);

    } catch(error) {
        console.log(" We got error in loadstage", error)
        return null
    }

}

export default loadStateFromStorage;
