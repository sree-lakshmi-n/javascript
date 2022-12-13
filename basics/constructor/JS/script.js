// // Constructor functions and new keyboard

// const Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
//   // this.calcAge = function () {
//   //   return 2022 - this.birthYear;
//   // };
// };
// Person.prototype.calcAge = function () {
//   return 2022 - this.birthYear;
// };
// const sree = new Person("Sree", 1972);
// console.log(sree);
// console.log(sree.calcAge());
// console.log(sree instanceof Person);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// const myCar = new Car("Safari", 120);
// Car.prototype.accelerate = function () {
//   if (this.speed >= 140) return "Overspeeding";
//   this.speed += 10;
//   return this.speed;
// };
// Car.prototype.break = function () {
//   this.speed -= 5;
//   return this.speed;
// };

// console.log(myCar.accelerate());
// console.log(myCar.break());
// console.log(myCar.accelerate());
// console.log(myCar.accelerate());
// console.log(myCar.accelerate());

// class Cars {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//     this.unit = "km/hr";
//   }
//   accelerate = function () {
//     if (this.speed >= 140) return "Overspeeding";
//     this.speed += 10;
//     return this.speed;
//   };
//   // break = function () {
//   //   this.speed -= 5;
//   //   return this.speed;
//   // };
//   get speed() {
//     return this.speed;
//   }
//   break() {
//     this.speed -= 5;
//     return this.speed;
//   }
//   get speedUS() {
//     if (this.unit.split("/")[0] === "km") {
//       return this.speed * 1000 + "m/hr";
//     }
//     return this.speed + this.unit;
//   }
//   set speedUS(speed) {
//     if (this.unit.split("/")[0] === "km") {
//       this.speed = this.speed * 1000 + speed;
//       this.unit = "m/hr";
//     } else {
//       this.speed = speed;
//     }
//   }
//   static hey() {
//     console.log(this);
//     console.log(this.speed);
//     return "Hey!";
//   }
// }
// const myCars = new Cars("Brezza", 140);
// console.log(myCars.accelerate());
// console.log(myCars.accelerate());
// console.log(myCars.break());
// console.log(myCars.accelerate());

// console.log(Cars.hey());
// console.log(myCars.hey()); // Throws 'Uncaught TypeError: myCars.hey is not a function'

class PersonCl {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    console.log(`Hi, ${this.firstName} ${this.lastName}`);
  }
}
class StudentCl extends PersonCl {
  constructor(firstName, lastName, id) {
    super(firstName, lastName);
    this.id = id;
  }
  isStipendReceived() {
    console.log(true);
  }
}
const jane = new StudentCl("Jane", "Doe", 23);
jane.greet();
jane.isStipendReceived();
