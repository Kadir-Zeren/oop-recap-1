"use strict";

const exampleObject = {
  propertyName: "value",
  methodName: function () {
    return "this is method";
  },
};

console.log(exampleObject.propertyName);
console.log(exampleObject.methodName());

const car = {
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
};

console.log(car.brand);
