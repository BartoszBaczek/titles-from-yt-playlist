const calc = require("./calc");
const fs = require("fs");
const http = require("http");
const port = 3000;


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


// http (version without express)
const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js server!');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log(`server is listening on port ${port}`);
});