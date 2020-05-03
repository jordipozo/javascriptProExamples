function calcular(){
  return new  Promise((resolve,reject)=>{
    setTimeout(resolve,400,5);
  })
}

function segundoCalculo(numero){
  console.log(numero);
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,200,'segunda promesa');
  })
}

calcular().then(segundoCalculo).then(console.log); //primero se ejecuta la primera promesa, tomando su resultado ('5') y se usa
                                                   //como parámetro de la segunda promesa, que se ejecuta al terminar la primera
                                                   // en el tiempo especificado como 2do. parametro del setTimeout. Siempre, en
                                                   //este ejemplo, se pasa la funcion (sin el parentesis)
