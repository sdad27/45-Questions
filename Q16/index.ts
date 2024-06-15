// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



let guest : string[] = ['saeed','ali','khizar'];

console.log("I found a bigger table now !!!");

guest[1] = "hamza";

guest.unshift("ali","moiz","umar");

guest.splice(3,0,"saad");
guest.push("ammad")
console.log(guest);

for(let i = 0; i < guest.length; i++){
    console.log(`Hello Dear \n${guest[i]}, would you like to join us for a dinner \nTank you \n`);
}


