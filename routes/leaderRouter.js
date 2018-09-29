const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.status = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('will send all the leaders to you');
    })
    .post((req, res) => {
        res.end('will add the leader: ' + req.body.name + ' with details ' + req.body.description);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on leaders');
    })
    .delete((req, res) => {
        res.end('Deleting all the leaders!');
    });

leaderRouter.route('/:leaderId')
    .get((req, res) => {
        res.end('will send the details of leader: ' + req.params.leaderId + ' to you');
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on leaders/' + req.params.leaderId);
    })
    .put((req, res) => {
        res.write('updating the leader: ' + req.params.leaderId + '\n');
        res.end('will update the leader: ' + req.body.name + ' with details ' + req.body.description);
    })
    .delete((req, res) => {
        res.end('Deleting the leader ' + req.params.leaderId);
    });

module.exports = leaderRouter;