let vec = []
for (let i = 0; i < 10; i++) {
    vec.push(Math.floor(Math.random() * 10000));
}
const contador = {
  cam: 0,
  inst: 0
}
const quickSort = (arr)=>{
  contador.inst++
  if(arr.length <= 1){
    return arr
  }
  let pivot = arr[0]
  let right = []
  let left = []
 
   for(let i = 1; i < arr.length; i++){
     if(arr[i] < pivot){
       left.push(arr[i])
     }else{
       right.push(arr[i])
     }
     contador.cam++
   }
  
  return [...quickSort(left), pivot, ...quickSort(right)]
 
}

vec = quickSort(vec)
console.log(contador)
console.log(vec)