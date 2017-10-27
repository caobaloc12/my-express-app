var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('products', {title: "Products", message: "Products page workds!"})
})

module.exports = router;