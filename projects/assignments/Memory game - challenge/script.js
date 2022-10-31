const noOfDistinctCards = 6;
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
  if (cardArray.length === noOfDistinctCards) {
    array.push(...array);
  }
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
  if (cardsWon >= 5) {
    setTimeout(checkWon, 500);
  }
  clicks++;
  clickBoard.innerHTML = clicks;
}

// checkForMatch function

function checkForMatch() {
  //your code
  const cards = [
    document.querySelector(`[data-id="${cardsId[0]}"]`),
    document.querySelector(`[data-id="${cardsId[1]}"]`),
  ];
  if (cardsSelected[0] === cardsSelected[1]) {
    cardsWon++;
    scoreBoard.innerHTML = cardsWon;
  } else {
    console.log();

    cards.forEach((card) => {
      card.classList.remove("flip");
      card.setAttribute("src", "blank.png");
    });
  }
  cardsSelected = [];
  cardsId = [];
}

// checkWon function
function checkWon() {
  //your code
  if (cardsWon === cardArray.length / 2) {
    popup.style.display = "flex";
  }
}

//replay function
function replay() {
  grid.innerHTML = "";
  createBoard(grid, cardArray);
  arrangeCard();
  cardsWon = 0;
  clicks = 0;
  clickBoard.innerHTML = 0;
  scoreBoard.innerHTML = 0;
  popup.style.display = "none";
  imgs = document.querySelectorAll("img");
  Array.from(imgs).forEach((img) => img.addEventListener("click", flipCard));
}
