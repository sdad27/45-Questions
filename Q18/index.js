// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let favPLaces = ["Qatar", "UAE", "UK", "USA", "China"];
console.log("original order : ", favPLaces);
// mkaing  a copy of an array and sort it
console.log("alphabetical order : ", [...favPLaces].sort());
//printing original array
console.log("original order : ", favPLaces);
// reverse alphabetical order 
console.log("reverse alphabetivcal order : ", [...favPLaces].sort().reverse());
//printing original array
console.log("original order : ", favPLaces);
// reversing the array original list
console.log("reverse order : ", favPLaces.reverse());
//printing original array list
console.log("original list : ", favPLaces.reverse());
//printing in alphabetical order
console.log("alphabetical order : ", favPLaces.sort());
//printing in reverse alphabetical order
console.log("reverse alphabetical order :", favPLaces.reverse());
export {};
