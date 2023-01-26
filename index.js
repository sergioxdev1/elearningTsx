// Import stylesheets
import './style.css';

// visual sectin - Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>E-Learning Platform</h1> <p>E-Learning Platform</p>`;

//Excersices

//Add numbers only qith operators

function addNumber(a,b) {
  return (a>0 || b>0) ? a+b : "negative number"
  }
  
  console.log(addNumber(10,-2))

//ECMA6 Features - Scope Variables
var test1
function checkScope() {
  test1="hola"
  return (test1) ? "test1 change in the function" : "negative number"
  }
console.log(checkScope())

//ECMA6 Features - CONTS and how do mutation and prevent
const s = [5, 6, 7];
  //error// s = [1, 2, 3];
  s[2] = 45; //do Mutation
  console.log(s);

  let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  //Prevent Mutation Object.freeze(obj);
  obj.review = "bad";
  obj.newProp = "Test";
  console.log(obj); 
  //other example to prevent mutation on objects
  function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
      MATH_CONSTANTS.PI = 99; //generate error
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();
  //----------------------------------------//

//ECMA6 Features - arrow functions
 //-----CLASSIC
const myFunc = () => {
  const myVar = "classic func";
  return myVar;
}
 //-----ARROW
const myFunc2 = () => "arrow func";
 //-----
console.log(myFunc());
console.log(myFunc2());
 //-----CLASSIC
var myConcatClassic = function(arr1, arr2) {
  return arr1.concat(arr2);
};
 //-----ARROW
const myConcat = (arr1, arr2) => arr1.concat(arr2);
 //-----
console.log(myConcat([1, 2], [3, 4, 5]));
console.log(myConcatClassic([1, 2], [3, 4, 5]));