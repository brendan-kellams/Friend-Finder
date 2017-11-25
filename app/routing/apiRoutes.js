// Required Dependencies
var path = require('path');

// List of friend entries
var friends = require('../data/friends.js');

// Export routes
module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // Add new friend
    app.post('/api/friends', function(req, res) {
        var userInput = req.body;

        var userResponses = userInput.scores;

        var nameMatch = '';
        var imageMatch = '';
        var difference = 1000;

        // Look through existing friends in the list
        for (var i = 0; i < friends.length; i++) {
            
            // Calculate differences for each user
            var diff = 0
            for (var x = 0; x < userResponses.length; x++) {
                diff += Math.abs(friends[i].scores[x] - userResponses[x]);
            }
            
            // When there is the lowest difference, then match users
            if (diff < difference) {
                difference = diff;
                nameMatch = friends[i].name;
                imageMatch = friends[i].photo;
            }
        }

        // Adding new user
        friends.push(userInput);

        // Send response
        res.json({status: "OK", nameMatch: nameMatch, imageMatch: imageMatch});
    })
}