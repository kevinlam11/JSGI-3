// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3));
//   // prints "Each person gets 2.67 slices of pizza"

function slices(x) {
  return function (y) {
    return "Each person gets " + (x / y).toFixed(2) + " slices of pizza"; //toFixed method rounds to nearest tenth
  };
}
var shared = slices(8); //Indicates how many slices there are
console.log(shared(2));
console.log(shared(3));
console.log(shared(4));
