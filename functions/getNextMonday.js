'use strict';

function getNextMonday() {
    let date = new Date();
    date.setDate(date.getDate() + (7 - date.getDay()) % 7 + 1);

    let nextMondayDate = date.getDate()
    let nextMondayMonth = date.getMonth()
    let nextMondayYear = date.getFullYear()
    let nextMonday = "" + nextMondayYear + nextMondayMonth + nextMondayDate;

    return nextMonday;
}

export default getNextMonday;
