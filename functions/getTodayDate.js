'use strict';

function getTodayDate() {
    let todayDate = new Date().getDate()
    let todayMonth = new Date().getMonth()
    let todayYear = new Date().getFullYear()
    let today = "" + todayDate + todayMonth + todayYear;

    return today;
}

export default getTodayDate;
