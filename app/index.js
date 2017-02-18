const express = require("express");
const yt = require("youtube-api");
const port = 3000;


let app = express();
app.get('/', (req, res) => {
    res.send('here we go');
});

let server = app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
