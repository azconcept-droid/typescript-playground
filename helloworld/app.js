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
