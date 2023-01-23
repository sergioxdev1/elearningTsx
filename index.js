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