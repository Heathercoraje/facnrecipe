const dbConnection = require('../database/db_connection');

const addData = (name, ingredients, directions, origin, cb) => {
	const myQuery = `INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions, recipe_origin) VALUES ($1, $2, $3, $4);`;
	console.log(name, ingredients, directions, origin);
	dbConnection.query(
		myQuery,
		[name, ingredients, directions, origin],
		(err, res) => {
			if (err) {
				return cb(err);
			} else {
				console.log('success adding new recipe');
				cb(null, res);
			}
		}
	);
};

module.exports = addData;
