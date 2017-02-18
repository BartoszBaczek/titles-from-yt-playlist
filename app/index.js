const calc = require("./calc");
const fs = require("fs");



// easy

const numbersToAdd = [1, 2, 3, 4];

const result = calc.sum(numbersToAdd);
console.log(`result is ${result}`)


// read file

fs.readFile(__dirname + '/commons/file.txt', 'utf-8', (err, content) => {
    if (err) {
         return console.log(err);
    }

    console.log(content);
});