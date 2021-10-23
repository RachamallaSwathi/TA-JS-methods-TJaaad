let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(words){
  let longestWord=[...words].sort((a,b)=>a.length-b.length).pop();
  
  return longestWord;

   
}
console.log(findLongestWord(words));
// - Convert the above array "words" into an array of length of word instead of word.
console.log( words.map(word=>word.length));
// - Create a new array that only contains word with atleast one vowel.
let vowelWorld= words.filter(word=>{
  if( word.includes('a')||
      word.includes('e')||
      word.includes('i')||
      word.includes('o')||
      word.includes('u')

  ){
    return true;
  }else{
    return false;
  }});
console.log(vowelWorld);
// - Find the index of the word "rhythm"
let index= words.indexOf('rhythm');
console.log(index);
// - Create a new array that contians words not starting with vowel.
let notstrtwthVowel=words.filter(word=>{
  if( !word.startsWith('a') && !word.startsWith('e') && !word.startsWith('i') && !word.startsWith('o') && !word.startsWith('u')
     

  ){
    return true;
  }else{
    return false;
  }});
  console.log(notstrtwthVowel);
// - Create a new array that contianse words not ending with vowel
let notendwthVowel=words.filter(word=>{
  if( !word.endsWith('a') && !word.endsWith('e') && !word.endsWith('i') && !word.endsWith('o') && !word.endsWith('u')
     

  ){
    return true;
  }else{
    return false;
  }});
  console.log(notendwthVowel);
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(numbers){
  let sum=0;
  sum= numbers.reduce(((acc,cu)=>acc+cu),0);
  return sum;
}
console.log(sumArray(numbers));
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedby3=[...numbers].map(num=>num*3);
console.log(multipliedby3);
// - Create a new array that contains only even numbers
let evenArray=[...numbers].filter(num=>num%2===0);
console.log(evenArray);
// - Create  a new array that contains only odd numbers.
let oddArray=[...numbers].filter(num=>num%2!==0);
console.log(oddArray);
// - Create a new array that should have true for even number and false for odd numbers.
let evenOddArray=numbers.map(num=>{
  if(num%2==0){
    return true;
  }
  else{
    return false;
  }
})
console.log(evenOddArray);
// - Sort the above number in assending order.
console.log([...numbers].sort((a,b)=>a-b));
// - Does sort mutate the original array?
yes
// - Find the sum of the numbers in the array.
sum =[...numbers].reduce((acc,value)=>acc+value);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(words2){
  let avgLength=0;
  let totalLength= words2.reduce(((acc,va)=>acc+va.length),0);
  avgLength=totalLength/(words2.length);
  console.log(avgLength);
}
averageWordLength(strings); 