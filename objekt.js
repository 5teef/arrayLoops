//OBJEKT & for in

let book = {
  pages: 564,
  author: "Mustafa Quadan",
  title: "HTML",
  publisher: "King steef"
}

let magazine =  {
  title: "101 Houses",
  writers: ["Benjamin", "Mustafa", "Zooz"],
  publisher: "Bonniers"
}

function printObjectInfo(object){
  let arr = []
  for (let prop in book) {
    let value = book[prop]
    let pair = {}
    pair[prop] = value
    arr.push(pair)
  }
  return arr
}

//console.log(printObjectInfo(book))
//console.log(printObjectInfo(magazine))




function printObjectInfo2(object) {
  let arr = []
  for (let prop in book) {
    let value = book[prop]
    let pair = {}
    pair[prop] = value
    arr.push({
      prop: prop,
      value: value
    })
  }
  return arr
}

//console.log(printObjectInfo2(book))
console.log(printObjectInfo2(magazine))