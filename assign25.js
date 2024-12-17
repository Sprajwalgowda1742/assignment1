// table of 1

let num = 1

for(let i = 1; i<=10;i++ ){
    
    console.log(num + " X " + i + " = " + num*i)
}

// Write a program that asks the user to enter a number and keeps asking for the number until the user enters a number greater than 100.



// for (let i = 0 ; i<=100 ; i++){
//     // if(i==101){
//     //     break;
//     // }
//     console.log(i)
// }

// console.log("out of loop")

// Write a program that prints a countdown from 10 to 1 using a do while loop

// let X = 10
// do { 
//     for(X = 10; X>=1;X--){

//     // X--;
//     console.log(X)
//     //X--;
//    }
// } while (X); //X>1


// Create a program that loops through an array of colors using the for of loop and prints each color.

// let color = ["red","green","yellow","black"]
// //console.log(typeof(color))

// for (const colors of color) {
//     console.log(colors,typeof(colors))
// }

// Write a program that uses a for in loop to loop through an object and prints the key-value pairs.

// let color = ["red","green","yellow","black"]

// for (const n in color) {
//    console.log(n,color[n])
// }

// Write a program that prints a pattern of stars using nested loops. Print a right-angled triangle pattern with 5 rows.

// for(let i = 1; i <= 5; i++){
// let row = "";
// for(let j = 1; j <=i; j++){
//     row += "* ";
// }
// console.log(row)
// }
    
 // Write a program to print numbers from 1 to 30. For multiples of 3, print "Move" instead of the number, for multiples of 5, print "Go", and for multiples of both 3 and 5, print "Keep Moving"

// for(let i = 1; i<=30;i++){
//     if (i%3 == 0 && i%5 == 0) {
//         console.log("keep moving")  
//     } 
//     else if (i%3 == 0) {
//         console.log("move")
        
//     } else if (i%5 == 0) {
//         console.log("go")
//     } else {
//         console.log(i)
//     }
        
//     }

// Write a program that finds the largest number in an array using a for of loop.
 
// let X = [1,2,3,4,5,6,7,8]
// //let large 
// for (const el of X) {
//     console.log(el)
//     if ( el>7) {
//         // large = el 
//         console.log("largest number" , el)  
//     }
    
  
// }


// Write a program that reverses a string using a loop

// let st = "PGS"
// console.log(st.length)
// for (let i=st.length  -1   ;i>=0;i--){
//     console.log(st[i])
// }

// Write a program that calculates the sum of all the numbers in an array

// let a = [1,2,3,4,5]
// console.log(a.length)
// let cal = a[0]+a[1]+a[2]+a[3]+a[4]

// console.log("sum of no. " ,cal)

// other way

// let a = [1,2,3,4,5]
// let sum = null
// for (const n of a) {
//      sum += n;
     
// }
// console.log(sum)
