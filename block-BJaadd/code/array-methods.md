Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
  - Parameter: It accept separator-optional
  - Return: it gives string
  - Example:
  ```js
    let colors=['blue','yellow','red','gray'];
    colors.join(); //'blue,yellow,red,gray'
    let numbers =[1,2,3,4,5,6];
    numbers.join(); // '1,2,3,4,5,6'
    numbers.join(''); // '123456'
    join accepts separator according to that it does join the element of array and returns the one string.
    No it does not mutate the original array

3. `flat`
  - Parameter: depth-optinal,it is a +ve number default-0,
  - Return: it returns array with sub-array elements concatenated into it.
  - Example:
    ```js
    let colors=['blue','yellow','red','gray'];

    colors.flat(); //['blue','yellow','red','gray']
    let numbers =[1,2,3,4,5,6];
    let a=[1,2,[3,4,[5,6,[7,8]]]];
    a.flat();//[1, 2, 3, 4, 5, 6, 7, 8]
    flat accepts depth according to that it does flat the element of array and returns the one array.
    No it does not mutate the original array

4. `push`
  - Parameter: elements to be added to array
  - Return: it returns new array length after adding element
  - Example:
  ```js
    let colors=['blue','yellow','red','gray'];

    colors.push('white'); //['blue','yellow','red','gray','white'] //5
    let numbers =[1,2,3,4,5,6];
    numbers.push(9);//[1, 2, 3, 4, 5, 6, 7, 8,9] //9
    push accepts element which needs to pushed into array end and returns new array length.
    yes it does mutate the original array

5. `indexOf`
  - Parameter: elements to locate in the array
  - Return: index of that searched element
  - Example:
  ```js
    let colors=['blue','yellow','red','gray'];

    colors.indexOf('red'); //2
    let numbers =[1,2,3,4,5,6];
    numbers.indexOf(9);//-1
    indexOf it returns the index of the element is searched in array
    No it does not mutate the original array
6. `lastIndexOf`
  - Parameter: elements to locate in the array
  - Return: last index of that searched element
  - Example:
  ```js
    let colors=['blue','yellow','red','gray'];

    colors.lastIndexOf('red'); //2
    let numbers =[1,2,3,4,5,6];
    numbers.lastIndexOf(9);//-1
    lastIndexOf it returns the last index of the element is searched in array
    No it does not mutate the original array
7. `includes`
  - Parameter: elements to locate in the array,second parameter is fromIndex from where we have to start the search
  - Return: true or false based on element presence
  - Example:
  ```js
    let colors=['blue','yellow','red','gray'];

    colors.includes('red'); //true
    let numbers =[1,2,3,4,5,6];
    numbers.includes(9);//false
    numbers.includes(2,2);//false
    includes it returns true or false if element is found or not
    No it does not mutate the original array
8. `reverse`
  - Parameter: it does not have any parameter
  - Return: reversed array
  - Example:
  ```js
    let colors=['blue','yellow','red','gray'];

    colors.reverse(); //['gray', 'red', 'yellow', 'blue']
    let numbers =[1,2,3,4,5,6];
    numbers.reverse();//[6, 5, 4, 3, 2, 1]
    reverse it returns the reversed array
    Yes it does mutate the original array
9. `every`
  - Parameter: it accept callback function which can accept 4 parameters as index,array,element,argu.
  - Return: true or false
  - Example:
  ```js
    let colors=['blue','yellow','red','gray'];

    colors.every(num=>{return num+1;}); // true
    let numbers =[1,2,3,4,5,6];
    numbers.every(num=>{return num+1;});//true
    every it returns true or false
    No it does not mutate the original array
10. `shift`
  - Parameter: it does not take any parameter
  - Return: removed element from array
  - Example:
  ```js
    let colors=['blue','yellow','red','gray'];

    colors.shift(); // 'blue'
    let numbers =[1,2,3,4,5,6];
    numbers.shift();// 1
    shift it returns removed element
    Yes it does mutate the original array
11. `splice`
  - Parameter: start and end index of both are optional
  - Return: new array containing extracted array
  - Example:
  ```js
    let colors=['blue','yellow','red','gray'];

    colors.splice(); // []
    let numbers =[1,2,3,4,5,6];
    numbers.splice(0,3);// [1,2,3]
    splice it returns array of removed element
    Yes it does mutate the original array
12. `find`
  - Parameter: accept callback function which accept 4 parameters
  - Return: new array containing extracted array
  - Example:
  ```js
  let colors=['blue','yellow','red','gray'];
  function isFound(color){ return color==='red'; } } colors.find(isFound); // 'red' let numbers =[1,2,3,4,5,6]; numbers.find(isFound);// undefined
  - `find` it takes call back function if that function returns true then only it will print that element otherwise undefined.
  - No it does not mutate the original array
13. `unshift`
  - Parameter: element to be added to start of array
 - Return: new length of array
- Example:
```js
  let colors=['blue','yellow','red','gray'];

  colors.unshift(); // '4
  let numbers =[1,2,3,4,5,6];
  numbers.unshift(8);// 7
  unshift it returns the new length of array
  Yes it does mutate the original array
14. `findIndex`
  - Parameter: accept callback function which accept 4 parameters

  - Return: index of first element in the array that passes the test.
  - Example:
let colors=['blue','yellow','red','gray'];
function isFound(color){ return color==='red'; }

colors.findIndex(isFound); // 2 let numbers =[1,2,3,4,5,6]; numbers.findIndex(isFound);// -1

- `findIndex` it takes call back function if that cb funtion returns true then it returns index of that element  otherwise -1 returns
- No it does not mutate the original array


15. `filter`

Parameter: accept callback function which accept 4 parameters

Return: A new array with element that pass the test by provided function
Example:
let colors=['blue','yellow','red','gray'];
function isFound(color){ return color==='red'; }

colors.filter(isFound); // ['red'] let numbers =[1,2,3,4,5,6]; numbers.filter(isFound);// []

- `filter` it takes call back function and returns the new array of those element which passes test provided by callback function.
- No it does not mutate the original array


16. `flat`

Parameter: accept callback function which accept 4 parameters
Return: undefined
Example:
let colors=['blue','yellow','red','gray'];
let newArray=[]; function isInsert(item){ newArray.push(item); } //newArray: ['blue','yellow','red','gray'] colors.forEach(isInsert); // let numbers =[1,2,3,4,5,6]; numbers.forEach(isInsert);// undefined and newArray : [1,2,3,4,5,6]
- `forEach` it takes call back function and  execute each element for callback function.
- No it does not mutate the original array
17. `forEach`

Parameter: accept callback function which accept 4 parameters
Return: new array of each element resulted from callback function
Example:
let newArray=[];
//newArray: ['blue','yellow','red','gray'] colors.map(); // let numbers =[1,2,3,4,5,6]; numbers.map((num)=>num*num;);//[1, 4, 9, 16, 25, 36]
- `map` it takes call back function and  execute each element for callback function.
- No it does not mutate the original array

18. `map`
Parameter: it does not accept any parameters
Return: it returns element which is removed from array
Example:
let colors=['blue','yellow','red','gray'];

colors.pop(); //['blue','yellow','red','gray','white'] // 'white'
let numbers =[1,2,3,4,5,6];
numbers.pop(8);//[1, 2, 3, 4, 5, 6, 7, 8,9] //9
pop it removes the element from array which is in end and returns that element.
yes it does mutate the original array

19. `pop`

Parameter: accept callback function which accept 4 parameters,initial value-optional
Return: new array of each element resulted from callback function
Example:
let sum=0;
let numbers =[1,2,3,4,5,6];
sum= numbers.reduce((acc,num)=>{
    return acc+num;
},0); //21

let colors=['blue','yellow','red','gray'];
let new=colors.reduce((acc,color)=>
{return acc+color},"");
reduce it reduce the collection of value into one value.
No it does not mutate the original array
20. `reduce`
Parameter: it does start and end index
Return: it returns array containing extracted element
Example:
let colors=['blue','yellow','red','gray'];

colors.slice(); //['blue','yellow','red','gray','white'] // '
let numbers =[1,2,3,4,5,6];
numbers.slice(0,3);//[1, 2, 3]
slice it gives element in between passed index
No it does not mutate the original array
21. `slice`
22. `some`
Parameter: it accept callback function,thisArg-optional
Return: true if cb function returns truthy value for atleast one element.
Example:
let colors=['blue','yellow','red','gray'];

colors.some(); //['blue','yellow','red','gray','white'] // '
let numbers =[1,2,3,4,5,6];
numbers.some(num=>num%2==0);//true
some it returns true if atleast one element in the array passes the test implemented by the provided function
No it does not mutate the original array