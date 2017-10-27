var express = require('express');
var router = express.Router();
var usersList = [
  { id: 1, name: "John Stewart"},
  { id: 2, name: "Eric Cartman"},
  { id: 3, name: "Bruce Wayne"},
  { id: 4, name: "Clark Kent"},
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {title: "Users List", users: usersList})
});

module.exports = router;
