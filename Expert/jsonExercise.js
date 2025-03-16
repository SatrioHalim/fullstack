const fs = require('fs');
let data = fs.readFileSync('./data.json', 'utf8');

let parseData = JSON.parse(data);
// console.log(parseData);
// console.log(data); 


console.log("List of students : ");
parseData.forEach(data => {
    console.log(`${data.id}. ${data.name}, Age : ${data.age}`);
});

