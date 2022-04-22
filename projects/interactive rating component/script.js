const ratingSection = document.getElementsByClassName("rating-container")[0];
const thanksSection = document.getElementsByClassName("thanks-container")[0];
const ul = document.getElementsByClassName("ratings")[0];
const rating = document.getElementsByClassName("rating-obtained")[0];
const submit = document.getElementsByClassName("submit-btn")[0];

// Hiding the thanks section
thanksSection.classList.add("hide");

// Removing 'active' class from all elements so that the clicked element wont remain active when another element is clicked
const removeActive = () => {
  for (let i = 0; i < ul.childElementCount; i++) {
    console.log(ul.children[i].classList.remove("active"));
  }
};

// Detects the rating chosen by user
ul.addEventListener("click", function (e) {
  // Check if the element is a LI
  if (e.target.tagName === "LI") {
    rating.innerText = e.target.innerText;
    removeActive();
    e.target.classList.add("active");
  }
});

// Detects if submit button is clicked
submit.addEventListener("click", function () {
  if (rating.innerText) {
    ratingSection.classList.add("hide");
    thanksSection.classList.remove("hide");
  }
});
