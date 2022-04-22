const ratingSection = document.getElementsByClassName("rating-container")[0];
const thanksSection = document.getElementsByClassName("thanks-container")[0];
const ul = document.getElementsByClassName("ratings")[0];
const rating = document.getElementsByClassName("rating-obtained")[0];

// Hiding the thanks section
thanksSection.classList.add("hide");

ul.addEventListener("click", function (e) {
  // Check if the element is a LI
  if (e.target.tagName === "LI") {
    rating.innerText = e.target.innerText;
  }
});
