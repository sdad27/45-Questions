// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase

let personName:string = "Saeed";

console.log("To lower case",personName.toLowerCase());
console.log("To upper case",personName.toUpperCase());
console.log("To Title case",personName.replace(/\bw/g,c => c.toUpperCase()));


