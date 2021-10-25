let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopelName=persons.map(obj=>obj.name);
console.log(peopelName);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade=persons.map(obj=>obj.grade);
console.log(peopleGrade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex=persons.map(obj=>obj.sex);
console.log(peopleSex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filteredName=peopelName.filter(n=>n.startsWith('P') || n.startsWith('J'));
  
  

console.log(filteredName);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
 let filArray= peopelName.filter(l=>(l.startsWith('A')) || (l.startsWith('C'))).length;
console.log(filArray);
 //console.log(filArray.map(num=>num.length));
//Log all the filtered male ('M') in persons array
console.log(persons.filter(n=>n.sex.includes('M')));
// Log all the filtered female ('F') in persons array
let filteredFemale= persons.filter(n=>n.sex.includes('F'));
console.log(filteredFemale);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(filteredFemale.filter(n=>n.name.startsWith('C') || n.name.startsWith('J')));
// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter(num=>num%2===0));
// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find(n=>n.name.startsWith('J')));
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find(n=>n.name.startsWith('P')));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.find(n=>n.name.startsWith('J') && n.sex.startsWith('F') && n.grade>10));
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(n=>n.sex.startsWith('F'));
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(n=>n.sex.startsWith('M'));
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
let grade=persons.map(n=>n.grade).reduce((acc,val)=>
 { 
    acc=acc+val;
return acc;},0);
console.log(grade);
// Find the average grade
console.log(grade/persons.length);
// Find the average grade of male
let malegrade=malePersons.map(n=>{
  if( n.sex.startsWith('M'))
  {
    return n.grade;
  }
 }).reduce((acc,val)=>
 {
   acc=acc+val;
   return acc;
 },0);
 
 console.log(malegrade/malePersons.length);

// Find the average grade of female
let femalegrade=femalePersons.map(n=>{
  if( n.sex.startsWith('F'))
  {
    return n.grade;
  }
 }).reduce((acc,val)=>
 {
   acc=acc+val;
   return acc;
 },0);
 
 console.log(femalegrade/femalePersons.length);
// Find the highest grade
console.log(persons.map(n=>n.grade).sort((a,b)=>a-b).pop());
// Find the highest grade in male
console.log(malePersons.map(n=>n.grade).sort((a,b)=>a-b).pop());
// Find the highest grade in female
console.log(femalePersons.map(n=>n.grade).sort((a,b)=>a-b).pop());
// Find the highest grade for people whose name starts with 'J' or 'P'
 let hightestGrade= persons.filter(n=>
  {if(n.name.startsWith('J')|| n.name.startsWith('P'))
     return n.grade});
console.log(hightestGrade.map(obj=>obj.grade).sort((a,b)=>a-b).pop());
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log(peopleGrade.sort((a,b)=>a-b));
console.log(peopleGrade);//Yes It is mutated.
// Sort the peopleGrade in descending order
console.log(peopleGrade.sort((a,b)=>b-a));
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a,b)=>b-a));
// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopelName.sort());
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopelName].sort());