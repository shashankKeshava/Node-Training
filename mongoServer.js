var express = require('express');
var mongoose = require('mongoose');

console.log("starting server on 4200 ...");
console.log(mongoose);

mongoose.connect('mongodb://ted:ted@ds061797.mongolab.com:61797/theenlighteneddeveloper', function(error) {
    if (error) {
        console.log(error);
    }
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String
});

// Mongoose Model definition
// users in the name of the DB and UserSchema is the defination of the Schema
var User = mongoose.model('users', UserSchema);

var app = express();

app.get('/', function(req, res) {
    res.send("<html><body> <a href='/users'>Show Users</a></body></html> ");
});

app.get('/users', function(req, res) {
    User.find({}, function(err, docs) {
        res.json(docs);
    });
});

app.get('/users/:email', function(req, res) {
    if (req.params.email) {
        User.find({ email: req.params.email }, function(err, docs) {
            res.json(docs);
        });
    }
});

// Start the server
app.listen(4200);
