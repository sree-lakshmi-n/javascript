`use strict`;
const userInput = document.getElementsByClassName("message")[0];
const submitBtn = document.getElementsByClassName("submit")[0];
const lastMsgContainer = document.getElementsByClassName(
  "last-message-container"
)[0];

lastMsgContainer.style.display = "none";

// Adding the last message in last message container on clicking submit
submitBtn.addEventListener("click", () => {
  if (userInput.value.length > 0) {
    lastMsgContainer.style.display = "block";
    const lastMsg = document.createElement("p");
    lastMsg.setAttribute("class", "last-message");
    lastMsg.textContent = userInput.value;
    userInput.value = ""; // resetting input value
    removePrevMsgs();
    lastMsgContainer.appendChild(lastMsg);
  }
});

// Remove previous messages
const removePrevMsgs = () => {
  const lastMsg = document.getElementsByClassName("last-message");
  if (lastMsg) {
    Array.from(lastMsg).forEach((e) => e.remove());
  }
};
