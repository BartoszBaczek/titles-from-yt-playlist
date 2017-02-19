const jsonfile = require('jsonfile');
const apiKeyFile = __dirname + "/resources/apiKey.json";
const playlistDataFile = __dirname + "/resources/playlistData.json";


function getApiKey(callback) {
    jsonfile.readFile(apiKeyFile, (err, obj) => {
        callback(obj.key)
    });
}

module.exports.getApiKey = getApiKey;