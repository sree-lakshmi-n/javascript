`use strict`;
setInterval(() => {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
}, 1000);