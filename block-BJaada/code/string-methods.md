Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

  - Parameter: it doesnot take any parameter
  - Return: a new string representing the calling string coverted to uppercase
  - Example:
    ```js
    let tag='it doesnot take any parameter'
    tag.toUpperCase();
    //IT DOESNOT TAKE ANY PARAMETER
    let tag='swathi rachamalla'
    tag.toUpperCase();
    //'SWATHI RACHAMALLA'
*The toUpperCase() method returns the value of the string converted to uppercase. This method does not affect the value of the string itself since JavaScript strings are immutable.

3. `toLowerCase`

  - Parameter: it doesnot take any parameter
  - Return: A new string representing the calling string converted to lower case.
  - Example:
  ```js
  let tag='IT DOESNOT TAKE'
    tag.tOLowercase();
    //it doesnot take
    let tag='SWATHI RACHAMALLA'
    tag.toLowercase();
    //'swathi rachamalla'
*The toLowerCase() method returns the value of the string converted to lower case. toLowerCase() does not affect the value of the string str itself.
4. `trim`

  - Parameter: it does not take any parameters
  - Return: It returns the whole string without the white spaces from start and end.
  - Example:
  ```js
  let tag=' IT DOESNOT TAKE ANY PARAMETER 'A
  tag.trim();
  // 'IT DOESNOT TAKE ANY PARAMETER '
  'SWATHI '.trim();
  // 'SWATHI'
*trim does not accept any parameters and returns the string without white spaces.
5. `trimEnd`

  - Parameter: it does not take any parameters
  - Return: It returns the whole string without the white spaces from end.
  - Example:
  ```JS
    let tag=' IT DOESNOT TAKE ANY PARAMETER '
  tag.trimeEnd();
  // 'IT DOESNOT TAKE ANY PARAMETER '
  'SWATHI '.trimEnd();
  // 'SWATHI'
  *trimEnd does not accept any parameters and returns the string which does not have white spaces from end.
6. `trimStart`

  - Parameter: it does not take any parameters
  - Return: It returns the whole string without the white spaces from start.
  - Example:
  ```js
  let tag=' ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT '
  tag.trimStart();
  // 'ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT '
  ' SWATHI'.trimStart();
  // 'SWATHI'
* trimEnd does not accept any parameters and returns the string which does not have white spaces from start.
7. `concat`

  - Parameter: any string
  - Return: It returns the new string with concatinated string.
  - Example:
  ```js
  let tag='ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT'
  tag.concat('and can reshape the carrier');
  // 'ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENTand can reshape the carrier'
  'SWATHI'.concat();
  // 'SWATHI'
  'swathi'.concat('') //'swathi'
  'swathi'.concat(' ')//'swathi '
* concat it takes string as input returns the new string which is concatinated at the end of first string. and if parameter is empty then same string will be returned or if we simply pass '' the string will be returned.

8. `endsWith`
  - Parameter: any string and length-optional
  - Return: It returns true or false
  - Example:
  ```js
  let tag='ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT'
  tag.endsWith('and can reshape the carrier');
  // false
  'SWATHI'.endsWith('A'); //true

  'swathi'.endsWith('a',7) //false
  'swathi'.endsWith('a',1)//true
  * endsWith it takes string or character to be searched and string length in which part it has to be searched that is number and after searching if it matches it give true otherwise false.
9. `includes`

  - Parameter: any string and position-optional(default-0)
  - Return: It returns true or false
  - Example:
  ```js
  let tag='ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT'
  tag.includes('and can reshape the carrier');
  // false
  'SWATHI'.includes('A'); //true

  'swathi'.includes('a',7) //true
  'swathi'.includes('s',3)//false
* includes it takes string or character to be searched and position from where it will start searching and after searching if it matches it give true otherwise false.
10. `indexOf`

  - Parameter: any string and index-optional(default-0) from where search to be started
  - Return: It returns index of searched value.
  - Example:
  ```js
  let tag='ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT'
  tag.indexOf('and can reshape the carrier');
  // -1
  'SWATHI'.indexOf('A'); //0

  'swathi'.indexOf('a',6) // 3
  'swathi'.indexOf('s',0)//false
* indexOf it takes string or character to be searched and index from where it will start searching and after searching if it matches it gives the index number of the searched string or character. if string not found then it returns -1.
11.  `lastIndexOf`
  
  - Parameter: any string and index-optional(default-0) from where search to be started
  - Return: It returns last index of searched value.
  - Example:
  ```js
  let tag='ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT'
  tag.lastIndexOf('and can reshape the carrier');
  // -1
  'SWATHI'.lastIndexOf('A'); //0

  'swathi'.lastIndexOf('a',7) // 7
  'swathi'.lastIndexOf('s',3)// 1
  'swathi'.lastIndexOf('s',0)// -1
*lastIndexOf it takes string or character to be searched and index from where it will start searching and after searching if it matches and if it is a last character or string in given string then it gives the index number of the searched string or character. if string not found then it returns -1.
12. `padEnd`
  - Parameter: it takes length how much padding we want from end of string and also padString is optional which takes string which needs to be padded.
  - Return: It returns the padded string
  - Example:
  ```js
  let tag='rachamalla'
  tag.padEnd(1,'.');
  // 'rachamalla.'
  'SWATHI'.padEnd('*'); //'SWATHI*'

  'swathi'.padEnd(1,'8') // 'swathi8'
  'swathi'.padEnd('')//'swathi'
*padEnd it gives padded string which is padded from the end.
13. `padStart`
  - Parameter: it takes length how much padding we want from start of string and also padString is optional which takes string which needs to be padded.
  - Return: It returns the padded string
  - Example:
  ```js
  let tag='rachamalla'
  tag.padStart(1,'.');
  // '.rachamalla'
  'SWATHI'.padStart('*'); //'*SWATHI'

  'swathi'.padStart(1,'8') // '8swathi'
  'swathi'.padStart('')//'swathi'
*padStart it gives padded string which is padded from the start.
15. `repeat`
  - Parameter: it takes number from o to +infinity ,means how many times we want to repeat the string. default-0
  - Return: It returns string that times which is given in parameter
  - Example:
  ```js
  let tag='rachamalla'
  tag.repeat(1);
  // 'rachamalla'
  'swaINDRA'.repeat(1); //'swaINDRA'

  'swathi'.repeat(2) // 'swaindraswaindra'
  'swathi'.repeat()//''
  repeat it gives the repeated string.
  replace
  Parameter: it takes string which needs to be replaced,another parameter is string which should be put after replacing the first string.
  Return: It returns new string which is made by replacement
  Example:
  let tag='rachamalla'
  tag.replace('rac','RAC');
  // 'RAChamalla'
  'SWATHI'.replace('',RAJ); //'RAJSWAthi'

  'swathi'.replace('s','') // 'wathi'
  'swathi'.replace('s',' ')//' wathi'
*replace it gives the replaced string
16. `slice`
  - Parameter: it takes begin index and second one is end index from where slicing will start
  - Return: It returns new string after slcing
  - Example:
  ```js
  let tag='rachamalla'
  tag.slice(0,3);
  // 'rac'
  'SWATHI'.slice(0); //'SWATHI'

  'swathi'.slice(2,1) // ''
  'swathi'.slice()//'swathi'
* slice it gives sliced string.
17. `split`
  - Parameter: it takes two parameter both are optional,first one is seprator by which string has to be separated,second one is limit means - array
  - Return: It returns array of string
  - Example:
  ```js
  let tag='rachamalla'
  tag.split(0,3);
  // 'rac'
  'SWATHI'.split(0); //['SWATHI']

  'swathi'.split('') // ['s', 'w', 'a', 't', 'h', 'i']
  'swathi'.split()//['swathi']
  'swathi'.split('swa',3);// ['', 'thi']
  'swathi'.split('swa',1);// ['']
  'swathi'.split('swa',0);// []
*  split it gives splitted array of strings. it split the strings at each seprator given
18. `substring`
  - Parameter: it takes two parameter first one is indexstart, and second one is indexEnd
  - Return: It returns new string after creating substring
  - Example:
  ```js
  let tag='rachamalla'
  tag.substring(0,3);
  // 'raj'
  'swathi'.substring(0,2); //'as'

  'swathi'.substring(6,0) // 'swathi'
  'swathi'.substring()//'swathi'
  'swathi'.substring(2,0);// 'as'
* substring it gives the new string made of the indexes provided.