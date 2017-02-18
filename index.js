const playlist = require("./app/playlist");
const express = require("express");

const port = 3000;

let app = express();

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/playlistContent', (req, res) => {
    let titles = [];

    playlist.getAllData(null, (err, data) => {
        if (err) {
            console.log(`ERROR: ${err}`);
        }
        if (data) {
            data.forEach((singleData) => {
                titles.push(singleData.snippet.title);
            });
            
            res.send(titles);
        }
    });
})

let server = app.listen(port, () => {
    console.log(`Listening on ${port}`);
});





