console.log ("Hello World");
console.log ("From script.js file")

const myName = "Anghel";
let number = "09056667962";
let address = "Villa Miranda";
let sixsivin = 67;
let age = 21;

console.log (`Name: ${myName}`);
console.log (`Age: ${age}`);
console.log (`Number: ${number}`);
console.log (`Address: ${address}`);
console.log (`${sixsivin}`);

function greet(greetings, names = []) {
    if (Array. isArray (names)) {
    names = names.join(", ");
 }
    return `${greetings} sa enyu, ${names}`;
}
console.log ( greet("Mayong aga", ["Anghel","Cholo","Toto","Nero."]) );

const heading = document.querySelector("h1");
console.log (heading);

const contactHeading = document.querySelector ("#contact h2");
console.log (contactHeading);

const sectionHeading = document.querySelector ("#services h2");
console.log (sectionHeading);