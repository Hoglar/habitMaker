'use strict';

function getTodayDate() {

    let date = new Date();
    let todayDate = date.getDate()
    let todayMonth = date.getMonth()
    let todayYear = date.getFullYear()
    let today = "" + todayYear + todayMonth + todayDate;
    return today;
}

export default getTodayDate;
