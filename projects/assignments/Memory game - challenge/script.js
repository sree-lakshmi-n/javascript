let cardArray = [
  { name: "fries", img: "fries.png" },
  { name: "cheeseburger", img: "cheeseburger.jpeg" },
  { name: "hotdog", img: "hotdog.jpeg" },
  { name: "ice-cream", img: "ice-cream.jpeg" },
  { name: "milkshake", img: "milkshake.jpeg" },
  { name: "pizza", img: "pizza.jpeg" },
  // Create a array of object literals of the images to be shown like the above
];

//define variables and get DOM element

let grid = document.querySelector(".grid");
let scoreBoard = document.querySelector(".scoreBoard");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let clickBoard = document.querySelector(".clickBoard");
let imgs;
let cardsId = [];
let cardsSelected = [];
let cardsWon = 0;
let clicks = 0;

// Starter Method call

document.addEventListener("DOMContentLoaded", function () {
  //define functions
  createBoard(grid, cardArray);
  arrangeCard();
  playAgain.addEventListener("click", replay);

  //add a click function for images

  imgs = document.querySelectorAll("img");
  Array.from(imgs).forEach((img) => img.addEventListener("click", flipCard));
});

//createBoard function
function createBoard(grid, array) {
  popup.style.display = "none";
  array.forEach((arr, index) => {
    let img = document.createElement("img");
    img.setAttribute("src", "blank.png");
    img.setAttribute("data-id", index);
    grid.appendChild(img);
  });
}

// Shuffling an array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

// arrangeCard function

function arrangeCard() {
  //arrange the cards in a shuffled order
  imgs = document.querySelectorAll(".grid img");
  const randomIndexArray = Array.from({ length: imgs.length }, (x, i) => i);
  shuffleArray(randomIndexArray);
  imgs.forEach((card, index) => {
    card.style.order = randomIndexArray[index];
  });
}

// flip Card function

function flipCard() {
  let selected = this.dataset.id;
  cardsSelected.push(cardArray[selected].name);
  cardsId.push(selected);
  this.classList.add("flip");
  this.setAttribute("src", cardArray[selected].img);
  if (cardsId.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

// checkForMatch function

function checkForMatch() {
  //your code
}

// checkWon function
function checkWon() {
  //your code
}

//replay function
function replay() {
  arrangeCard();
  grid.innerHTML = "";
  createBoard(grid, cardArray);
  cardsWon = 0;
  clicks = 0;
  clickBoard.innerHTML = 0;
  scoreBoard.innerHTML = 0;
  popup.style.display = "none";
}
