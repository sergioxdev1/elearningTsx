//Encontrar caracteres en cadenas por medio de experesiones regulares
//METODO TEST()
export default function ejercicios01to05(){
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log("result: "+result);}

let petString = "James has a pet cat.";
let petRegex = /cat|dog|bird|fish/; // Cambia esta línea
let result2 = petRegex.test(petString);
console.log("result2: "+result2);