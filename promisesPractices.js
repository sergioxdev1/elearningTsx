/* -------------------- PROMESAS EN JS -----------------
Una promesa tiene tres estados: pendiente, cumplida y rechazada.(PENDING/FULFILLED/REJECTED) La promesa que creaste en el último desafío se queda para siempre en el estado pendiente porque no agregaste una forma de completar la promesa. Los parámetros de resolución y rechazo proporcionados al argumento de promesa se utilizan para hacer esto. resolve se usa cuando quiere que su promesa tenga éxito, y rechazó cuando quiere que falle. Estos son métodos que toman un argumento, como se ve a continuación.*/

/*   ------------PRACTICE 1: ---------------------
Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.*/

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  
  let responseFromServer;

  responseFromServer ? resolve('We got the data') : reject('Data not received');
});

console.log(responseFromServer.resolve);
console.log(responseFromServer.reject);

/*Manejar una promesa cumplida (FULLFILED PROMISE) con entonces
Las promesas son más útiles cuando tiene un proceso que toma una cantidad de tiempo desconocida en su código (es decir, algo asíncrono), a menudo una solicitud del servidor. Cuando realiza una solicitud del servidor, lleva algo de tiempo y, una vez que se completa, generalmente desea hacer algo con la respuesta del servidor. Esto se puede lograr usando el método entonces. El método then se ejecuta inmediatamente después de que se cumpla su promesa con resolve. Aquí hay un ejemplo:*/
