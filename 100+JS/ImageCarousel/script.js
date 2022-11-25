`use strict`;
const prevBtn = document.getElementsByClassName("btn-prev")[0];
const nextBtn = document.getElementsByClassName("btn-next")[0];
const image = document.getElementsByClassName("image")[0];

let count = 1;
const addCount = () => {
  count = count + 1 > 4 ? 1 : count + 1;
  return count;
};
const reduceCount = () => {
  count = count - 1 < 1 ? 4 : count - 1;
  return count;
};
prevBtn.addEventListener("click", () => {
  image.src = `./images/image-${reduceCount()}.jpeg`;
});
nextBtn.addEventListener("click", () => {
  image.src = `./images/image-${addCount()}.jpeg`;
});
