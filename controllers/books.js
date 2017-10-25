var express = require('express');
var bookRouter = express.Router();
var bookQuery = require('../server/db/bookQuery');
var query = new bookQuery();

bookRouter.get('/', function(req, res) {
  query.all(function(results){
    res.json(results);
  });
});

module.exports = bookRouter;
