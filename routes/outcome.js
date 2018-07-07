var express = require('express');
var router = express.Router();

router

			.get('/', function (req, res, next) {
				res.status(200).json({ outcome: 'outcome' });
			})


			.get('/getOutcomeFixed', function (req, res, next) {
				res.status(200).json({ getOutcomeFixed: 'getOutcomeFixed' });
			})


			.get('/getOutcomeIncidental', function (req, res, next) {
				res.status(200).json({ getOutcomeIncidental: 'getOutcomeIncidental' });
			})


			.post('/addOutcome', function (req, res, next) {
				res.status(200).json({ addOutcome: 'addOutcome' });
			})


module.exports = router;