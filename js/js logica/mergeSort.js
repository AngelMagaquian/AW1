/*let vec = []
for (let i = 0; i < 10; i++) {
    vec.push(Math.floor(Math.random() * 10000));
}*/

const merge = (left, right) => {
 let res = []
 let indexL = 0
 let indexR = 0
 
 while(indexL < left.length && indexR < right.length){
   if(left[indexL] < right[indexR]){
     res.push(left[indexL])
     indexL++
   }else{
     res.push(right[indexR])
     indexR++
   }
 }
  return res.concat(left.slice(indexL)).concat(right.slice(indexR))
};

const mergeSort = (arr) => {
  if(arr.length <= 1){
    return arr
  }
  const pivot = Math.floor(arr.length/2)
  const left = arr.slice(0,pivot)
  const right = arr.slice(pivot)
  
  return merge(mergeSort(left),mergeSort(right))
};

const resultado = mergeSort([22, 5, 2, 7, 8, 4, 9, 1, 0]);
console.log(resultado);
