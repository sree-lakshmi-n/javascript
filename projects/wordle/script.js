// Word of the day
const { wordoftheday } = require(`./wordoftheday`);
console.log(wordoftheday);

const gameArea = document.querySelector("#gamearea");
const keyboardArea = document.querySelector("#keyboard");
const messageDisplay = document.querySelector("#message");
// Shorthand function for getElementById function
const _ = (selector) => {
  return document.getElementById(selector);
};
// Global variables
let currentRow = 0;
let currentCol = 0;
let isGameOver = false;
