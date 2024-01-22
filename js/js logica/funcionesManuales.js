const vec = [5,1,6,9,3,4,5,1]

//indexOf
const customIndexOf = (arr, val)=>{
  let i = 0
  
  if(arr.length == 0){return -1}
  
  while(i < arr.length && arr[i] != val){
    i++
  }
  return i >= arr.length ? -1 : i
}

console.log(customIndexOf(vec, 83))

//lastIndexOf
const customLastIndexOf = (arr, val)=>{
  let auxLastIndex = -1
  
  if(arr.length == 0){return -1}
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == val){
      auxLastIndex = i
    }
  }
  return auxLastIndex
}

console.log(customLastIndexOf(vec, 1))

//filter
const customFilter = (arr, val, func)=>{
  let auxArr = []

  for(let i = 0; i < arr.length; i++){
    if(func(arr[i], val)){
      auxArr.push(arr[i])
    }
  }
  return auxArr
}
console.log(customFilter(vec, 5, (x,y)=>x == y))
console.log(customFilter(vec, 5, (x,y)=>x != y))
console.log(customFilter(vec, 5, (x,y)=>x > y))
console.log(customFilter(vec, 5, (x,y)=>x < y))

//find
const customFind = (arr, val, func)=>{
  let i = 0
  while(i < arr.length && !(func(arr[i], val)) ){
    i++
  }
  return arr[i]
}
console.log(customFind(vec, 5, (x,y)=>x == y))
console.log(customFind(vec, 5, (x,y)=>x != y))
console.log(customFind(vec, 5, (x,y)=>x > y))
console.log(customFind(vec, 5, (x,y)=>x < y))
