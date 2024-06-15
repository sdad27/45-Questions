// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest : string[] = ['saeed','ali','khizar'];

for(let i = 0; i < guest.length; i++){
    console.log(`Hello Dear \n${guest[i]}, would you like to join us for a dinner \nTank you \n`);
}

export{guest};