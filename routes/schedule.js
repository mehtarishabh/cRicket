var request = require('supertest');
var url = "http://api.espncricinfo.com";
var cal=require('./calendar');

var schedule = {
    getData: function(req, res) {	  
	    var date=new Date(cal['VEVENT'][0]['DTEND']);
		// console.log('date:',date);
		// console.log('test:',cal['VEVENT'][0]['DTEND']);
		res.status(200).send(cal);
    }

}


module.exports = schedule;