var Express = require('express');
var app = new Express();

var bodyParser = require('body-parser');
var swig = require('swig');
var morgan = require('morgan');
var router = require('./routes/trip')

app.engine('html', swig.renderFile); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
app.set('views','./views'); // where to find the views
swig.setDefaults({ cache: false });
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

app.use('/bootstrap', Express.static('node_modules/bootstrap/dist'));
app.use('/jquery', Express.static('node_modules/jquery/dist'));

app.use('/', router);
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render(
    // ... fill in this part
  );
});

app.listen(3000, function() {
	console.log('Server is listening on port 3000!')
})
