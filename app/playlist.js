const jsonReader = require("./jsonReader");

const google = require("googleapis");
const yt = google.youtube('v3');

function getData(callback) {
    
    jsonReader.getApiKey((key) => {
        yt.playlistItems.list({
            key: key,
            part: 'snippet',
            playlistId: 'PLOnoN1ELl39q0ORoNfOqm5x0g6h6EnPg3'
        }, (err, data) => {
            callback(err, data)
        });
    });
}

module.exports.getData = getData;