// Think of something you could store in a array. For example, you could make a list of mountains, rivers, 
// countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let lanquages = ["Enlish", "Urdu", "Arabi"];
// for(let top of lanquages){
//     console.log(top);    
// }
lanquages.forEach((languages, index) => {
    console.log(`${index + 1}. ${languages}`);
});
export {};
