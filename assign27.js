//Write a function greet(name) that takes a name as an argument and returns a greeting string, e.g., "Hello, [name]!"

// function greet(name){
//     console.log("hello",name)
    
// }
// greet("PGS!")

// Write a function add(a, b) that takes two numbers as arguments and returns their sum.

// function add(a,b) {
//     let sum = a + b;
//     console.log(sum)
//     return sum
    
// }
// add(1,2)

// Write a function calculateArea(length, width) that calculates and returns the area of a rectangle


// function rect (length,width) {
//   let  area = length*width;
//     console.log("area of reactangle",area)
//     //return area
//     }
//     /* let cal = */  rect(5,2)
    //console.log(cal)
    
// Define a function expression multiply(a, b) that takes two numbers as arguments and returns their product

// let multi = function (a,b) {
//     multi = a * b;
//     console.log("Product of a and b", multi)
//     }
//     multi(3,5)

// Create an anonymous function that takes an array of numbers and returns the sum of all the numbers using the reduce() method
// let arr = [1,2,3,4,5]

// console.log(arr)

// let sum = arr.reduce((accumulator, CurrentValue) => {return accumulator + CurrentValue;},0)
// console.log(sum)

// other way

// let arr = [1,2,3,4,5]
// let anonymous = function(){
     
//     let sum = arr.reduce((accumulator, CurrentValue) => {return accumulator + CurrentValue;},0)
//      console.log(sum)
// }
// anonymous(arr)

//Write a function multiplyNumbers(a, b = 1) that multiplies two numbers. If the second argument is not provided, use 1 as the default value

// function multiplyNumbers(a,b=1) {
//     let result = a * b;
//     console.log("multiplication of 2 number",result)
//     //return result
// }
// multiplyNumbers(4)

//Write a function sum(...numbers) that takes any number of arguments and returns the sum of those arguments

// function sum(a,b,c) {
//         let result = a + b + c;
//         console.log("sum of  number")
//         return result
//     }
//     let res = sum(4,6,7);
//     console.log(res)

// Write a function reverseArray(arr) that returns a new array with the elements of arr in reverse order.


// let arr = [1,2,3,4,5]
// function reverse() {
//     arr.reverse();
//     console.log(arr)
     
// }
// reverse()


// declaration function

function declare(st) {
    st = "hi"
    console.log(st)
   
}
