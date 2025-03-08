// 1. Function Declaration
function sayHello(name) {
    return "Hello, " + name + "!";
}
console.log(sayHello("Erta")); // Hello, Erta!

// 2. Function Expression
const addNumbers = function(a, b) {
    return a + b;
};
console.log(addNumbers(5, 3)); // 8

// 3. Arrow Function
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(4, 2)); // 8

// Arrow function satu baris
const square = num => num * num;
console.log(square(6)); // 36

// 4. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE is executed immediately!");
})(); // IIFE is executed immediately!

// IIFE dengan parameter
(function(city) {
    console.log("Welcome to " + city);
})("Jakarta"); // Welcome to Jakarta

// 5. Method in Object
const car = {
    brand: "Toyota",
    start() {
        return "The " + this.brand + " car has started.";
    }
};
console.log(car.start()); // The Toyota car has started.

// 6. Constructor Function
function Animal(type) {
    this.type = type;
    this.speak = function() {
        return "This is a " + this.type;
    };
} 
const cat = new Animal("Cat");
console.log(cat.speak()); // This is a Cat

// 7. Generator Function
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1

// 8. Async Function
async function getMessage() {
    return "Data retrieved successfully!";
}
getMessage().then(console.log); // Data retrieved successfully!

// Async function dengan await
async function fetchUserData() {
    let user = await Promise.resolve({ name: "Erta", age: 25 });
    console.log("User:", user);
}
fetchUserData(); // User: { name: "Erta", age: 25 }
