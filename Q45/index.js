// Cars: Write a function that stores information about a car in a Object. The function should always receive 
// a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an 
// optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
//create a function pass a paramenter and return a object
function make_car(manufacturer, model, optional) {
    let car = {
        manufacturer,
        model,
        ...optional,
    };
    return car;
}
//console log with invoke function that return object
console.log(make_car("toyota", "corolla", { year: 2022, color: "grey" }));
export {};
