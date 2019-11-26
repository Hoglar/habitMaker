'use strict';
import {AsyncStorage} from 'react-native';


const saveStateToStorage = async () => {

    try {
        await AsyncStorage.setItem("@habitMakerStore", "Hei")
        console.log("We have saved!")
    } catch(error) {
        console.error(error)
    }
}

export default saveStateToStorage;
