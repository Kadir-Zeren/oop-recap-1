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
//   getDetails: function () {
//     // return this;
//     // return this.brand + " " + this.model + " " + this.year;
//     return this.startEngine();
//   },
//   arrowFunc: () => {
//     return this;
//   },
// };

// // console.log(Car.getDetails());
// console.log(Car.arrowFunc());

// const testArray = ["value0", "value1", "value2", "value3"];

// const var0 = testArray[0];

// const [firstItem, secondItem] = testArray;
// console.log(firstItem, secondItem);

// const [first, second, third, ...others] = testArray;
// console.log(first, second, third, others);

// const newArr = [...testArray, "new-value", "new-value2"];
// console.log(newArr);

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
};

const { year: modelYear, model: newName, brand, ...otherItems } = Car;

console.log(modelYear, newName, brand);
// console.log(otherItems);

console.log(Car);

const newObj = {
  ...Car.colors,
  newKey: "new-value",
};

console.log(newObj);

const json = JSON.stringify(Car);
console.log(typeof json, json);

const newObj2 = JSON.parse(json);
console.log(typeof newObj2, newObj2);

const arr = Object.entries(Car);

console.log(arr);

const arr2 = Object.values(Car);
console.log(arr2);

const arr3 = Object.keys(Car);
console.log(arr3);
