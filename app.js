
var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
    var posts = [
        {
          author: 'someone',
          text: 'This is post 1'
        },
        {
          author: 'someone else',
          text: 'This is post 2'
        }
      ];

    res.render('home', {
      posts: posts
    });
});

app.get('/sign-in', function (req, res) {
  res.render('sign-in', {test:123});
});

app.get('/publish', function (req, res) {
  res.render('publish', {test:123});
});


app.listen(3000);

console.log('http://localhost:3000')
