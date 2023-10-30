let text = " hOlA MuNdO! "
text = text.trim()
let res = text.charAt(0).toUpperCase() + text.substring(1, text.length).toLowerCase()

console.log(res)


let text2 = ' lorem ipsum dolor sit amet '

let res2 = text2.trim().split(' ').reduce((acc, cur) => {
  return acc + cur.charAt(0).toUpperCase() + cur.substring(1, cur.length).toLowerCase() + " "
}, "").trimEnd()

console.log(res2)