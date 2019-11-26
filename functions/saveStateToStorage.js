'use strict';
import {AsyncStorage} from 'react-native';

// Function description
// this function needs to get the current redux store.
// It then needs to save this store as a string to local storage.


async function saveStateToStorage(currentStore) {

    try {
        await AsyncStorage.setItem("@habitMakerStore", JSON.stringify(currentStore))
        console.log("We have saved!")
    } catch(error) {
        console.error(error)
    }
}

export default saveStateToStorage;
