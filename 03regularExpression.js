//Encontrar caracteres en cadenas por medio de experesiones regulares
//METODO TEST()

export default function ejercicios01to05(){

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log("result: "+result);

let petString = "James has a pet cat.";
let petRegex = /cat|dog|bird|fish/; // Cambia esta línea
let result2 = petRegex.test(petString);
console.log("result2: "+result2);

let myString2 = "freeCodeCamp";
let fccRegex = /FREECODECAMP/; // Sin el flag "i" para ignorar case sensitive
let result3 = fccRegex.test(myString2);
console.log("result3: "+result3);

fccRegex = /FREECODECAMP/i;// Con el flag "i" 
result3 = fccRegex.test(myString2);
console.log("result3: "+result3);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Encuentra esta palabra en la frase
let result4 = extractStr.match(codingRegex);
console.log("result4: "+result4);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Extraer la palabra la veces que aparezca sin importar su capitalizacion
let result5 = twinkleStar.match(starRegex);
console.log("result5: "+result5);

let exampleStr2 = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Encuentra cualquier texto qte tenga "un"
let result6 = unRegex.test(exampleStr2);
console.log("result6: "+result6);

/* (7)
Usa una clase de caracteres con las vocales (a, e, i, o u) en tu expresión regular vowelRegex para encontrar todas las vocales en la cadena quoteSample.
--
Nota: Asegúrate de hacer coincidir tanto las vocales mayúsculas como minúsculas.
*/
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result7 = quoteSample.match(vowelRegex);
console.log("result7: "+result7);

}