const { wordle_words, valid_words } = require(`${__dirname}/csvToArray.js`);

// the date when game began
// In original wordle, it is 19th of June 2021 (set by author)
const gameBegin = new Date("29 Mar 2022").setHours(0, 0, 0, 0);
