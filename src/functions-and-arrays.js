// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if(num1 > num2){
    return `${num1} is the greater number.`
  } else if (num2 > num1){
    return `${num2} is the greater number. `
  } 
  else{ return `${num2} and ${num1} are both equal.`}
  }
  console.log( maxOfTwoNumbers(1,5));
// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  if(!words.length){
    return null}
  let longestWord= "";
  
  for(let i=0; i<words.length; i++){
    if(longestWord.length < words[i].length){
      longestWord=words[i];
    }
  }
  return longestWord;  
  }
  console.log(findLongestWord(words));

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if(!numbers.length){
    return 0
  }
  let sum=0;
  
  for (let i=0; i < numbers.length; i++) {
   sum += numbers[i]
  }
  return sum;
}
console.log(sumNumbers(numbers));




// Iteration #3.1 Bonus:




// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  if(!numbersAvg.length){
    return null}

  let average=0;

  for (let i=0; i < numbersAvg.length; i++) {
  
   average += numbersAvg[i] 
  }
  return average / numbersAvg.length;
}
console.log(averageNumbers(numbersAvg));

//-----------------------------------------------------------
// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  if(!wordsArr.length){
    return null
  }
  let avgLength= 0;
  for (i=0; i<wordsArr.length; i++){
avgLength += wordsArr[i].length
  }
  return avgLength / wordsArr.length
 }
console.log(averageWordLength(wordsArr));
// Bonus - Iteration #4.1
// function avg() {}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(wordsUnique) {
if(!wordsUnique.length){
  return null;
}
let uniqueArr=[];
for (i=0; i<wordsUnique.length; i++){
  if(uniqueArr.indexOf(wordsUnique[i])=== -1){
    uniqueArr.push(wordsUnique[i])
  }
}
return uniqueArr;
}
console.log(uniquifyArray(wordsUnique));


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind,foundWord) {
  if(!wordsFind.length){
    return null;
  }
for(let i=0; i<wordsFind.length; i++){
  if( wordsFind.includes(foundWord)) {
    return true;
  } else if( !wordsFind.includes(foundWord)) {
    return false;
  } else if( wordsFind.includes(foundWord)){
    return true;
  }
}
}

console.log(doesWordExist(wordsFind, 'truth'));


// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimes(wordsCount, word) {
  if(!wordsCount){
    return null
  }
  let wordCount = [];
  for (let i = 0; i < wordsCount.length; i++) {
 if (wordsCount[i] === word) {
      wordCount.push(wordsCount[i]);
    }
  }
  return wordCount.length;
}
console.log(howManyTimes(wordsCount, 'matter'))