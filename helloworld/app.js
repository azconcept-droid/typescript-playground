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
// Basic type inference
var counter = 0;
function increment(counter) {
    return counter++;
}
// Best common type algorithm
var items = [1, 2, 3, null];
var itemz = [0, 1, null, 'Hi'];
var arr = [new Date(), new RegExp('\d+')];
// Contextual typing
document.addEventListener('click', function (event) {
    console.log(event.button);
});
document.addEventListener('scroll', function (event) {
    console.log(event.button); // error
});
// Number Annotations
var counterS = 0;
var x = 100, y = 200;
var bin = 4;
var anotherBin = 2;
// Octal Numbers
var octal = 8;
// Hexadecimal numbers
var hexadecimal = 0XA;
//Big Integers
// represent the whole numbers larger than 2^253 – 1
var big = 9007199254740991n;
////////////////////////////STRINGS///////////////////////////////
var firstName = "John";
var title = "Web Developer";
var profile = "I'm ".concat(firstName, ". \nI'm a ").concat(title);
console.log(profile);
var description = "This TypeScript string can \nspan multiple \nlines\n";
console.log(description);
////////////// Boolean ////////////////////
var pending;
pending = true;
// after a while
// ..
pending = false;
// NOT operator
var pending = true;
var notPending = !pending; // false
console.log(result); // false
var hasError = false;
var completed = true;
// AND operator
var result = completed && hasError;
console.log(result); // false
// OR operator
result = completed || hasError;
console.log(result); // true
var completeds = true;
// function changeStatus(status: boolean): boolean {
//     //...
// }
///// Objects ///////////////////////////////////////////
var employee;
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
var vacant = {};
console.log(vacant.toString());
////////////////////////////////// ARRAY /////////////////////
var skills = [];
skills[0] = "Problem Solving";
skills[1] = "Programming";
skills.push('Software Design');
// INFER
// let skills = ['Problem Sovling','Software Design','Programming'];
// skills.push(100); error
var skill = skills[0];
console.log(typeof (skill)); // string
// TypeScript array properties and methods
var series = [1, 2, 3];
console.log(series.length); // 3
// And you can use all the useful array methods such as 
// forEach(), map(), reduce(), and filter().For example:
var doubleIt = series.map(function (e) { return e * 2; });
console.log(doubleIt); // [ 2, 4, 6 ]
// Storing values of mixed types
var scores = ['Programming', 5, 'Software Design', 4];
