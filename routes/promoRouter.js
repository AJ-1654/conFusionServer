const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.status = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('will send all the promotions to you');
    })
    .post((req, res) => {
        res.end('will add the promotion: ' + req.body.name + ' with details ' + req.body.description);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on promotions');
    })
    .delete((req, res) => {
        res.end('Deleting all the promotions!');
    });

promoRouter.route('/:promoId')
    .get((req, res) => {
        res.end('will send the details of promotion: ' + req.params.promoId + ' to you');
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on promotions/' + req.params.promoId);
    })
    .put((req, res) => {
        res.write('updating the promotion: ' + req.params.promoId + '\n');
        res.end('will update the promotion: ' + req.body.name + ' with details ' + req.body.description);
    })
    .delete((req, res) => {
        res.end('Deleting the promotion ' + req.params.promoId);
    });

module.exports = promoRouter;