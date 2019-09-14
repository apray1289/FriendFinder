var friends = require("../data/friends");



var pullFriends = function (req, res){
    return res.json(friends);
}

var sendUserAnswers = function (req, res){
    var userName = req.body.name;
  var userPhoto = req.body.photo;
  var userScores = req.body.scores;

  var smallestDiff = 100;
  var myFriend;
  for (var i = 0; i < friends.length; i++) {
    var totalDiff = 0;

    for (var j = 0; j < userScores.length; j++) {
      totalDiff += Math.abs(userScores[j] - friends[i].scores[j]);

      if (totalDiff < smallestDiff) {
        smallestDiff = totalDiff;
        myfriend = friends[i];
      }
    }
  }
  return res.json(myfriend);
}

module.exports = {
    pullFriends: pullFriends,
    sendUserAnswers: sendUserAnswers
}