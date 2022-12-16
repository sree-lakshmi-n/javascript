`use strict`;
// String prototype methods
String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};
String.prototype.removeVowels = function () {
  const vowels = "AEIOUaeiou";
  return this.split("")
    .filter((e) => !vowels.includes(e))
    .join("");
};
String.prototype.titleCase = function () {
  return this.split(" ")
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join(" ");
};
String.prototype.camelCase = function () {
  return this.toLowerCase()
    .split(" ")
    .map((ch, index) =>
      index !== 0 ? ch.charAt(0).toUpperCase() + ch.slice(1) : ch
    )
    .join("");
};
String.prototype.numChars = function () {
  return this.split("").length;
};
console.log("Audi".reverse());
console.log("Postman API Platform".removeVowels());
console.log(
  "Your challenge is to build out this password generator app and get it looking as close to the design as possible.".titleCase()
);
console.log(
  "Your challenge is to build out this password generator app and get it looking as close to the design as possible.".camelCase()
);
console.log("Audi".numChars());
console.log(
  "Your challenge is to build out this password generator app and get it looking as close to the design as possible.".numChars()
);

// Array prototype methods
Array.prototype.removeTheMin = function () {
  return this.sort().shift();
};
const uniqueRandomNumsArr = (len) => {
  const randomIndices = [];
  while (randomIndices.length < len) {
    let random = Math.round(Math.random() * (len - 1));
    if (!randomIndices.includes(random)) {
      randomIndices.push(random);
    }
  }
  return randomIndices;
};
Array.prototype.shuffleArray = function () {
  const indices = uniqueRandomNumsArr(this.length);
  const shuffledArray = [];
  indices.forEach((index) => shuffledArray.push(this[index]));
  return shuffledArray;
};
Array.prototype.uniqueArray = function () {
  return [...new Set(this)];
};
Array.prototype.getValuesAtEvenIndices = function () {
  return this.filter((e, index) => {
    if (index % 2 == 0) {
      return e;
    }
  });
};
Array.prototype.square = function () {
  return this.map((e) => e * e);
};
console.log([1, 2, 1, 2, 3, 4].removeTheMin());
console.log([1, 2, 1, 2, 3, 4].shuffleArray());
console.log([1, 2, 1, 2, 3, 4].uniqueArray());
console.log([1, 2, 1, 2, 3, 4].getValuesAtEvenIndices());
console.log([1, 2, 1, 2, 3, 4].square());

// Object prototype methods
Object.prototype.size = function () {
  return Object.keys(this).length;
};
Object.prototype.getCopy = function () {
  return { ...this };
};
Object.prototype.combine = function (obj) {
  return { ...this, ...obj };
};
Object.prototype.sortAscObjKeys = function () {
  return Array.from(Object.keys(this)).sort();
};
Object.prototype.dispStringValues = function () {
  return Array.from(Object.values(this)).filter(
    (val) => typeof val == "string"
  );
};
const cars = {
  make: "Audi",
  year: 2011,
  speed: 140,
  owners: ["Aaron", "Steve"],
};
const student = {
  id: 01,
  name: "Aarthi",
  class: 10,
  subjects: ["Eng", "Math", "Science", "Social"],
};
console.log(cars.size());
const carsCopy = cars.getCopy();
console.log(carsCopy);
console.log(cars === carsCopy);
const combinedCarStudent = cars.combine(student);
console.log(combinedCarStudent);
console.log(combinedCarStudent.sortAscObjKeys());
console.log(combinedCarStudent.dispStringValues());

// Math prototype methods
Math.square = function (num) {
  return num * num;
};
Math.isInteger = function (num) {
  return Math.floor(num) === num;
};
Math.squareRoot = function (num) {
  return Math.pow(num, 0.5);
};
Math.isTriangle = function (a, b, c) {
  return a + b > c && b + c > a && c + a > b;
};
Math.getHypotenuse = function (base, height) {
  return Math.squareRoot(Math.square(base) + Math.square(height));
};

console.log(Math.square(2));
console.log(Math.isInteger(2));
console.log(Math.isInteger(2.5));
console.log(Math.squareRoot(4));
console.log(Math.isTriangle(3, 4, 5));
console.log(Math.isTriangle(3, 3, 7));
console.log(Math.getHypotenuse(3, 4));
console.log(Math.getHypotenuse(3, 3));
