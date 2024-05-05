// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guest = ['saeed', 'ali', 'khizar'];
for (let i = 0; i < guest.length; i++) {
    console.log(`Hello Dear \n${guest[i]}, would you like to join us for a dinner \nTank you \n`);
}
console.log(`${guest[1]} is not coming !!!\n`);
guest[1] = "hamza";
for (let i = 0; i < guest.length; i++) {
    console.log(`Hello Dear \n${guest[i]}, would you like to join us for a dinner \nTank you \n`);
}
export {};
