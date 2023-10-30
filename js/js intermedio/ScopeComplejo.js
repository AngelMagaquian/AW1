
/*Variable con scope global*/
const nombre = "Angel";
let situacion = 1

const dialogos = (sit)=>{
  /*Variable dentro del bloque de la funcion*/
  let eleccion = ""
  
  /*Funciones de scope local dentro de la funcion dialogos*/
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
  
  if(sit === 1){
    /*Variable de bloque dentro del if*/
    let mi_usuario = "Juan123"
    console.log(mi_usuario + ":")
    saludar()
    eleccion = "Saludar"
  }else{
    /*Variable de bloque dentro del if*/
    let mi_usuario = "Juan123"
    console.log(mi_usuario + ":")
    despedir()
    eleccion = "Despedir"
  }
  console.log("El usuario eligio "+ eleccion)
}


dialogos(situacion)

