[1,2,3,4,5] // 0-index
let a = ["A","B","C","D","E"]


/*
LOOPAR, ALLA GÖR SAMMA SAK.
*/
/*
for (let i = 0;     // körs först, tex för att sätta en variabel som innehåller index
  i<a.length;     // evaluerar om loopen ska fortsätta eller avsluta(true/false)
  i++
  ){
    //gör något
    console.log(i, a[i])

  }

  for (let i = 0; i<a.length; i++){
    //gör något
    console.log(i, a[i])
  }



  let i = 0
  while (i < a.length) {
    //gör något
    console.log(i, a[i])

    i++
}

*/

/*
Här har vi en loopar även samma som ovan,
Vi har en function som heter loop och då använder vi return istället för continue.

Return är BREAK!
*/

for (let i = 0; i < a.length; i++) {
  if(a[i] == "C") {
    continue
  }
  //console.log(i, a[i])
}

function loop(){
  for (let i = 0; i < a.length; i++) {
    if (a[i] == "C") {
      return
    }
    //console.log(i, a[i])
  }

}
loop()



for (let i = 0; i < a.length; i++) {
  // gör något.
  let value = a[i]
  console.log(i, value)
}
/*
Samma som ovan, let value OF A betyder att vi inte behöver loopa igenom nummer samt
att vi inte behöver tilldela i själva koden value = a[i]
a = array('a','b')
*/
for(let value of a){
  console.log(value)
}

/*
Ska man loopa igenom objekt så är det FOR in som gäller och inte de andra.
De andra är till för strängar och array.

*/
