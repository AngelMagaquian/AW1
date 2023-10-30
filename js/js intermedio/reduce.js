let arr = []
let i = 0

while(i < 10){
  arr.push(i)
  i++
}

console.log('array => ',arr)

let res = arr.reduce((acc,cur) => {
  return cur < 5 ? acc + cur : acc
}, 0)

console.log('reduce => ', res)

let acc = 0
for(let cur = 0; cur < arr.length; cur++){
  arr[cur] < 5 ? acc += arr[cur] : acc += 0
}

console.log('for => ', acc)










