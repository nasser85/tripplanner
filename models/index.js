var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost/tripplanner', {
  logging: true
});

var place = db.define('place', {
	address: {
		type: Sequelize.TEXT
	},
	city: {
		type: Sequelize.TEXT
	},
	state: {
		type: Sequelize.TEXT
	},
	phone: {
		type: Sequelize.STRING
	},
	locations: {
		type: Sequelize.ARRAY(Sequelize.FLOAT)
	}
});

var hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING
	},
	num_states: {
		type: Sequelize.INTEGER
	},
	amenities: {
		type: Sequelize.STRING
	}
});

var activity = db.define('activity', {
	name: {
		type: Sequelize.STRING
	},
	age_range: {
		type: Sequelize.STRING
	}
});

var restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING
	},
	cuisine: {
		type: Sequelize.STRING
	},
	price: {
		type: Sequelize.INTEGER
	}
});

hotel.belongsTo(place);
restaurant.belongsTo(place);
activity.belongsTo(place);

module.exports = {
	db: db,
	hotel: hotel,
	place: place,
	activity: activity,
	restaurant: restaurant
};