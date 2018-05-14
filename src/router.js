const http = require('http');
const qs = require('querystring');
const pg = require('pg');
const getData = require('./query/getData');
const addData = require('./query/addData');
const handlerForViews = require('./handlerForViews');

const router = (request, response) => {
	const endpoint = request.url.split('/')[1];

	if (endpoint === '') {
		handlerForViews(request, response, '/public/index.html');
	} else if (endpoint.match('^Asian|Arabic|British|Italian$')) {
		// when user clicks buttons
		getData(endpoint, (err, res) => {
			if (err) {
				response.writeHead(500, 'Content-Type:text/html');
				response.end(
					'<h1>Sorry, There was a problem retreiving data. Please try again</h1>'
				);
				console.log('Error while querying recipes from data');
				return;
			}
			const data = JSON.stringify(res);
			response.writeHead(200, {
				'content-type': 'application/json'
			});
			response.end(data);
		});
	} else if (endpoint === 'add') {
		// when user adds new recipes
		let str = '';
		request.on('data', chunk => {
			str += chunk;
		});
		request.on('end', () => {
			const { name, ingredients, directions, origin } = qs.parse(str);
			addData(name, ingredients, directions, origin, (err, res) => {
				if (err) {
					response.writeHead(500, 'Content-Type:text/html');
					response.end(
						'<h1> There was a problem adding new recipe. Please try again</h1>'
					);
					console.log('Error while adding new item to DB');
				} else {
					// after adding new data, redirect user to the base
					response.writeHead(302, {
						location: `/${origin}`
					});
					response.end();
				}
			});
		});
	} else if (endpoint.indexOf('public') !== -1) {
		handlerForViews(request, response, request.url);
	} else {
		response.writeHead(404, 'Content-Type:text/html');
		response.end('<h1>404 not found</h1>');
	}
};

module.exports = router;
