var express = require('express');
var router = express.Router();

var schedule = require('./schedule');

router.get('/schedule',schedule.getData);

router.get('/*',function(req,res){
	res.render('index', {title: req.url});
});

module.exports = router 
