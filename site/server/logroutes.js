var express = require('express'),
    logroutes = express.Router(),
    bodyParser = require('body-parser');

var template = {
    upspeed: "double",
    expectedupspeed: "double",
    downspeed: "double",
    expecteddownspeed: "double",
    ping: "int",
    provider: ["Verizon", "Comcast", "ATT", "Verizon Wireless", "T-Mobile", "ATT Wireless"],
    location: "string"
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
    console.log(req.body);
    var log = req.body;
    log.links = {
        self: "/api/logs/1"
    };
    res.status(201).json(log);
});

module.exports = logroutes;
