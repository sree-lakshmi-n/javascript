`use strict`;
const root = document.querySelector(":root");
const counter = document.getElementsByClassName("counter-display")[0];
const lowerCount = document.getElementsByClassName("lower-count")[0];
const addCount = document.getElementsByClassName("add-count")[0];

lowerCount.addEventListener("click", () => {
  counter.textContent = +counter.textContent - 1;
  changeCounterColor();
});
addCount.addEventListener("click", () => {
  counter.textContent = +counter.textContent + 1;
  changeCounterColor();
});
const changeCounterColor = () => {
  if (+counter.textContent >= 0) {
    // getting css variables in js
    counter.style.color = getComputedStyle(root).getPropertyValue("--green");
  } else {
    counter.style.color = getComputedStyle(root).getPropertyValue("--red");
  }
};
