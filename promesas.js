/* Estrutura genérica de una promesa
function asincrono(){
  return new Promise(function(resolve,reject){
    resolve('Todo salió bien');
    reject(new Error('No se pudo completar'));
  });
}
*/

const request=require('request');

function leer(url){
  return new Promise(function(resolve,reject){

    request(url,function(err,response){
      if (err){
        reject(err);
      }else{
        resolve(response);
      }
    });
  });
}

leer('http://codigofacilito.com')
.then(function(response){
  console.log(response);
})
.catch(function(err){
  console.log(err);
});
