// 1.     Analyze the given input and output, write a program accordingly
//Input a = [2,3,4,5,3,3,5,2,5,3] and Output [4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 5, 5, 5 ,5, 2, 2]

 let  a = [2,3,4,5,3,3,5,2,5,3]
 console.log(a.sort());


function repeat(a) {
    let fre ={};
    for (const num of a) {
        fre[num] = (fre[num] || 0) + 1;
    }
    let reslt = []
    for(const num in fre){
        for (let i = 0; i < fre[num]; i++) {
            reslt.push(num);

        }
    }
    return reslt
    
}
let input = [2,3,4,5,3,3,5,2,5,3]
let out = repeat(input)
console.log(out);

// Find a = [3,7,8,6,2,5] maximum and minimum number in array

let a =  [3,7,8,6,2,5]
let maxi = a[0]
let mini = a[0]
for(let i = 0;i<a.length;i++){
    if(a[i]>maxi){
         maxi = a[i]
    }
    // maxi = Math.max(...a)
      //console.log(maxi);
}
console.log(maxi);
for(let i = 0;i<a.length;i++){
    if(a[i]<mini){
         mini = a[i]
    }
    maxi = Math.max(...a)
      console.log(maxi);
}
console.log(mini);

//Given an array of objects representing people with their names and ages, use filter to get only the people who are 18 or older, and then use map to create an array of their names


const people = [{ name: "Alice", age: 25 },

    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 16 }, 
    { name: "Eve", age: 20 }  ];

console.log(people);
const out = people.filter( people => people.age>=18).map(people => people.name )
//const out1 = out.map(people => people.name )
console.log(out);
   
//Write a function that takes an array of numbers and returns a new array where each element is doubled using the map method  

let arr = [1,2,3,4,5]
let out = arr.map(el => el*el )
console.log(out);

Write a program to print numbers 1-10 with a delay of 1 second between each number.

function nums() {
    for (let i = 1;i<=10;i++){
        setTimeout(function() {
            console.log(i); },i*1000 )
    }
    
}
nums()

// Write a function to check if a given string is a palindrome.

function  palindrome (st){
    let n = st.length
    let a = st.split('')
    console.log(a);
    let a2 = a.reverse()
    console.log(a2);
    let a3 = a2.join('')
    console.log(a3);
    if (st == a3) {
        console.log("true");
        
        
    } else {
        console.log("false");
        
        
    }
}
const st = "madam"
palindrome(st)

//other way
// function  palindrome (st){
//         let n = st.length
//         for(let i = 0;i<n;i++){
//             if(st[i] !== st[n-1]){
//                 return "not palindrome"
//             }
//              return "it is palindrome"
//         }
// }

// const st = 'madam'
// let value = palindrome (st)
// console.log(value);

//  Write a function to remove duplicate elements from an array without using default functions

function duplicate(arr) {
    let unique = []

    for(let i=0;i<arr.length;i++){
        let isduplicate = false;

        for(let j = 0;j<unique.length;j++){
           if (arr[i] === unique[j]) {
            isduplicate = true
            break;
            
           }
            
        }
        if (!isduplicate) {
            unique.push(arr[i])
            
        }
    }
    return unique
    
}

arr = [1,1,2,2,3,3,4,4,5,5,6]
let uni = duplicate(arr)
console.log(uni);


//other way
 let arr1 = [1,1,2,2,3,3,4,4,5,5,6]
 let unique1 = [...new Set(arr1)]
console.log(unique1);

// Write a function to find the maximum number in an array

let arr = [2,3,42,5,6]
let large = []
let n = arr.length
for(let i = 0 ;i<n;i++){
   // large = Math.max(large,arr[i])
    if(arr[i]>large){
        large = arr[i]
    }
    
}
console.log("maximiun",large);

//  Write a function to flatten a nested array
let mat = [[1,2,3],[4,5,6]]
console.log(mat.flat());
 mat[[1,2,3],[4,5,[,2,3,6],6]]
console.log(mat.flat(2));
console.log(mat.flatMap(el_arr => el_arr.map(el => el*2)));

//Write a function to count repeated characters in a string and print in a string format.

function countRepeatedCharacters(str) {
    let charCount = {};  
    let result = '';

    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    
    for (let char in charCount) {
        if (charCount[char] > 1) {
            result += char + charCount[char];
        }
    }console.log(charCount);
    

    return result;
}
let str = "aabbbccdeff";
let result = countRepeatedCharacters(str);

console.log(result);  

//write pgm to add zero after every values in an array

let arr = [1,2,3,4,5,6,7,8,9]

for(let i = 0;i<arr.length;i++){
    arr[3]=0
    arr[6]=0
    arr[9]=0
    console.log(arr[i]);
    
}

//write js pgm to extract numbers b/w two characters in string and add them all(use alpha numeric numberics as input)

let str = "ab12c23d"
console.log(str);
let matches = /\d+/g
let out = str.match(matches)
if (matches) {
    console.log(out[0] + "," + out[1]);
   
}

// Write a program to find the count of the maximum prefix and suffix that are the same in a given string.
// function presu(st){

let count = 0
for(let i =0;i<st.length;i++){
    if(st.slice(0,i) === st.slice(st.length - i)){
        count = i
        
    } 
}
  return count
}
st = "PGSPGS"
let out = presu(st)
console.log(out);

//Write a program to find the missing numbers in an array containing numbers from 1 to 100.

function miss(arr) {
    let misnum = []
    for(let i = 0;i<=100;i++){
        if(!arr.includes(i)){
            misnum.push(i)
        }
    }
    return misnum
}
arr = [1,2,3,4,5,6,7,8,9,100]
let out = miss(arr)
console.log(out);

//.  Write a program to remove the middle element from an array, or if the middle element is not there, remove every element except the first and last ones
function mid(arr) {
    let mind = Math.floor(arr.length / 2)
    arr.splice(mind,1)
    return arr
}
arr = [1,2,3,4,5]
let out = mid(arr);
console.log(out);

17.  Write a function to calculate the factorial of a number
function factorial(num) {
    let res = 1
    for(let i = 1;i<=num;i++){
        res *= i
    }
    return res
}
num = 3
 console.log(factorial(num));

//. Write a function for input: ["1a1", "2aa3a", 'aabc31", "101", "1001", "a1", "3211", "11c"] and output [101, 1001, 3211]
let arr = ["1a1", "2aa3a", "aabc31", "101", "1001", "a1", "3211" , "11c"]
let in1 = arr.join(' ');

console.log(in1);
let n = /^\d+$/
let out = arr.filter(str => n.test(str))
console.log(out);

19.  Filter numeric palindromes from the input array
function palnum(st) {
    let n = st.length
    for(let i = 0;i<n;i++){
        if(st[i] != st[n - 1]){
            return "palindrome"
        }
        return "not"
    }
    
}
st = [1,2,3,1,2,3]
let out = palnum(st)
console.log(out);


//20.  Find the length of the longest substring without repeating characters

function longSubstr(s) {
    const n = s.length;
    let res = 0;
    const lastIn = new Array(256).fill(-1);

    let j = 0;

    for (let i = 0; i < n; i++) {
       
        j = Math.max(j, lastIn[s.charCodeAt(i)] + 1);

        res = Math.max(res, i - j + 1);

        lastIn[s.charCodeAt(i)] = i;
    }

    return res;
}

const s = "PGSPGS";
 console.log(longSubstr(s));

//.  Reverse the array without using built-in functions

function rev(arr) {
    let rever = ' '
    let n= arr.length
    for(let i =n -1;i>=0;i--){
        rever += arr[i]
    }return rever
    
}
 arr = [1,2,3,4,5]
 console.log(rev(arr));

//  Count the occurrences of each unique character in the string

function chcount(st) {
    let charCount ={}
     for (let  char of st) {
        if(charCount[char]){
            charCount[char]++
        } else{
            charCount[char] = 1
        }
        
     }
    return charCount
}
  st = "abvabvcd"
  console.log(chcount(st));
 
//.  Write a function to find the second maximum and minimum numbers in an array.

let ar = [2,3,4,5,6,7,8,9]

let firstlarge = ar[0];
let secondlarge = firstlarge;
console.log("length",ar.length)

for(let i = 0; i<ar.length;i++){
    firstlarge = Math.max(firstlarge,ar[i])
}
console.log(firstlarge)

for(let i = 0; i<ar.length;i++){
    if(firstlarge>ar[i]){
        secondlarge = Math.max(secondlarge,ar[i])
    }
    
}
console.log(secondlarge)

let min = ar[0]

for(let i =0 ; i<ar.length; i++){
    if(min>ar[i]){
        min = Math.min(min,ar[i])  
    }
}
console.log("minimum",min)

// Write a function to sort an array without using built-in methods
function sort(arr) {
    let n = arr.length

    for(let i = 0;i<n - 1;i++){
        for(let j = 0;j<n - 1 - i;j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] =  temp 
            }
        
        }
    }
    return arr
}
arr =[2,1,3,5,4]
console.log(sort(arr));

//  Write a function to remove duplicate characters in a string

let str = "slskdss"
let unique = [...new Set(str)]
console.log(unique);

Write a function to capitalize the first letter of each word in an array of strings
let a = ["abc","bca"]
 let out = a.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)});

    console.log(out);
    
 Write a function to calculate the sum of total marks in an array of objects
 function sa(arr){
    let sum = null
    for(let i = 0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum
}
 arr  = [23,4,5,6,6,6,67]
 console.log("all marks",arr);
 
console.log(sa(arr));   
 
//Write a function to merge two arrays with extra zeros.

let arr1 = [0,1,2,3,4]
let arr2 = [5,6,7,8,0]
console.log(arr1,arr2);

console.log(arr1.concat(arr2));

Write a function to reverse a string without using built-in methods
function reverseString(str) {
    let reversed = "";
    let n = str.length
    for (let i = n - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  str = "PGS"
  console.log(reverseString(str));
    
//Write a deep clone function to create a copy of a nested object or array without any reference to the original

let stud = {
        firstname : "p",
        lastname :  "g",
        skills : ["Anime",'hotelmanage',"playingCricket"],
        fulldetails : function (){
            return this.firstname + " skills are " + this.lastname + " " + this.skills
    
        }
    }
    //console.log(stud.fulldetails());

    let stu = JSON.parse(JSON.stringify(stud))
    console.log(stud.fulldetails());
    console.log(stu);
    
//Write a function to find how many times each element is repeated in an array.

function countElement(arr) {
    let num = {};
  
    arr.forEach(element => {
      if (num[element]) {
        num[element]++;
      } else {
        num[element] = 1;
      }
    });
  
    return num;
  }
  
  arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  let res = countElement(arr);
  
  console.log(res); 

//Write a function to generate the specified pattern.

let n = 6
let string = " "
for(let i = 1;i<=n;i++){
   
    for(let k = 1;k<i;k++){
        string += k + ' '
      }

    string += "\n"
}
console.log(string);

