// Import stylesheets
import './style.css';

// visual sectin - Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<h1>E-Learning Platform</h1>
<div>
<h3>Add numbers only with operators</h3>
<pre>function addNumber(a, b) {
  return a > 0 || b > 0 ? a + b : 'negative number';
}
</pre>
</div>
`;

//Excersices

//Add numbers only with operators

function addNumber(a, b) {
  return a > 0 || b > 0 ? a + b : 'negative number';
}

console.log(addNumber(10, -2));

//ECMA6 Features - Scope Variables
console.log('** ECMA6 Features - Scope Variables **');

var test1;
function checkScope() {
  test1 = 'hola';
  return test1 ? 'test1 change in the function' : 'negative number';
}
console.log(checkScope());

//ECMA6 Features - CONTS and how do mutation and prevent
console.log('** ECMA6 Features - CONTS and how do mutation and prevent **');

const s = [5, 6, 7];
//error// s = [1, 2, 3];
s[2] = 45; //do Mutation
console.log(s);

let obj = {
  name: 'FreeCodeCamp',
  review: 'Awesome',
};
//Prevent Mutation Object.freeze(obj);
obj.review = 'bad';
obj.newProp = 'Test';
console.log(obj);
//other example to prevent mutation on objects
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99; //generate error
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
//----------------------------------------//

//ECMA6 Features - arrow functions
console.log('** ECMA6 Features - arrow functions **');

//-----CLASSIC
const myFunc = () => {
  const myVar = 'classic func';
  return myVar;
};
//-----ARROW
const myFunc2 = () => 'arrow func';
//-----
console.log(myFunc());
console.log(myFunc2());
//-----CLASSIC
var myConcatClassic = function (arr1, arr2) {
  return arr1.concat(arr2);
};
//-----ARROW
const myConcat = (arr1, arr2) => arr1.concat(arr2);
//-----
console.log(myConcat([1, 2], [3, 4, 5]));
console.log(myConcatClassic([1, 2], [3, 4, 5]));

//ECMA6 Features - Default parameters
console.log('** ECMA6 Features - Default parameters **');

const greeting = (name = 'Anonymous') => 'Hello ' + name;

console.log(greeting('John'));
console.log(greeting());
//The console will display the strings Hello John and Hello Anonymous
//When you dont declare the parameter use the default

//Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
const increment = (number = 5, value = 1) => number + value;
console.log(increment());
console.log(increment(7, 2));

//ECMA6 Features - Rest parameters
console.log('** ECMA6 Features - Rest parameters **');

const sum = (...args) => {
  console.log('Length parameter: ' + args.length);
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 2, 3, 4, 5, 6));

//ECMA6 Features - Spread operator
console.log('** ECMA6 Features - Spread operator **');

//Copy all contents of arr1 into another array arr2 using the spread operator.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1]; // Change this line
console.log(arr2);
//--
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus);

//ECMA6 Features - Use Destructuring Assignment to Extract Values from Objects
console.log('** ECMA6 Features - Destructuring Assignment **');
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
// ------  CLASSIC PROCESS ------------------------
//const today2 = HIGH_TEMPERATURES.today;
//const tomorrow2 = HIGH_TEMPERATURES.tomorrow;
// --------- MODERN PROCESS -----------------------
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today + tomorrow);

// ------  CLASSIC PROCESS ------------------------
//const highToday = HIGH_TEMPERATURES.today;
//const highTomorrow = HIGH_TEMPERATURES.tomorrow;
// --------- MODERN PROCESS -----------------------
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log(highToday + highTomorrow);

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

//ECMA6 Features - Destructuring Assignment to Assign Vars from Nested Objects
console.log('** ECMA6 Features - Destructuring Assignment 2 **');
// ------ ECMA 5 ------------------------
//const lowToday = LOCAL_FORECAST.today.low;
//const highToday = LOCAL_FORECAST.today.high;
// ------ ECAM 6 ------------------------
const {
  today: { low: lowToday, high: highToday2 },
} = LOCAL_FORECAST;
console.log(LOCAL_FORECAST);

//ECMA6 Features - Destructuring Assignment to Assign Variables from Arrays
console.log('** ECMA6 Features - Destructuring Assignment 2 **');

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
//move the index
const [, , c, d, , e] = [1, 2, 3, 4, 5, 6];
console.log(c, d, e);
//swap values
let ax = 8,
  bx = 6;
console.log(ax, bx);
[bx, ax] = [ax, bx];
console.log(ax, bx);

//ECMA6 Features - Destructuring Assignment to Assign Variables from Arrays
console.log('** ECMA6 Features - Destructuring via REST elements **');
const [ay, by, ...arry] = [1, 2, 3, 4, 5, 7];
//arry take all values rest of the array
console.log(ay, by);
console.log(arry);

//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

//This function recive a object how paramether with max and min vars inside
const half = ({ max, min }) => (max + min) / 2.0;
console.log(half(stats));

//ECMA6 Features - Create Strings using Template Literals
console.log('** ECMA6 Features - Create Strings using Template Literals **');

const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['no-extra-semi', 'no-dup-keys'],
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // *** Better option ***
  //  "use strict";
  // change code below this line
  // const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);

  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);

//ECMA6 Features - Destructuring Assignment to Assign Variables from Arrays
console.log('** ECMA6 Features - Destructuring via REST elements **');

//CLASSIC MODE
const getMousePositionClassic = (x, y) => ({
  x: x,
  y: y,
});

//LITERAL DELCARATION MODE
const getMousePosition = (x, y) => ({ x, y });

//CLASSIC MODE
const createPersonClassic = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};
//LITERAL DELCARATION MODE
const createPerson = (name, age, gender) => {
  'use strict';
  // change code below this line
  return {
    name,
    age,
    gender,
  };
};
console.log(createPerson('keko', 12, 'male'));

//You can remove the reserved word "functions" for write more declarative and concise code.
const bicycle = {
  gear: 2,
  //setGear: function (newGear) {
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);

//ECMA6 Features - Class and constructor in JS
console.log('** ECMA6 Features - Class and constructor in JS **');

// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log('To ' + this.targetPlanet + '!');
  }
}

// Implicit constructor
class Rocket {
  launch() {
    console.log('To the moon!');
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();


//GETTERS AND SETTERS
class Thermostat{
  constructor (fahrenheit){
    this._fahrenheit = fahrenheit;
  }
  get temperature(){
    return (5 / 9) * (this._fahrenheit - 32);
  }
  set temperature(celsius){
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
