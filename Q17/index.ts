// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guest : string[] = ['saeed','ali','khizar'];

console.log("my new dinner table not arrive on time, so i invite only 2 guests");

//removing guest untill 2 guest remaining in my list

while(guest.length > 2){
    // sending messaage to friends who are not are not invited

    console.log(`${guest.pop()} you are not invited`);
}


for(let i = 0; i < guest.length; i++){
    console.log(`Hello Dear \n${guest[i]}, would you like to join us for a dinner \nTank you \n`);
}