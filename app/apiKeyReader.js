const jsonfile = require('jsonfile');
const apiKeyFile = __dirname + "/resources/apikey.json";

function getKey(callback) {
    jsonfile.readFile(apiKeyFile, (err, obj) => {
        callback(obj.key)
    });

}

module.exports.getKey = getKey;