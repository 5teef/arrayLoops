let numbers = [1, 5, 67, 14, 34, 21, 110, 7, 9, 28, 44, 23, 12, 10, 63, 102];
let value = 0;
//Addera ihop alla nummrena i arrayen och returnera summan

function addSumArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    // gör något.
    value += numbers[i]
  }
  console.log(value)
}

//addSumArray(numbers);


//Räkna ut medelvärdet av alla nummer i arrayen och skriv ut det.
function medelVärde(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    value += numbers[i]
  }
  console.log(value / numbers.length)
}

//medelVärde(numbers);

//LOOP BAKLÄNGES.
function test(numbers) {
  for (let i = numbers.length; i > 0; i--) {
    value = numbers[i]
    if (value > numbers[i - 1]) {

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
function minstaVärdet(numbers) {
  let minsta = Math.min(...numbers)
  console.log(minsta)
}

//minstaVärdet(numbers);


//Leta efter ett specifikt värde i arrayen och skriv ut indexpositionen som den finns på.
function letaArray(numbers) {
  let find = numbers.indexOf(110);

  console.log(find);

}

//letaArray(numbers);

//För in fyra stycken nya nummer i början av arrayen och skriv ut den.

function läggTill(numbers) {
  let array = numbers;

  let value = array.unshift(1, 2, 3)
  console.log(array)
}

//läggTill(numbers)

//Ta bort tre nummer ifrån mitten av arrayen och skriv ut den.
function mitten(numbers) {
  let halva = Math.floor(numbers.length / 2);
  let array = numbers.splice(halva, 3, 1, 2, 3);

  console.log(numbers);
}

mitten(numbers);