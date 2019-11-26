'use strict';
import {AsyncStorage} from 'react-native';
import store from '../redux/store/store.js';


let saveStateToStorage = async () => {
    try {
        await AsyncStorage.setItem("@AppStore", "hehe")
    } catch(error) {
        console.error(error)
    }
}

export default saveStateToStorage;
