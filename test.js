'use strict';
var seconds = Math.floor(Date.now() / 1000)
console.log(seconds)
const habit = {
    // Title must be typed out
    title: "Title of the habit",
    // description may be optional? must be written.
    description: "Explanation of the habit",
    // needs to be drop down selector
    updateFrequens: "1 - 7",
    weekCounter: 1,
    timeOfCreation: Date.now(),
    lastUpdated: "datoen sist denne ble opdatert",
    level: 1,
    difficulity: "number that modify decay rate",
    pointsNeededToLevel: "number",
    points: ""

}
