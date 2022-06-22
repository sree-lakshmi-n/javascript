// Requiring fs module
const fs = require("fs");

//Converting csv to arrays
const arr = (csv) => {
  return fs
    .readFileSync(csv)
    .toString() // convert Buffer to string
    .split("\n") // split string to lines
    .map((e) => e.trim()) // remove white spaces for each line
    .map((e) =>
      e
        .split(",")
        .map((e) => e.trim().substring(1, 6)) // .substring(1, 6) to trim the double quotes on either side
        .join("")
        .toUpperCase()
    ); // split each line to array
};

// Exporting Wordle words and Valid words array
exports.wordle_words = arr("Wordle_Words.csv");
exports.valid_words = arr("Valid_Words.csv");
