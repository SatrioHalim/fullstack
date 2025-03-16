/*
    FUNCTION
*/
// declaration
function kali(){
    console.log("kali");
}

// ekspression
const hello = function(){
    console.log("hello");
}

// Arrow 
const kali2 = ()=>{
    console.log("kali");
}

/*

    NEW FUNCTION
    
 */

let numbers = [2,3,5,7,8,13];

// numbers.forEach(number => {
//     console.log(number);
// });

let result = numbers.map(number => {
    return number * 2;
})
// console.log(result);

/**
 * 
 *  DESTRUCTURING ARRAY
 * 
 */

let students = ["Andi", 3.21 , true];

let [name, gpa, isGraduate] = students;
console.log(name);
console.log(gpa);
console.log(isGraduate);