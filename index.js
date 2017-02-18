const playlist = require("./app/playlist");
const express = require("express");

const port = 3000;

let app = express();

app.get('/', (req, res) => {
    playlist.getData((err, data) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send(data);
        }
    });
});

let server = app.listen(port, () => {
    console.log(`Listening on ${port}`);
});





