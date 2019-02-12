var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var app = express();
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/mdb', { useNewUrlParser: true, promiseLibrary: require('bluebird') })
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

var movie = require('./routes/movie');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/movie', movie);

app.listen(3003, function () {
    console.log('The server is running at port 3003!!');
})