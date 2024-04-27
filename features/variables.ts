const apples: number = 5;
const speed: string = 'fast';

let hasName: boolean = true;

let nothing: null = null;
let nothingMuch: undefined = undefined;


// Build-in objects
let time: Date = new Date();

// Arrays
let colors: string[] = ['red', 'blue', 'green'];

let numbers: number[] = [1, 2, 4];

let truths: boolean[] = [true, true, false];

// Classes
class Car {

}

let car: Car = new Car();

// Object literal
let numObject: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function annotation
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// fix any type notation
// when function return value of type any
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates); // {x: 10, y: 20}

// console.log(coordinates.fhdjkshjkh);

const arr: string[] = ['red', 'green', 'blue'];
// let foundGreen: boolean;
let foundGreen = false;


for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'green') {
    foundGreen = true;
  }
}

const arr2: number[] = [-10, -3, 7];
let numberAboveZero: false | number;

for(let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 0) {
    numberAboveZero = arr2[i];
  }
}