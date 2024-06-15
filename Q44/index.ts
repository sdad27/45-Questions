// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, and it 
// should print a summary of the sandwich that is being ordered. Call the function three times, using a 
// different number of arguments each time.

function makeSandwitch(...items:string[]) {
    console.log("you have ordered a sandwitch with the following items :");
    for(let item of items){
        console.log(`- ${item}`);
        
    }
    console.log("\n");
    
}

// Function ko teen baar call karo different items ke sath


makeSandwitch("ham","cheese","tomato");
makeSandwitch("chicken","mayo")
makeSandwitch("ham","cheese","tomato","onion","mayo");