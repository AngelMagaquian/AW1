/*Funcion normal o funcion declarada*/

let res_1 = suma(0,3)
console.log(res_1)

function suma(a,b){
  if(a > 0 && b > 0){
    return a+b
  }
  return 'No se puede sumar'
}

/*
-No importa si se llama antes o despues de ser declarada la funcion
*/


/*Expresion de funcion o anonimas*/

const resta = function(a,b){
  return a - b
}
let res_2 = resta(9,5)
console.log(res_2)

/*
-Pueden ser pasadas como argumentos a otras funciones
-Esta limitada por su scope al lugar que se declara
*/


/*Arrow functions o funciones felchas*/
const multiplicar = (a,b) => {
  return a * b
}

let res_3 = multiplicar(2,5)
console.log(res_3)

/*
-Son funciones mas simples y se suelen usar para resolver problemas cortos
-Pueden ser pasadas como argumentos a otras funciones
-Esta limitada por su scope al lugar que se declara
*/


function operacion(a,b,fun1,fun2){
  let aux = fun1(a,b) + fun2(a,b)
  return aux
}

let res_4 = operacion(10,5,resta, multiplicar)

console.log(res_4)






