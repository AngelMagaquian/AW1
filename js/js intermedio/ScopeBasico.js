
/*Variable con scope global*/
const nombre = "Angel";

const saludar = ()=>{
  /*Variable local dentro de la funcion saludar*/
  let dialogo = "Hola, ¿Como estas? ";
  console.log(dialogo + nombre);
}


const despedir = ()=>{
   /*Variable local dentro de la funcion despedir*/
  let dialogo = "Hasta luego! ";
  console.log(dialogo +  nombre);
}


saludar()
despedir()

