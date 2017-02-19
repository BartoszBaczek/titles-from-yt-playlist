const playlist = require("./server/playlist");
const express = require("express");

let app = express();

app.set('port', (process.env.PORT || 3001));

app.use(express.static('client/public'));

app.get('/abc', (req, res) => {

    console.log('i got request')
    let titles = [];
    
    playlist.getAllData(null, (err, data) => {
        if (data) {
            data.forEach((singleData) => {
                titles.push({"titles": singleData.snippet.title});
            });

            let response = {
                "titles": titles
            };
            res.json(JSON.stringify(response));
        }
    });
})

app.get('*', (req, res) => {
    res.json({"value": "gowno w mojej dupie"})
})


app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`);
});





