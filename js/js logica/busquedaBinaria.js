const vec = [1,2,3,4,5,6,7,8,9,10]
const vec2 = []

for(let i = 0; i < 1000; i++){
  vec2.push(i+1)
}
const binarySearch = (arr, val) => {
  let left = 0
  let right = arr.length -1
  let mid = 0
  let contador = 0;
  while(left <= right){
    mid = Math.floor((left + right) / 2)
    contador++
    console.log('vueltas: ', contador)
   
    if(arr[mid] == val){
      return mid
    }else if(arr[mid] < val){
      left = mid +1
    }else{
      right = mid -1
    }
  }
  
  return -1
}

console.log(binarySearch(vec2, 345))
