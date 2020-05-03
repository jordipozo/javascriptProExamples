let p1=new Promise((resolve,reject)=>setTimeout(resolve,500,'hola mundo'));
let p2=new Promise((resolve,reject)=>setTimeout(resolve,600,'segundo hola mundo'));
let p3= Promise.reject();
let saluda=()=>console.log('Hola a todos');

//p1.then(console.log());

/*---
p1.then(function(){
  p2.then(function(){
    saluda();
  })
})
---el bloque de código que sigue tiene el mismo resultados
--- pero es más entendible
--*/

Promise.all([p1,p2, p3]).then(resultados=>{
  saluda();
}).catch(()=>console.log('Fallo en promesa 3'));
