const google = require("googleapis");
const yt = google.youtube('v3');

var responses = [];
function getAllData(playlistId, startToken, callback) {
        yt.playlistItems.list({
            key: "AIzaSyBMYcLHyGpd4nLq-9S_J9Iv94Q4l7hVMAQ",
            part: 'snippet',
            playlistId: playlistId,
            maxResults: 50,
            pageToken: startToken
        }, (err, data) => {
            data.items.forEach((item) => {
                responses.push(item);
            });

            if (data.nextPageToken) {
                getAllData(playlistId, data.nextPageToken, callback)
            } else {
                callback(err, responses);
                responses = [];
            }
        });
}

module.exports.getAllData = getAllData;