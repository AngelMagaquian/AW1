const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present','limit'];
const arr_num = [2,5,8,3,5,6,7,12,4,5]


const productos = [
  
  {
    id: 1,
    nombre: 'A',
    precio: 123,
    categoria: 1
  },
  {
    id: 3,
    nombre: 'C',
    precio: 124,
    categoria: 1
  },
  {
    id: 2,
    nombre: 'B',
    precio: 120,
    categoria: 2
  }
]
/*const res = words.map(e=> {
  if(e.length > 6){
    return e
  }
})*/

/*
  array.metodo(elemento => elemento >= 1)
*/

/*FILTER*/
const res = words.filter(e => e === 'limit')
const res2 = arr_num.filter(e => e >= 5)
const res3 = productos.filter(e => e.categoria === 1)
console.log(res)
console.log(res2)
console.log(res3)




/*FIND*/

const res_find = words.find(e => e === 'limit')
/*EJEMPLO DE ENCADENAMIENTO
const res_find2 = productos.filter(e => e.categoria === 1).find(e => e.nombre === 'C')*/
const res_find2 = productos.find(e => e.nombre === 'C')
console.log(res_find)


/*PUSH*/

const arr_nuevo = []
for(let i = 0; i < 10; i++){
  /*arr_nuevo[i] = i + 1*/
  arr_nuevo.push(i+1)
}

console.log(arr_nuevo)
