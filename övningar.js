let numbers = [1, 5, 67, 14, 34, 21, 110, 7, 9, 28, 44, 23, 12, 10, 63, 102];
let value = 0;
//Addera ihop alla nummrena i arrayen och returnera summan

function addSumArray(numbers){
  for (let i = 0; i < numbers.length; i++) {
    // gör något.
    value += numbers[i]
  }
  console.log(value)
}

//addSumArray(numbers);


//Räkna ut medelvärdet av alla nummer i arrayen och skriv ut det.
function medelVärde(numbers){
  for (let i = 0; i < numbers.length; i++) {
    value += numbers[i]
  }
console.log(value / numbers.length)
}

//medelVärde(numbers);

//LOOP BAKLÄNGES.
function test(numbers){
  for (let i = numbers.length; i > 0; i--){
    value = numbers[i]
    if (value > numbers[i-1]){
    
    }
  }

}

//Hitta det största värdet i arrayen och skriv ut det.
function störstaVärdet(numbers) {
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  console.log(max, min);
}

//störstaVärdet(numbers);

//reduce
//Hitta det minsta värdet i arrayen och skriv ut det.
function minstaVärdet(numbers){
  let minsta = Math.min(...numbers)
  console.log(minsta)
}

//minstaVärdet(numbers);


//Leta efter ett specifikt värde i arrayen och skriv ut indexpositionen som den finns på.
function letaArray(numbers){
  let find = numbers.indexOf(110);

  console.log(find);

}

//letaArray(numbers);

//För in fyra stycken nya nummer i början av arrayen och skriv ut den.

function läggTill(numbers){
  let array = numbers;

  let value = array.unshift(1,2,3)
  console.log(array)
}

//läggTill(numbers)

//Ta bort tre nummer ifrån mitten av arrayen och skriv ut den.
function mitten(numbers) {
  let halva = Math.floor(numbers.length / 2);
  let array = numbers.splice(halva, 3, 1, 2, 3); 

  console.log(numbers);
}

//mitten(numbers);

//Ta bort fyra nummer ifrån början av arrayen och för in dem i mitten av arrayen och skriv ut den.
function taBortMitten(numbers){
  let halva = Math.floor(numbers.length / 2);
  let tabort = numbers.splice(0,4);

  for (let i = 0; i < tabort.length; i++){
    value = tabort[i];
    let läggtill = numbers.splice(halva,0,value)

    halva += 1
  }

  console.log(halva);
  console.log(tabort);
  console.log(numbers)
  

}

//taBortMitten(numbers)


//Skapa en ny array som innehåller alla nummer över 18.

function nyArray16(numbers){
  let nyArray = numbers.filter(x => x > 16)
  console.log(nyArray)
}

//nyArray16(numbers)

//Skapa en ny array som bara innehåller nummer mellan x och y. x och y väljer ni själva.

function nyArrayMellan(numbers){
  x = 1
  y = 6
  let nyArray = numbers.filter(a => a > x && a < y)
  console.log(nyArray)
}

//nyArrayMellan(numbers)

function reverseArray(numbers) {
  // Kopiera arrayen med slice() för att inte ändra den ursprungliga arrayen
  let kopieradArray = numbers.slice();

  // Använd reverse() för att omvända den kopierade arrayen
  let reverse = kopieradArray.slice().reverse();

  console.log("Kopierad Array:", kopieradArray);
  console.log("Omvänd Array:", reverse);
}

//reverseArray(numbers);


//Skapa en ny array som är ursprungsarrayen sorterad i stigande ordning.
function sortASC(numbers){
  let arr = numbers.sort((a, b) => a - b)
  console.log(arr)
}

//sortASC(numbers)

let words = ["volvo", "bmw", "seat", "volkswagen", "bmw", "opel", "audi", "mercedes", "kia", "lexus", "tesla"]

function longestWord(words){
  let word = words[0]
  for (let i = 0; i < words.length; i++){
    if (word.length < words[i].length){
      word = words[i]
    }

  }
  console.log(word);
  return word;
}

//longestWord(words)

//Skriv ut den strängen i arrayen som kortast.

function shortestWord(words) {
  let word = words[0]
  for (let i = 0; i < words.length; i++) {
    if (word.length > words[i].length) {
      word = words[i];
    }
  }
  console.log(word);
  return word;
}

shortestWord(words);


//Kapitalisera alla strängar i arrayen, alltså ändra de så att alla börjar med stor bosktav istället för liten.
function kapitalisera(words){
  kapital = words.map(function(ord){
    return ord.charAt(0).toUpperCase() + ord.slice(1);
  });
  console.log(kapital);
}

//kapitalisera(words);


function reverseArray(words){
    let arrOrginal = words.slice();
    let arrReverse = arrOrginal.slice().reverse()
    console.log("Reverse"+arrReverse)
    console.log("Orginal "+arrOrginal)
}

//reverseArray(words);


//Sortera alla strängar i alfabetisk ordning.
function sorteraArray(numbers){
  let arr = numbers.sort()
  console.log(arr)

}

//sorteraArray(words);

//Ta bort alla strängar i arrayen som börjar på till exempel s.

function taBortSträngPåS(words){
  let nyArr = []
  for(let i = 0; i < words.length; i++){
    let bokstav = words[i];
    if(bokstav.charAt(0) !== "s"){
      nyArr.push(bokstav)
    }
  }
  console.log(nyArr);
  return nyArr;
}

//taBortSträngPåS(words);



// Reversera hela strängen, den strängen som var på första plats ska nu vara på sista plats.
function reverseFirst(words){
  let arr = words.slice()
  let nyarr = arr.slice().reverse()
  console.log(arr, nyarr)
}

//reverseFirst(words);


//Lägg till ett ord till varje sträng. Till exempel i mitt fall så vill jag lägga till
// “bil” till alla strängar. Så det blir “volvobil”, “saabbil” och så vidare…

function läggTillOrd(words){
  let nyArr = words.map(function (ord) {
    ord = ord += "bil"
    return ord

  })
  console.log(nyArr)
  return nyArr

}

//läggTillOrd(words)