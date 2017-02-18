const playlist = require("./app/playlist");
const express = require("express");
const port = 3000;

let app = express();

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/playlistContent/:playlistId', (req, res) => {

    let titles = [];
    
    playlist.getAllData(null, req.params.playlistId, (err, data) => {
        if (data) {
            data.forEach((singleData) => {
                titles.push({"titles": singleData.snippet.title});
            });

            let response = {
                "titles": titles
            };

            res.send(response);
        }
    });
})

let server = app.listen(port, () => {
    console.log(`Listening on ${port}`);
});





