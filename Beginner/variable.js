var a = 1;
let b = true;
const c = 3.14;

console.log("Before");
console.log(a);
console.log(b);
console.log(c);

a %= 2;
b = false;
// c = 5; Error

console.log("After");
console.log(a);
console.log(b);
console.log(c);