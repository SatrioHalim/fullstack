/*
    Check Prime Number

    => A number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).
    => The number 1 is not a prime number.
*/

const isPrime = (number) => {
    if(number < 2) return false;
    else if (number === 2) return true;
    else {
        for(var i = 2; i < number; i++){
            if(number % i == 0) return false;
        }
    }
        
    return true;
}

function boolPrime(){
    for (let i = 1; i <= 10; i++) {
        console.log(i + " is prime number: " + isPrime(i));        
    }
}

// boolPrime();

/*
 
    Convert to Uppercase

    input :
    String => "hello world"
    String => "HeLlo WorLD"

    Ouput :
    String => "HELLO WORLD"
    String => "HELLO WORLD"

 */

const toUpperCase = (str) => {
    str = String(str);
    return str.toUpperCase();
}

// console.log(toUpperCase("hello world"));
// console.log(toUpperCase("HeLlo WorLD"));

/*
    Find Max and Min Number

    input :
    Array => 0,15,6,2,3

    Output
    Max => 15
    Min => 0
*/

const findMaxMin = (arr) => {
    maxNum = arr[0];
    minNum = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maxNum) maxNum = arr[i];
        if(arr[i] < minNum) minNum = arr[i];
    }

    return {
        max: maxNum,
        min: minNum
    }
}

// console.log(findMaxMin([7,15,6,2,3]));


/*

    Count vocal in Sentence

    input :
    String => "hello world"

    Output : 
    vocal => 3

*/

const countVocal = (str) => {
    var count = 0;
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o') count++;
    }
    return count;
}

// console.log(countVocal("hEllo world"));


/*

    Find the highest average

    input :
    Array =>[
                [7,15,6,2,3], 
                [3,15,6,2,3], 
                [1,9,6,2,4] 
            ] 

    Output :
    [7,15,6,2,3] => 6.6

*/

const highestAverage = (arr) => {
    let highestAvg = 0;
    let highestIdx = 0;
    
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = 0; j < arr[i].length; j++){
            sum += arr[i][j];
        }
        let avg = sum / arr[i].length;
        if(avg > highestAvg){
            highestAvg = avg;
            highestIdx = i;
        }
    }

    return {
        array: arr[highestIdx],
        average: highestAvg
    }
}

console.log(highestAverage([
    [7,15,6,2,3], 
    [3,15,6,2,3], 
    [1,9,6,2,4] 
] ));