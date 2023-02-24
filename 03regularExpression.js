//Encontrar caracteres en cadenas por medio de experesiones regulares
//METODO TEST()

export default function ejercicios01to05() {
  let myString = 'Hello, World!';
  let myRegex = /Hello/;
  let result = myRegex.test(myString);
  console.log('result: ' + result);

  let petString = 'James has a pet cat.';
  let petRegex = /cat|dog|bird|fish/; // Cambia esta línea
  let result2 = petRegex.test(petString);
  console.log('result2: ' + result2);

  let myString2 = 'freeCodeCamp';
  let fccRegex = /FREECODECAMP/; // Sin el flag "i" para ignorar case sensitive
  let result3 = fccRegex.test(myString2);
  console.log('result3: ' + result3);

  fccRegex = /FREECODECAMP/i; // Con el flag "i"
  result3 = fccRegex.test(myString2);
  console.log('result3: ' + result3);

  let extractStr = "Extract the word 'coding' from this string.";
  let codingRegex = /coding/; // Encuentra esta palabra en la frase
  let result4 = extractStr.match(codingRegex);
  console.log('result4: ' + result4);

  /* (5)
  Utilizando la expresión regular starRegex, encuentra y extrae ambas palabras Twinkle de la cadena twinkleStar.
  --
  Nota
  En tu expresión regular puedes utilizar múltiples banderas, como /search/gi
  */
  let twinkleStar5 = 'Twinkle, twinkle, little star';
  let starRegex5 = /Twinkle/gi;
  let result5 = twinkleStar5.match(starRegex5);
  console.log('result 5: ' + result5);

  /* (6)
  Completa la expresión regular unRegex para que coincida con las cadenas run, sun, fun, pun, nun, y bun. Tu expresión regular debe usar el carácter de comodín.
  */

  let exampleStr6 = "Let's have fun with regular expressions!";
  let unRegex6 = /.un/; 
  let result6 = unRegex6.test(exampleStr6);
  console.log('result 6: ' + result6);

  /* (7)
  Usa una clase de caracteres con las vocales (a, e, i, o u) en tu expresión regular vowelRegex para encontrar todas las vocales en la cadena quoteSample.
  --
  Nota: Asegúrate de hacer coincidir tanto las vocales mayúsculas como minúsculas.
  */
  let quoteSample7 =
    'Beware of bugs in the above code; I have only proved it correct, not tried it.';
  let vowelRegex7 = /[aeiou]/gi;
  let result7 = quoteSample7.match(vowelRegex7);
  console.log('result 7: ' + result7);

  /* (8)
  Haz coincidir todas las letras en la cadena quoteSample.
  Nota: Asegúrate de hacer coincidir tanto las letras mayúsculas como minúsculas.
  */
  let quoteSample8 = 'The quick brown fox jumps over the lazy dog.';
  let alphabetRegex8 = /[a-z]/gi;
  let result8 = quoteSample8.match(alphabetRegex8);
  console.log('result 8: ' + result8);

  /* (9)
  Crea una sola expresión regular que coincida con un rango de letras entre h y s, y un rango de números entre 2 y 6. Recuerda incluir las banderas apropiadas en la expresión regular.
  */
  let quoteSample9 = 'Blueberry 3.141592653s are delicious.';
  let myRegex9 = /[h-s2-6]/gi;
  let result9 = quoteSample9.match(myRegex9);
  console.log('result 9: ' + result9);

  /* (10)
   Crea una sola expresión regular que coincida con todos los caracteres que no son un número o una vocal. Recuerda incluir las banderas apropiadas en la expresión regular.
   */
   let quoteSample10 = "3 blind mice.";
   let myRegex10 = /[^aeiou0-9]/gi;
   let result10 = quoteSample10.match(myRegex10);
   console.log('result 10: ' + result10);

   /* (11)
    Quieres encontrar coincidencias cuando la letra s ocurre una o más veces en Mississippi. Escribe una expresión regular que utilice el signo +.
   */
    let difficultSpelling = "Mississippi";
    let myRegex = /s+/g; // Cambia esta línea
    let result = difficultSpelling.match(myRegex);
}
