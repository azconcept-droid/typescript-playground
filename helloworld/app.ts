let message: string = "Hello, Typescript!";

// Create a new heading 1 element
let heading = document.createElement("h1");
heading.textContent = message;

// add the heading to document
document.body.appendChild(heading);

interface Product {
	id: number;
	name: string;
	price: number;
}

function getProduct(id: number): Product {
	return {
		id: id,
		name: `Awesome Gadget ${id}`,
		price: 99.5,
	};
}

const showProduct = (name: string, price: number) => {
	console.log(`The product ${name} costs $${price}`);
};

const product = getProduct(1);
showProduct(product.name, product.price);

console.log(message);

const heading1 = document.querySelector("h1");

// Type annotation
// Array
let arrayName: string[] = ["hello", "world"];

// Objects
let person: {
	name: string;
	age: number;
};

person = {
	name: "john",
	age: 25,
};

// functions arguments and return types
let greeting: (name: string) => string;

greeting = function (name: string) {
	return `Hi ${name}`;
};

// Basic type inference
let counter = 0;

function increment(counter: number) {
	return counter++;
}
// Best common type algorithm
let items = [1, 2, 3, null];

let itemz = [0, 1, null, "Hi"];

let arr = [new Date(), new RegExp("d+")];

// Contextual typing
document.addEventListener("click", function (event) {
	console.log(event.button);
});

document.addEventListener("scroll", function (event) {
	console.log(event.button); // error
});

// Number Annotations

let counterS: number = 0;
let x: number = 100,
	y: number = 200;

let bin = 0b100;
let anotherBin: number = 0b010;

// Octal Numbers
let octal: number = 0o10;

// Hexadecimal numbers
let hexadecimal: number = 0xa;

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

// function changeStatus(status: boolean): boolean {
//     //...
// }

///// Objects ///////////////////////////////////////////

let employee: {
	firstName: string;
	lastName: string;
	age: number;
	jobTitle: string;
};

// let employee: object;

employee = {
	firstName: "John",
	lastName: "Doe",
	age: 25,
	jobTitle: "Web Developer",
};

console.log(employee);

// The empty type {}
// let vacant: {};
// vacant.firstName = 'John'; // error

let vacant: {} = {};

console.log(vacant.toString());
////////////////////////////////// ARRAY /////////////////////
let skills: string[] = [];
skills[0] = "Problem Solving";
skills[1] = "Programming";
skills.push("Software Design");

// INFER
// let skills = ['Problem Sovling','Software Design','Programming'];

// skills.push(100); error

let skill = skills[0];
console.log(typeof skill); // string

// TypeScript array properties and methods

let series = [1, 2, 3];
console.log(series.length); // 3

// And you can use all the useful array methods such as
// forEach(), map(), reduce(), and filter().For example:
let doubleIt = series.map((e) => e * 2);
console.log(doubleIt); // [ 2, 4, 6 ]

// Storing values of mixed types
let scores = ["Programming", 5, "Software Design", 4];

//////////////// Tuple ////////////
// The order of values in a tuple is important. If you change the order of values
// of the skill tuple to[5, "Programming"], you’ll get an error:
let skillz: [string, number];
skillz = ["Programming", 5];

let color: [number, number, number] = [255, 0, 0];

// Optional Tuple Elements using the question mark (?) postfix.
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

//////////////////////// ENUM ////////////////////////////
enum Month {
	Jan = 1,
	Feb,
	Mar,
	Apr,
	May,
	Jun,
	Jul,
	Aug,
	Sep,
	Oct,
	Nov,
	Dec,
}

function isItSummer(month: Month) {
	let isSummer: boolean;
	switch (month) {
		case Month.Jun:
		case Month.Jul:
		case Month.Aug:
			isSummer = true;
			break;
		default:
			isSummer = false;
			break;
	}
	return isSummer;
}

console.log(isItSummer(Month.Jun)); // true

//You should use an enum when you:
// Have a small set of closely related fixed values.
// And these values are known at compile time.
// For example, you can use an enum for the approval status:
enum ApprovalStatus {
	draft,
	submitted,
	approved,
	rejected,
}

const request = {
	id: 1,
	status: ApprovalStatus.approved,
	description: "Please approve this request",
};

if (request.status === ApprovalStatus.approved) {
	// send an email
	console.log("Send email to the Applicant...");
}

//////////////////////////// ANY ////////////////////
// when you migrate a JavaScript project over to a TypeScript project.
// And the unknown value may come from a third-party API or user input.

// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);

let resort: any;
resort = 10.123;
console.log(resort.toFixed());
resort.willExist(); // error on run time

////// Void type /////////////////////////
function log(message: string): void {
	console.log(message);
}

//////////// NEVER TYPE //////////////
function fn(a: string | number): boolean {
	if (typeof a === "string") {
		return true;
	} else if (typeof a === "number") {
		return false;
	}
	throw new Error("invalid type");
}

// OR
function raiseError(msg: string): never {
	throw new Error(msg);
}

function fnc(a: string | number): boolean {
	if (typeof a === "string") {
		return true;
	} else if (typeof a === "number") {
		return false;
	}
	return raiseError("Invalid type");
}

/////////////////// UNION TYPE //////////
let reZult: number | string;
reZult = 10; // OK
reZult = "Hi"; // also OK
reZult = false; // a boolean value, not OK

function add(a: number | string, b: number | string): number | string {
	if (typeof a === "number" && typeof b === "number") {
		return a + b;
	}
	if (typeof a === "string" && typeof b === "string") {
		return a.concat(b);
	}
	throw new Error("Parameters must be numbers or strings");
}

/////////// Type Aliases //////////////////
// type alias = existingType;
type Name = string;

let firstName: Name;
let lastName: Name;

type Person = {
	name: string;
	age: number;
};

let person: Person = {
	name: "John",
	age: 25,
};

type alphanumeric = string | number;

let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
input = false; // Compiler error

// Intersection Types under type aliases
type Personal = {
    name: string;
    age: number;
  };
  
  type Contact = {
    email: string;
    phone: string;
  };
  
  type Candidate = Personal & Contact;
  
  let candidate: Candidate = {
    name: "Joe",
    age: 25,
    email: "joe@example.com",
    phone: "(408)-123-4567"
  };
