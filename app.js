
var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function (req, res) {
    res.render('home', {test:123});
});

app.listen(3000);
