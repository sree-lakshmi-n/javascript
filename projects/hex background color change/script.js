`use strict`;
const hexTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
// Math.round generates random nos between 0(inclusive) and 15(exclusive)
// Math.random rounds number to nearest integer
// eg. 2.45 to 2 , 2.54 to 3

const hexSpan = document.getElementById('hexcolour');
setInterval(() => {
    const red = hexTable[Math.round(Math.random() * 15)] + hexTable[Math.round(Math.random() * 15)];
    const green = hexTable[Math.round(Math.random() * 15)] + hexTable[Math.round(Math.random() * 15)];
    const blue = hexTable[Math.round(Math.random() * 15)] + hexTable[Math.round(Math.random() * 15)];
    const hexcolour = `#${red}${green}${blue}`;
    hexSpan.innerText = hexcolour;
    document.body.style.backgroundColor = hexcolour;
}, 1000);