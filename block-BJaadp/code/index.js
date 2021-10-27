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

// NOTE: Use reduce method whereever you can to solve this exercise:

let grade=persons.map(ele=>ele.grade);
console.log(grade);
let gardeMale=persons.filter(ele=>{
  if(ele.sex==='M'){
    return ele.grade;
  }
}).map(ele=>ele.grade);
console.log(gardeMale);

let gradeFemale=persons.filter(ele=>{
  if(ele.sex==='F'){
    return ele.grade;
  }
}).map(ele=>ele.grade);
console.log(gradeFemale);

// Find the average grade

let avg=grade.reduce((acc,cur)=>{return acc=acc+cur},0)/persons.length;
console.log(avg);

// Find the average grade of male

let avgMale=gardeMale.reduce((acc,cur)=>{return acc=acc+cur},0)/gardeMale.length;

console.log(avgMale);

// Find the average grade of female

let avgFemale=gradeFemale.reduce((acc,cur)=>{return acc=acc+cur},0)/gradeFemale.length;

// Find the highest grade

let hightestGrade=grade.sort((a,b)=>a-b).pop();
console.log(hightestGrade);

// Find the highest grade in male

let hightestGradeMale=gardeMale.sort((a,b)=>a-b).pop();
console.log(hightestGradeMale);

// Find the highest grade in female

let hightestGradeFemale=gradeFemale.sort((a,b)=>a-b).pop();
console.log(hightestGradeFemale);

// Find the highest grade for people whose name starts with 'J' or 'P'

let  noofperson=0;
let hightestGradeJorP=persons.filter(ele=>{
  if(ele.name.startsWith('J')|| ele.name.startsWith('P')){
    
    noofperson++;
   return ele.grade;
  }
  }).map(ele=>ele.grade).reduce((acc,cur)=>acc+cur)/noofperson;
  console.log(hightestGradeJorP);


const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let n=1;
  let fruitsObj= fruitBasket.reduce((acc,cur,i)=>{
       if(Object.keys(acc) && acc.hasOwnProperty(cur)){

        acc[cur]=acc[cur]+1;
        
        
       }else{
         n=1;
         
        acc[cur]=n;
       }
   

       
     console.log(i,acc);
    return acc;

   
 },{});
   

console.log(fruitsObj);
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
let keys= Object.keys(fruitsObj);
let values=Object.values(fruitsObj);
  let fruitsArray= keys.reduce((acc,cv)=>{
    acc=acc.concat([[cv,fruitsObj[cv]]]);
       
    return acc;

   
 },[]);
   

console.log(fruitsArray);



const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array

let dataFlat=data.reduce((acc,cur,j)=>{
  for(let i=0;i<cur.length;i++){
     acc.push(cur[i]);
  }
 
   
 

return acc;

},[]);


console.log(dataFlat);


const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
let dataFlatTwo=dataTwo.reduce((acc,cur,j)=>{
  for(let i=0;i<cur.length;i++){
    if(j!==3){
        acc.push(cur[i]);
   
    }else{
      if(i==0){
        acc.push(cur[i][0])
        acc.push(cur[i][1])
      }
      else{
        acc.push(cur[i]);
      }
      
     
    }
    
     
  }
  

   
 

return acc;

},[]);

console.log(dataFlatTwo);
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

function increment(value) {
  
  return value+1;
  
}
function double(value) {
 
  return value*2;
  
}
function decrement(value) {
 
  return value-1;
  
}
function triple(value) {
 
  return value*3;
  
}
function half(value) {
 
  return Math.round(value/2);
  
}

let out=pipeline.reduce((acc,cur)=>{
  acc=cur(acc);
  return acc;
},3);
console.log(out);

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
let out2=pipeline2.reduce((acc,cur)=>{
  acc=cur(acc);
  
  return acc;
},8);
console.log(out2);