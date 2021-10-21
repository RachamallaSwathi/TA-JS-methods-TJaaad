// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];


/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.
Clone the array before using sort method: [...arr]
*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(' '));
// - Add two new words in the strings array "called" and "sentance"
let tempString=[...strings];
let secondString=[...tempString];
strings.push('called');
strings.push('sentence');
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(' '));

// - Remove the first word in the array (strings)
strings.shift();
console.log(strings);
// - Find all the words that contain 'is' use string method 'includes'
let is =tempString.filter(str=>str.includes('is'));
console.log(is);
// - Find all the words that contain 'is' use string method 'indexOf'

let is2 =tempString.filter(str=>str.indexOf('is')!==-1);
console.log(is2);


-// Check if all the numbers in numbers array are divisible by three use array method (every)


console.log(numbers.every(num=>num%3===0));
// -  Sort Array from smallest to largest
let tempNumbers=[...numbers];
let secondtempNumber=[...numbers ];
console.log(numbers.sort((a,b)=>a-b))
// - Remove the last word in strings
tempString.pop()
// - Find largest number in numbers
console.log(numbers.find(num=>num===numbers[numbers.length-1]));
// - Find longest string in strings
console.log (strings.sort((a,b)=>a.length-b.length).pop());
// - Find all the even numbers
console.log(numbers.filter(num=>num%2===0));
// - Find all the odd numbers
console.log(numbers.filter(num=>num%2!==0));
// - Place a new word at the start of the array use (unshift)
strings.unshift('Asvindra');
//- Make a subset of numbers array [18,9,7,11]

console.log(tempNumbers);
console.log(tempNumbers.slice(3,7));
// - Make a subset of strings array ['a','collection']
console.log(tempString.slice(2,4));
// - Replace 12 & 18 with 1221 and 1881
console.log(secondtempNumber);
secondtempNumber.splice(1,1,1221);
secondtempNumber.splice(3,3,1881);
console.log(secondtempNumber);
// - Replace words in strings array with the length of the word
let strlen= secondString.map(str=>str.length);

 console.log(strlen);
// - Find the sum of the length of words using above question

console.log(strlen.reduce((acc,num)=>{
  acc=acc+num;
return acc;}));
// - Customers Array
 var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
//- Find all customers whose firstname starts with 'J'
console.log(customers.filter(str=>str.firstname.startsWith('J')));
// - Create new array with only first name
console.log(customers.map(str=>str.firstname));
// - Create new array with all the full names (ex: "Joe Blogs")
let names= customers.map(str=>str.firstname +" "+ str.lastname);
// - Sort the array created above alphabetically
console.log(names.sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.
console.log(customers.filter(str=>{
  if( str.firstname.includes('a')||
      str.firstname.includes('e')||
      str.firstname.includes('i')||
      str.firstname.includes('o')||
      str.firstname.includes('u'))
    {
      return true;
    }
    else{
      return false;
    }
  }));
    