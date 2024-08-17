for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
for (; i < 10; i++) {
    console.log(i);
}

for (let i = 0; ; i++) {
    console.log(i);
    if (i > 9) break;
}

let j = 0;
for (; ;) {
    console.log(j);
    j++;
    if (j > 9) break;
}


let counters = 0;

while (counter < 5) {
    console.log(counters);
    counters++;
}


// let list = document.querySelector('#list');

// while (list.firstChild) {
//     list.removeChild(list.firstChild);
// }

let k = 0;

do {
    console.log(k);
    k++
} while (i < 10);

let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

for (var i = 0; i < products.length; i++) {
    if (products[i].price == 900)
        break;
}

// show the products
console.log(products[i]);

for (let index = 0; index < 9; index++) {
    
    // if index is odd, skip it
    if (index % 2)
        continue;

    // the following code will be skipped for odd numbers
    console.log(index);
}

let index = -1;

while (index < 9) {

    index = index + 1;

    if (index % 2)
        continue;

    console.log(index);
}

let indexes = 9;
let count = 0;

do {
    indexes += 1;

    if (indexes % 2)
        continue;
    count += 1;
} while (indexes < 99);


console.log(count); // 45
