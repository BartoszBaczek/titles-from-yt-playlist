const playlist = require("./server/playlist");
const express = require("express");

let app = express();

app.set('port', (process.env.PORT || 3001));

app.use(express.static('client/public'));

app.get('/playlistid', (req, res) => {

    const playlistID = req.query.q;

    let titles = [];
    
    playlist.getAllData(playlistID, null, (err, data) => {
        if (err) {
            console.log(`ERROR: ${err}`);
        }
        if (data) {
            data.forEach((singleData) => {
                titles.push({"title": singleData.snippet.title});
            });
        }

        res.json(JSON.stringify(titles));
    });
})

app.get('*', (req, res) => {

    let response = {"404": "404"}

    res.json(JSON.stringify(response));
})


app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`);
});





