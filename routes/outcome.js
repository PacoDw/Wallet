var express = require('express');
var router = express.Router();

router

			.get('/', function (req, res, next) {
				res.status(200).json({ outcome: 'outcome' });
			})


			.get('/getOutcomeFixed/:id', function (req, res, next) {
				const db = require('../database/config');	
				let id = req.params.id;
				db.query('select amount, description from movements where movement_type = "Gasto Fijo" && id_wallet = ?',id , (err, rows, fields) => {
					console.log(rows);
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json({ ok: rows });
					}
				})
			})


			.get('/getOutcomeIncidental/:id', function (req, res, next) {
				const db = require('../database/config');	
				let id = req.params.id;
				db.query('select amount, description from movements where movement_type = "Gasto Improvisto" && id_wallet = ?',id , (err, rows, fields) => {
					console.log(rows);
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json({ ok: rows });
					}
				})
			})


			.post('/addOutcome/:id', function (req, res, next) {
				movement = {
					id_movement : 0,
					movement_type : req.body.movement_type,
					amount : req.body.amount,
					description : req.body.description,
					date : req.body.date,
					id_frecuency : req.body.id_frecuency,
					id_wallet : req.params.id
				}

				const db = require('../database/config');
				db.query('insert into movements ?', movement, (err, rows, fields) => {
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json({ ok: 'Added' });
					}
				})
			})


module.exports = router;