// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and 
// one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
    //  and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// • Tests for equality and inequality with strings

let a = "saeed";
console.log("saeed" == a); //true
console.log(a != "saeed"); //false

// • Tests using the lower case function

console.log(a.toLowerCase() == "saeed"); //true
console.log(a.toLowerCase() != "saeed"); // false

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
    //  and less than or equal to

// numerical test

console.log(5 < 9); //true
console.log(5 > 9); //false

//test using and "&&"  and or "||" operator
console.log(7 > 10 && 7 < 10); //false
console.log(7 > 10 || 7 < 10); //true

//test is item is in array or not

let names : string[] = ["saeed","ahmed","ali"];
console.log(names.includes("saeed"));
console.log(!names.includes("ali"));







