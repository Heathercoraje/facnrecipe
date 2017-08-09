const http = require('http');
const path = require('path');
const fs = require('fs');
const pg = require('pg');
const getData = require('./getData');
const dbConnection = require('../database/db_connection');

const router = (request, response) => {

  const endpoint = request.url.split('/')[1];

  if (endpoint === '') {
    fs.readFile(__dirname + "/../views/index.html", function(error, file) {
      if (error) {
        response.writeHead(500, 'Content-Type:text/html');
        response.end('<h1>Sorry, there was a problem loading the homepage</h1>');
        console.log(error);
      } else {
        response.writeHead(200, {
          "Content-Type": "text/html"
        });
        response.end(file);
      }
    });
  } else if (endpoint === "Asian") {
    getData('Asian', (err, res) => {
      if (err)
        return console.log('error querying the db');
      const data = JSON.stringify(res);
      response.writeHead(200, {
        'content-type': 'application/json'
      });
      response.end(data);
    });
  } else if (endpoint === "Arabic") {
    getData('Arabic', (err, res) => {
      if (err)
        return console.log('error querying the db');
      const data = JSON.stringify(res);
      response.writeHead(200, {
        'content-type': 'application/json'
      });
      response.end(data);
    });
  } else if (endpoint === "Italian") {
    getData('Italian', (err, res) => {
      if (err)
        return console.log('error querying the db');
      const data = JSON.stringify(res);
      response.writeHead(200, {
        'content-type': 'application/json'
      });
      response.end(data);
    });
  } else if (endpoint === "British") {
    getData('British', (err, res) => {
      if (err)
        return console.log('error querying the db');
      const data = JSON.stringify(res);
      response.writeHead(200, {
        'content-type': 'application/json'
      });
      response.end(data);
    });
  }

  // else if (endpoint === 'create-user') {
  //   let str = '';
  //   request.on('data', (chunk) => {
  //     str += chunk;
  //   });
  //   request.on('end', () => {
  //     const name = str.split('&')[0].split('name=')[1];
  //     const location = str.split('&')[1].split('location=')[1];
  //     const updateData = `INSERT INTO users (name, location) VALUES ('${name}','${location}');`;
  //     dbConnection.query(updateData, (err, res) => {
  //       if (err) console.log(err);
  //       console.log('new data entered');
  //     });
  //     response.writeHead(302, {
  //       'location': '/'
  //     });
  //     response.end();
  //   });
  // }
  else if (endpoint.indexOf('views') !== -1) {
    const fileName = request.url;
    const fileType = request.url.split(".")[1];
    const filePath = path.join(__dirname, "..", fileName);
    fs.readFile(filePath, function(error, file) {
      if (error) {
        response.writeHead(500, 'Content-Type:text/html');
        response.end('<h1>Sorry, there was a problem loading this page</h1>');
        console.log(error);
      } else {
        response.writeHead(200, {
          "Content-Type": "text/" + fileType
        });
        response.end(file);
      }
    });
  } else {
    response.writeHead(404, "Content-Type:text/html");
    response.end("<h1>404 not found</h1>");
  }

};

module.exports = router;
