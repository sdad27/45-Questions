// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy 
// of the array of magicians’ names. Because the original array will be unchanged, return the new array 
// and store it in a separate array. Call show_magicians() with each array to show that you have one array 
// of the original names and one array with the Great added to each magician’s name.
import { magicians, show_magicians } from "../Q41/index.js";
// Function jo magicians ke names ko modify karegi aur nayi array return karegi
function makeGreat(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(magician + " " + "the Great");
    }
    return greatMagicians;
}
// Original array ko unchanged rakhne ke liye `make_great` ko array ki copy ke sath call karo
let greatMagicians = makeGreat([...magicians]);
// `show_magicians` function ko original aur modified arrays ke sath call karo
console.log("\noriginal magicians");
show_magicians(magicians);
console.log("\ngreat magicians");
show_magicians(greatMagicians);
