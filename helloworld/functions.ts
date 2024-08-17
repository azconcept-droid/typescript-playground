function add(a: number, b: number): number {
	return a + b;
}

function echo(message: string): void {
	console.log(message.toUpperCase());
}

////////// Function types /////////

let sub: (x: number, y: number) => number;

let adds: (a: number, b: number) => number = function (x: number, y: number) {
	return x + y;
};

let result = adds(10, 20);

////////// Optional parameters

function multiply(a: number, b: number, c?: number): number {
	if (typeof c !== "undefined") {
		return a * b * c;
	}
	return a * b;
}

/////// Default parameters
function applyDiscount(price: number, discount: number = 0.05) {
	return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95

function getDay(
	year: number = new Date().getFullYear(),
	month: number
): number {
	let day = 0;
	switch (month) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			day = 31;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			day = 30;
			break;
		case 2:
			// leap year
			if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) day = 29;
			else day = 28;
			break;
		default:
			throw Error("Invalid month");
	}
	return day;
}
//////////////// REST //////////
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60

function combine(...args: (number | string)[]): [number, string] {
    let total = 0;
    let str = '';
    args.forEach((arg) => {
      if (typeof arg === 'number') {
        total += arg;
      } else if (typeof arg === 'string') {
        str += arg;
      }
    });
  
    return [total, str];
  }
  
  const [total, str] = combine(3, 'Happy', 2, 1, ' New Year');
  
  console.log({ total });
  console.log({ str });

//////////////// Overloaded Function ////////////////
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;

function adding(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}

console.log(adding(10, 20));  // 30
console.log(adding('Hello, ', 'world!'));  // 'Hello, world!

class Counter {
    private current = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
      if (target) {
        let values: number[] = [];
        for (let start = this.current; start <= target; start++) {
          values.push(start);
        }
        // set current to target
        this.current = target;
        return values;
      }
      return ++this.current;
    }
}
  
let counter = new Counter();

console.log(counter.count()); // return a number
console.log(counter.count(5)); // return an array
  
