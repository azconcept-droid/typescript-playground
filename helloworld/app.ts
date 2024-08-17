let message: string = 'Hello, Typescript!';

// Create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;

// add the heading to document
document.body.appendChild(heading)

interface Product{
    id: number,
    name: string,
    price: number
}

function getProduct(id: number) : Product{
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

const showProduct = (name: string, price: number) => {
    console.log(`The product ${name} costs $${price}`);
}

const product = getProduct(1);
showProduct(product.name, product.price)

console.log(message);

const heading1 = document.querySelector('h1');

// Type annotation
// Array
let arrayName: string[] = ['hello', 'world'];

// Objects
let person: {
    name: string,
    age: number
}

person = {
    name: 'john',
    age: 25
}

// functions arguments and return types
let greeting: (name: string) => string;

greeting = function (name: string) {
    return `Hi ${name}`;
}

// Basic type inference
let counter = 0;

function increment(counter: number) {
    return counter++;
}
// Best common type algorithm
let items = [1, 2, 3, null];

let itemz = [0, 1, null, 'Hi'];

let arr = [new Date(), new RegExp('\d+')];

// Contextual typing
document.addEventListener('click', function (event) {
    console.log(event.button);
})

document.addEventListener('scroll', function (event) {
    console.log(event.button); // error
})

// Number Annotations

let counterS: number = 0;
let x: number = 100, 
    y: number = 200;

let bin = 0b100;
let anotherBin: number = 0B010;

// Octal Numbers
let octal: number = 0o10;

// Hexadecimal numbers
let hexadecimal: number = 0XA;

//Big Integers
// represent the whole numbers larger than 2^253 – 1

let big: bigint = 9007199254740991n;

////////////////////////////STRINGS///////////////////////////////

let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;

console.log(profile);

let description = `This TypeScript string can 
span multiple 
lines
`;

console.log(description);

////////////// Boolean ////////////////////
let pending: boolean;
pending = true;
// after a while
// ..
pending = false;

// NOT operator
const pending: boolean = true;
const notPending = !pending; // false
console.log(result); // false

const hasError: boolean = false;
const completed: boolean = true;

// AND operator
let result = completed && hasError; 
console.log(result); // false

// OR operator
result = completed || hasError; 
console.log(result); // true

let completeds = true;

function changeStatus(status: boolean): boolean {
    //...
}

///// Objects ///////////////////////////////////////////

let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};

// let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);

// The empty type {}
// let vacant: {};
// vacant.firstName = 'John'; // error

let vacant: {} = {};

console.log(vacant.toString());
