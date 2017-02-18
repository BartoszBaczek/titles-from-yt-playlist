const google = require("googleapis");
const apiKeyReader = require("./apiKeyReader");

function getData(callback) {
    
    apiKeyReader.getKey((key) => {
        let yt = google.youtube('v3');
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