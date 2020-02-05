'use strict';

function getPresentableTodayDate() {

    let date = new Date();
    let todayDate = date.getDate()
    let todayMonth = date.getMonth()
    let todayYear = date.getFullYear()
    let today = "" + todayDate + "-" + todayMonth + "-" + todayYear
    return today;
}

export default getPresentableTodayDate;
