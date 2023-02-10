//Encontrar caracteres en cadenas por medio de experesiones regulares
//METODO TEST()
export default function ejercicios01(){
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);}