const calc = require("./calc");
const fs = require("fs");



// easy

const numbersToAdd = [1, 2, 3, 4];

const result = calc.sum(numbersToAdd);
console.log(`result is ${result}`)


// read file

let content;

try {
    content = fs.readFileSync(__dirname + '/commons/file.txt', 'utf-8');
} catch (er) {
    console.log(er);
}

console.log(`hehe udalo sie ${content}`);