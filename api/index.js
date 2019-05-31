const express = require('express');
const app = express();
const myParser = require("body-parser");
const ejs = require('ejs');

// set the view engine to ejs
app.set('view engine', 'ejs');
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(myParser.urlencoded({extended : true}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// set static file routes here
app.use(express.static(__dirname + '/public'));

// newsapi routes 
require('./controller/newsapi')(app);

app.get('/', (req, res) => {
    res.redirect('/topstories');
});


const PORT = process.env.PORT || 3001;
app.listen(PORT);