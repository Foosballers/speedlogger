var express = require('express'),
    logroutes = express.Router(),
    bodyParser = require('body-parser');

var template = {
    'upspeed': 'double',
    'expected-upspeed': 'double',
    'downspeed': 'double',
    'expected-downspeed': 'double',
    'provider': 'string',
    'location': 'string',
    'test-host': {'latency': 'double', 'lat': 'double', 'lon':'double', 'name': 'string', 'sponsor': 'string'}
};

logroutes.get('/', (req, res) => {
    res.json({
        items: [],
        template: template
    });
});

logroutes.get('/:id', (req, res) => {
    res.json({
        id: req.params.id
    });
});

logroutes.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    var log = req.body;
    log.links = {
        self: "/api/logs/1"
    };
    res.status(201).json(log);
});

module.exports = logroutes;
