const jsonReader = require("./jsonReader");

const google = require("googleapis");
const yt = google.youtube('v3');

var responses = [];
function getAllData(startToken, callback) {
    jsonReader.getApiKey((key) => {
        yt.playlistItems.list({
            key: key,
            part: 'snippet',
            playlistId: 'PLOnoN1ELl39q0ORoNfOqm5x0g6h6EnPg3',
            maxResults: 50,
            pageToken: startToken
        }, (err, data) => {
            data.items.forEach((item) => {
                responses.push(item);
            });

            if (data.nextPageToken) {
                getAllData(data.nextPageToken, callback)
            } else {
                callback(err, responses);
            }
        });
    });
}

module.exports.getAllData = getAllData;