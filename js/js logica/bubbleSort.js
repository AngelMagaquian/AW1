const vec = [3,7,0,1,5,9,10,2,8]

const bubbleSort = (arr)=>{
  let aux = 0;
  let info = {
    bp:0,
    bh:0,
    cam: 0
  }
  let control = true
  for(let i = 0; i < arr.length -1; i++){
    control = false
    info.bp++
    for(let e = 0;e < arr.length -1 -i; e++ ){
      info.bh++
      if(arr[e] > arr[e+1]){
        //Operacion de intercambio de valores
        aux = arr[e]
        arr[e] = arr[e + 1]
        arr[e + 1] = aux
        info.cam++
        control = true
      }
    }
    if(!control){
      break
    }
  }
  console.log(info)
  return arr
}

console.log(bubbleSort(vec))


