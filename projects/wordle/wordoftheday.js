const { wordle_words } = require(`${__dirname}/csvToArray.js`);

// the date when game began
// In original wordle, it is 19th of June 2021 (set by author)
const gameBegin = new Date("29 Mar 2022").setHours(0, 0, 0, 0);
// today's date
let today = new Date();

/* In JavaScript, the Date object is represented by a number of milliseconds since 1 January 1970, 00:00:00 UTC, with leap seconds ignored. Dividing it by the number 864e5 and rounding of it. 864e5 is the same as 86400000 or 1000*60*60*24 and represents 24 hours or a day. */

// Finding difference between today and beginning date.
const dateIndex = (beginning, date) =>
  Math.round((date.setHours(0, 0, 0, 0) - beginning) / 864e5);

// Choosing the word of the day by calculating remainder with wordleWords array length. Exporting wordle.
exports.wordoftheday =
  wordle_words[dateIndex(gameBegin, today) % wordle_words.length];
