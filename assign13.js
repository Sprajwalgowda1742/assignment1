// 1.     Analyze the given input and output, write a program accordingly
//Input a = [2,3,4,5,3,3,5,2,5,3] and Output [4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 5, 5, 5 ,5, 2, 2]

// let  a = [2,3,4,5,3,3,5,2,5,3]
// console.log(a.sort());


// function repeat(a) {
//     let fre ={};
//     for (const num of a) {
//         fre[num] = (fre[num] || 0) + 1;
//     }
//     let reslt = []
//     for(const num in fre){
//         for (let i = 0; i < fre[num]; i++) {
//             reslt.push(num);

//         }
//     }
//     return reslt
    
// }
// let input = [2,3,4,5,3,3,5,2,5,3]
// let out = repeat(input)
// console.log(out);

// Find a = [3,7,8,6,2,5] maximum and minimum number in array

// let a =  [3,7,8,6,2,5]
// let maxi = a[0]
// let mini = a[0]
// for(let i = 0;i<a.length;i++){
//     if(a[i]>maxi){
//          maxi = a[i]
//     }
//     // maxi = Math.max(...a)
//       //console.log(maxi);
// }
// console.log(maxi);
// for(let i = 0;i<a.length;i++){
//     if(a[i]<mini){
//          mini = a[i]
//     }
//     // maxi = Math.max(...a)
//       //console.log(maxi);
// }
// console.log(mini);

//Given an array of objects representing people with their names and ages, use filter to get only the people who are 18 or older, and then use map to create an array of their names


// const people = [{ name: "Alice", age: 25 },

//     { name: "Bob", age: 17 },
//     { name: "Charlie", age: 30 },
//     { name: "David", age: 16 }, 
//     { name: "Eve", age: 20 }  ];

// console.log(people);
// const out = people.filter( people => people.age>=18).map(people => people.name )
// //const out1 = out.map(people => people.name )
// console.log(out);
   
//Write a function that takes an array of numbers and returns a new array where each element is doubled using the map method  

// let arr = [1,2,3,4,5]
// let out = arr.map(el => el*el )
// console.log(out);

//Write a program to print numbers 1-10 with a delay of 1 second between each number.

// function nums() {
//     for (let i = 1;i<=10;i++){
//         setTimeout(function() {
//             console.log(i); },i*1000 )
//     }
    
// }
// nums()

// Write a function to check if a given string is a palindrome.

// function  palindrome (st){
//     let n = st.length
//     let a = st.split('')
//     console.log(a);
//     let a2 = a.reverse()
//     console.log(a2);
//     let a3 = a2.join('')
//     console.log(a3);
//     if (st == a3) {
//         console.log("true");
        
        
//     } else {
//         console.log("false");
        
        
//     }
// }
// const st = "madam"
// palindrome(st)

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

// function duplicate(arr) {
//     let unique = []

//     for(let i=0;i<arr.length;i++){
//         let isduplicate = false;

//         for(let j = 0;j<unique.length;j++){
//            if (arr[i] === unique[j]) {
//             isduplicate = true
//             break;
            
//            }
            
//         }
//         if (!isduplicate) {
//             unique.push(arr[i])
            
//         }
//     }
//     return unique
    
// }

// arr = [1,1,2,2,3,3,4,4,5,5,6]
// let uni = duplicate(arr)
// console.log(uni);


// //other way
//  let arr1 = [1,1,2,2,3,3,4,4,5,5,6]
//  let unique1 = [...new Set(arr1)]
// console.log(unique1);

// Write a function to find the maximum number in an array

// let arr = [2,3,42,5,6]
// let large = []
// let n = arr.length
// for(let i = 0 ;i<n;i++){
//    // large = Math.max(large,arr[i])
//     if(arr[i]>large){
//         large = arr[i]
//     }
    
// }
// console.log("maximiun",large);

//  Write a function to flatten a nested array
// let mat = [[1,2,3],[4,5,6]]
// console.log(mat.flat());
//  mat[[1,2,3],[4,5,[,2,3,6],6]]
// console.log(mat.flat(2));
// console.log(mat.flatMap(el_arr => el_arr.map(el => el*2)));

//Write a function to count repeated characters in a string and print in a string format.

// function countRepeatedCharacters(str) {
//     let charCount = {};  
//     let result = '';

    
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

    
//     for (let char in charCount) {
//         if (charCount[char] > 1) {
//             result += char + charCount[char];
//         }
//     }console.log(charCount);
    

//     return result;
// }
// let str = "aabbbccdeff";
// let result = countRepeatedCharacters(str);

// console.log(result);  

//write pgm to add zero after every values in an array

// let arr = [1,2,3,4,5,6,7,8,9]

// for(let i = 0;i<arr.length;i++){
//     arr[3]=0
//     arr[6]=0
//     arr[9]=0
//     console.log(arr[i]);
    
// }

//write js pgm to extract numbers b/w two characters in string and add them all(use alpha numeric numberics as input)

// let str = "ab12c23d"
// console.log(str);
// let matches = /\d+/g
// let out = str.match(matches)
// if (matches) {
//     console.log(out[0] + "," + out[1]);
   
// }

//


  

    
 
    
    
    
 