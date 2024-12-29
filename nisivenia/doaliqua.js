let nthString = "123"; // A string representing a number
let nth = +nthString; // Coerce the string into a number
console.log(nth); // Output: 123 (a number)

let nthBoolean = true; // A boolean value
nth = +nthBoolean; // Coerce the boolean into a number
console.log(nth); // Output: 1 (true is coerced to 1 when converted to a number)

let nthUndefined = undefined; // An undefined value
nth = +nthUndefined; // Coerce the undefined value into a number
console.log(nth); // Output: NaN (undefined cannot be coerced into a number)
