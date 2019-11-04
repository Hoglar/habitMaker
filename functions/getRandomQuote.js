'use strict';
// Importing assets
import shortQuotes from '../assets/quotes.js';

// the Funcion returns one random object

export default function getRandomQuote() {
    let randomQuote = shortQuotes[Math.floor(Math.random()*shortQuotes.length)]

    return randomQuote;
}
