`use strict`;
const collageNum = 37;
// Creating collage divs
for (let i = 0; i < collageNum; i++) {
  const ele = document.createElement("div");
  ele.className = `collage-${i + 1} collage`;
  document.body.appendChild(ele);
}

// Number of child divs for each collage
const twoChildren = [4, 5, 10, 14];
const threeChildren = [1, 2, 3, 7, 12, 15, 16, 17, 34];
const fourChildren = [6, 13, 18, 27, 28, 29, 37];
const fiveChildren = [8, 9, 11, 19, 20, 21, 23];
const sixChildren = [24, 33];
const sevenChildren = [26, 30, 32];
const eightChildren = [22, 25];
const nineChildren = [31, 35, 36];
