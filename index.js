// Asincronismos con callback -- Petición primero a google! --> método asíncrono
// instalar en el directorio de este proyecto la librería request
// npm install request-----
/* ---- lo que sigue es código de ejemplo
const request = require('request');
request('http://google.es', function(){
  console.log('Terminada la petición de Google');
});

console.log('Voy después, en la ejecución del código, de la petición a Google');
----- Hasta aquí tramo de código del ejemplo de uso de callback con librería request */


//--- Aquí comienza otro tramo de código con librería request-promise, para instalar en directorio proyecto;
// npm install request-promise
//--- uso de promesas

const rp=require('request-promise');
/* Promesa, que puede estar:
-fullfiled -- cumplida
-rejected -- rechazada
-pending -- Pendiente
-setled -- completada, tanto cumplida como rechazada
*/
rp('http://google.es')
  .then(function(html)){
    console.log('Terminada la petición a Google');
  }).catch(function(err)){
    console.log(err);
  })
