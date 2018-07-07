var express = require('express');
var router = express.Router();

router

			.get('/', function (req, res, next) {
				res.status(200).json({ Income: 'Income' });
			})


			.get('/getIncomeFixed', function (req, res, next) {
				res.status(200).json({ getIncomeFixed: 'getIncomeFixed' });
			})


			.get('/getIncomeIncidental', function (req, res, next) {
				res.status(200).json({ getIncomeIncidental: 'getIncomeIncidental' });
			})


			.post('/addIncome', function (req, res, next) {
				res.status(200).json({ addIncome: 'addIncome' });
			})


module.exports = router;