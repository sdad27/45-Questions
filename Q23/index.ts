// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
// for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// // console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let personName = "Saeed"

console.log("Is name == 'saeed' ? I predict False");
console.log(personName == "saeed");

console.log("Is name.lenght == 6 ? I predict False");
console.log(personName.length == 6);

console.log("Is name == saEed ? I predict False");
console.log(personName == "saEed");

console.log("Is name == 'SAEED' ? I predict False");
console.log(personName == "SAEED");

console.log("Is name.lenght !> name.lenght ? I predict False");
console.log(personName.length !> personName.length);

console.log("Is name == 'Saeed' ? I predict True");
console.log(personName == "Saeed");

console.log("Is name.toUpperCase == 'SAEED' ? I predict True");
console.log(personName.toUpperCase() == "SAEED");

console.log("Is name.toLowerCase == 'saeed' ? I predict True");
console.log(personName.toLowerCase() == "saeed");

console.log("Is name.lenght == 5 ? I predict True");
console.log(personName.length == 5);

console.log("Is name.lenght <= 5 ? I predict True");
console.log(personName.length <= 5);
