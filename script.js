// O objetivo é que a função receba um array e retorne ele caso o seu
// tamanho corresponda ao numero enviado como parametro na função
// caso contrario, um erro sera lançado

// - crie uma função que receba um array e um numero
// - S e o array não for do tipo 'object', lance um erro do tipo TypeError
// - S e o array não for do tipo 'number', lance um erro do tipo TypeError
// - Se o tamanho do array for diferente do numero enviado como parametro, lance um erro do tipo RangeError
// -utilize a declaração try...catch
// - Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

function validarArray(arr, num){
try{
  if(!arr && !num ) throw new ReferenceError("envie os parametros");
   
  if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
  
  if(typeof arr !== 'number') throw new TypeError("Number precisa ser do tipo object");
  
  if(arr.length !== num) throw new RangeError('Tamanho invalido');
    return arr;
}
catch(e){
  if(e instanceof ReferenceError) {
    console.log("Este é um ReferenceError!");
    console.log(e.message);
  } else if( e instanceof TypeError){
    console.log("Este é um TypeError!");
    console.log(e.message);
    
  } else if( e instanceof RangeError){
    console.log("Este é um RangeError!");
    console.log(e.message);
  }else{
    console.log("Tamanho invalido!" + e);
  }
 }
}

console.log(validarArray());