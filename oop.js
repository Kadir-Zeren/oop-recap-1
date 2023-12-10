"use strict";

const exampleObject = {
  propertyName: "value",
  methodName: function () {
    return "this is method";
  },
};

// console.log(exampleObject.propertyName);
// console.log(exampleObject.methodName());

// const Car = {
//   brand: "Ford",
//   model: "Mustang",
//   year: 1967,
//   isAutoGear: true,
//   colors: ["white", "red"],
//   details: {
//     color: "red",
//     color2: "white",
//     engineSize: 4900,
//   },
//   startEngine: function () {
//     return "Motor çalıştı";
//   },
// };

// console.log(Car.brand);
// console.log(Car.colors);
// console.log(Car.colors[0]);
// console.log(Car.details);
// console.log(Car.details.engineSize);
// console.log(Car.startEngine());

// console.log(Car["brand"]);
// console.log(Car.details["engineSize"]);
// console.log(Car["details"]["engineSize"]);
// console.log(Car["startEngine"]());

const Car = {
  brand: "Ford",
  model: "Mustang",
  year: 1967,
  isAutoGear: true,
  colors: ["white", "red"],
  details: {
    color: "red",
    color2: "white",
    engineSize: 4900,
  },
  startEngine: function () {
    return "Motor çalıştı";
  },
  getDetails: function () {
    // return this;
    // return this.brand + " " + this.model + " " + this.year;
    return this.startEngine();
  },
  arrowFunc: () => {
    return this;
  },
};

// console.log(Car.getDetails());
console.log(Car.arrowFunc());
