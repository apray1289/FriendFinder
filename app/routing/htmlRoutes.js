
var path = require("path");



var survey = function (req, res) {
    res.sendFile(path.join(__dirname, "../public", "survey.html"));

};

var home = function (req, res) {
    res.sendFile(path.join(__dirname, "../public", "home.html"));
};


module.exports = {
    survey:survey,
    home: home
}

