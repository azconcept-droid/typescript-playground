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
