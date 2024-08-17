var message = 'Hello, Typescript!';
// Create a new heading 1 element
var heading = document.createElement('h1');
heading.textContent = message;
// add the heading to document
document.body.appendChild(heading);
function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var showProduct = function (name, price) {
    console.log("The product ".concat(name, " costs $").concat(price));
};
var product = getProduct(1);
showProduct(product.name, product.price);
console.log(message);
var heading1 = document.querySelector('h1');
// Type annotation
// Array
var arrayName = ['hello', 'world'];
// Objects
var person;
person = {
    name: 'john',
    age: 25
};
// functions arguments and return types
var greeting;
greeting = function (name) {
    return "Hi ".concat(name);
};
var counter = 0;
function increment(counter) {
    return counter++;
}
var items = [1, 2, 3, null];
var itemz = [0, 1, null, 'Hi'];
var arr = [new Date(), new RegExp('\d+')];
