let voter = 16
let child

console.log("enter age",voter);

if (voter >= 18) 
    {
        console.log('eligible to vote');
    
} else if (voter <= 18 )
    {
        child = 18 - voter
        console.log("required age to vote is",child);
    
}
