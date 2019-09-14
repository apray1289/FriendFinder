var express = require("express");
var path = require("path");
var htmlRoute = require("./app/routing/htmlRoutes");
var apiRoute = require("./app/routing/apiRoutes");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 3001;

app.get("/api/friends", apiRoute.pullFriends);
app.post("/api/friends", apiRoute.sendUserAnswers);

app.get("/survey", htmlRoute.survey);
app.get("/", htmlRoute.home);

app.listen(PORT, function(){
console.log(`App is listening on ${PORT}`);


});

