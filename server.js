// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var methodOverride = require('method-override');
var path = require('path')
var morgan = require('morgan')
var expresshbs = require('express-handlebars')

// new express app
var app = express()

// routes
var routes = require('./controllers/routes.js');

// middleware
app.use(morgan('dev'))
app.engine('hbs', expresshbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(methodOverride('_method'));
app.use('/',routes);



// your code here...
app.get('/', function (req, res) {
  res.render('index')
})

var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
})
