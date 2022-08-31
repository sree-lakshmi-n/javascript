`use strict`;
const collageNum = 37;
for (let i = 0; i < collageNum; i++) {
  const ele = document.createElement("div");
  ele.className = `collage-${i + 1} collage`;
  document.body.appendChild(ele);
}
