const arr = []
const arr2 = []
let limite = 10

/*[0,1,1,2,3,5,8,13,21,...]*/
arr[0] = 0
arr[1] = 1

for(let i = 1; i < limite; i++){
  /* sig = ant + act*/
  arr.push(arr[i - 1] + arr[i])
}

arr2[0] = 0
arr2[1] = 1
for(let i = 1; i < limite; i++){
  /* sig = ant + act*/
  arr2[i+1] = arr2[i - 1] + arr[i]
}


console.log(arr)
console.log(arr2)

