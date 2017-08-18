const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const nodeRestClient = require('node-rest-client').Client;
const restClient = new nodeRestClient();

const BACKEND_SERVER_URL = 'http://localhost:5000/';


router.get('/folders', function(req, res) {
    restClient.get(BACKEND_SERVER_URL + 'folders', function (data, response) {
        res.json(data);
    }); 
});


router.get('/courses', function(req, res) {
    restClient.get(BACKEND_SERVER_URL + 'courses', function (data, response) {
        res.json(data);
    }); 
});


router.get('/questions', function(req, res) {
    restClient.get(BACKEND_SERVER_URL + 'questions', function (data, response) {
        res.json(data);
    }); 
});

router.get('/folders/:id', function(req, res) {
    let id = req.params.id;
    restClient.get(BACKEND_SERVER_URL + 'folders/' + id, function (data, response) {
        res.json(data);
    }); 
});

router.get('/courses/:id', function(req, res) {
    let id = req.params.id;
    restClient.get(BACKEND_SERVER_URL + 'courses/' + id, function (data, response) {
        res.json(data);
    }); 
});

router.get('/questions/:id', function(req, res) {
    let id = req.params.id;
    restClient.get(BACKEND_SERVER_URL + 'questions/' + id, function (data, response) {
        res.json(data);
    }); 
});

router.post('/questions', jsonParser, function(req, res) {
    let args = {};
    args.data = req.body;
    args.headers = {'Content-Type': 'application/json'}; // add headers

    restClient.post(BACKEND_SERVER_URL + 'questions', args, function (data, response) {
        res.json(data);
    });
});

router.put('/questions/:id', jsonParser, function(req, res) {
    let id = req.params.id;
    let args = {};
    args.data = req.body;
    args.headers = {'Content-Type': 'application/json'}; // add headers

    restClient.put(BACKEND_SERVER_URL + `questions/${id}`, args, function (data, response) {
        console.log("----------------- PUT rest: " + req.body);
        console.log("------------------PUT rest response: " + data);
        res.json(data);
    });
});

module.exports = router;