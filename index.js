var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js');
var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js');

var app = express();

//var cart = []; this isn't being used 

//_____________________________________________LOGGER_____________________________________________
var logger = function(req, res, next) {
  console.log('\n\n------------------------------\n------------------------------\n\n');
  console.log('\n___HEADERS___\n', req.headers);
  console.log('\n___BODY___\n', req.body);
  console.log('\n___SESSION___\n', req.session);
  next();
};


//_____________________________________________BodyParser & Session & Cors Middleware__________________________________________



var corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(session({ secret: config.sessionSecret }));

//app.use(session({
//    secret: "alkjsleifl",
//    saveUninitialized: true,
//    resave: true
//}));


//____________________________________________POST_____________________________________________

app.post('/api/login', userCtrl.login);



//____________________________________________GET_____________________________________________



app.listen(3000, function() {
   console.log('listening to port 3000');
});