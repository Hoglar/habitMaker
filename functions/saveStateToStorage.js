'use strict';
import {AsyncStorage} from 'react-native';
import store from '../redux/store/store.js';


let saveStateToStorage = async () => {
    
    try {
        await AsyncStorage.setItem("habitMakerStore", JSON.stringify(store.getState()))
        console.log("We have saved!")
    } catch(error) {
        console.error(error)
    }
}

export default saveStateToStorage;
