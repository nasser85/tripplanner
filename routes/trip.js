var Express = require('express');
var router = new Express();
var Promise = require('bluebird');
var db = require('../models').db;
var Place = require('../models').place;
var Hotel = require('../models').hotel;
var Restaurant = require('../models').restaurant;
var Activity = require('../models').activity;


module.exports = router;

router.get('/', function(req, res, next) {
	Hotel.findAll({}).then(function (dbHotels) {
	  Restaurant.findAll({}).then(function (dbRestaurants) {
	    Activity.findAll({}).then(function (dbActivities) {
	      // res.render('index', {
	      //   templateHotels: dbHotels,
	      //   templateRestaurants: dbRestaurants,
	      //   templateActivities: dbActivities
	      // });
	    res.json({hotels: dbHotels, restaurants: dbRestaurants, activities: dbActivities});
	    }).then(null, console.log);
	  }).then(null, console.log);
	}).then(null, console.log);
	
})
