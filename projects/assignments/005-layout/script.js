`use strict`;
const collageNum = 37;
// Creating collage divs
for (let i = 0; i < collageNum; i++) {
  const ele = document.createElement("div");
  ele.className = `collage-${i + 1} collage`;
  document.body.appendChild(ele);
}

// Number of child divs for each collage
const childElements = [
  [4, 5, 10, 14],
  [1, 2, 3, 7, 12, 15, 16, 17, 34],
  [6, 13, 18, 27, 28, 29, 37],
  [8, 9, 11, 19, 20, 21, 23],
  [24, 33],
  [26, 30, 32],
  [22, 25],
  [31, 35, 36],
];

// Created child elements for each collage
childElements.forEach((ele, index) => {
  index += 2;
  ele.forEach((collage) => {
    const collageElement = document.getElementsByClassName(
      `collage-${collage}`
    )[0];
    for (let i = 0; i < index; i++) {
      const childDiv = document.createElement("div");
      childDiv.className = `collage-${collage}--${i + 1} collage-element`;
      collageElement.appendChild(childDiv);
    }
  });
});
