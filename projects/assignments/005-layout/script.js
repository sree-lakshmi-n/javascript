`use strict`;
const collageNum = 37;
// Creating collage containers
for (let i = 0; i < collageNum; i++) {
  const container = document.createElement("div");
  container.className = `container-${i + 1} container`;
  document.body.appendChild = container;
}
// Creating collage divs and labels

for (let i = 0; i < collageNum; i++) {
  const ele = document.createElement("div");
  const label = document.createElement("span");
  ele.className = `collage-${i + 1} collage`;
  label.className = `label-${i + 1} label`;
  label.textContent = `Collage ${i + 1}`;
  document.body.appendChild(ele);
  document.body.appendChild(label);
}

// Arranging the collage numbers according to the number of child divs they have
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
