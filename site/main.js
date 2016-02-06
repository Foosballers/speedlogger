var path = require('path'),
    logroutes = require('./server/logroutes'),
    express = require('express'),
    bodyParser = require('body-parser');

// // Angular 2
// import {ng2engine, BASE_URL, SERVER_LOCATION_PROVIDERS} from 'angular2-universal-preview';
// import {provide, enableProdMode} from 'angular2/core';
// import {APP_BASE_HREF, ROUTER_PROVIDERS} from 'angular2/router';
// import {App} from './app/app';
//
var app = express(),
    root = '.';

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//
// enableProdMode();
//
// // Express View
// app.engine('.html', ng2engine);
// app.set('views', __dirname);
// app.set('view engine', 'html');
//
// // ngApp
// function ngApp(req, res) {
//   let baseUrl = '/';
//   let url = req.originalUrl || '/';
//
//   res.render('index', {
//     App,
//     providers: [ ],
//     preboot: true
//   });
// }

// Serve static files
app.use(express.static(root, {
    index: false
}));

app.use('/api/logs', logroutes);

// Server
app.listen(3000, () => {
    console.log('Listen on http://localhost:3000');
});