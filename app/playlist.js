const jsonReader = require("./jsonReader");

const google = require("googleapis");
const yt = google.youtube('v3');

var responses = [];
function getAllData(startToken, playlistId, callback) {
    jsonReader.getApiKey((key) => {
        yt.playlistItems.list({
            key: key,
            part: 'snippet',
            playlistId: playlistId,
            maxResults: 50,
            pageToken: startToken
        }, (err, data) => {
            data.items.forEach((item) => {
                responses.push(item);
            });

            if (data.nextPageToken) {
                getAllData(data.nextPageToken, playlistId, callback)
            } else {
                callback(err, responses);
                responses = [];
            }
        });
    });
}

module.exports.getAllData = getAllData;