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

router.post('/folders/:id', function(req, res) {
    const id = req.params.id;
    restClient.post(BACKEND_SERVER_URL + 'folders/:id', req.body, function (data, response) {
        res.json(data);
    });
});

module.exports = router;