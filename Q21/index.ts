// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

type Country  = {
    name:string,
    capital:string,
    nationalLanguage:string,
};

let countryObj:Country = {
    name:"Pakistan",
    capital:"Islamabad",
    nationalLanguage:"Urdu",
}
console.log(countryObj);

console.log(`the country name is ${countryObj.name}, the capital of the country is ${countryObj.capital} and the national language is ${countryObj.nationalLanguage}`);

