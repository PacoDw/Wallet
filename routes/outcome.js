var express = require('express');
var router = express.Router();

router

			.get('/getOutcomeFixed/:id', function (req, res, next) {
				const db = require('../database/config');	
				let id = req.params.id;
				db.query('select amount, description from movements where movement_type = "Gasto Fijo" && id_wallet = ?',id , (err, rows, fields) => {
					console.log(rows);
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json({ ok: rows[0] });
					}
				})
			})


			.get('/getOutcomeIncidental/:id', function (req, res, next) {
				const db = require('../database/config');	
				let id = req.params.id;
				db.query('select amount, description from movements where movement_type = "Gasto Imprevisto" && id_wallet = ?',id , (err, rows, fields) => {
					console.log(rows);
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json({ ok: rows[0] });
					}
				})
			})


			.post('/addOutcome/:id', function (req, res, next) {
				let movement = [
					req.body.movement_type,
					req.body.amount,
					req.body.description,
					req.body.date,
					req.body.id_frecuency,
					req.params.id
				]	
				
				const db = require('../database/config');
				db.query('insert into movements (movement_type, amount, description, date, id_frequency, id_wallet) values (?,?,?,?,?,?)', movement, (err, rows, fields) => {
					if (err) {
						console.log(err);
						res.status(500).json({ err });
					} else {
						res.status(200).json({ Movement: 'Added' });
					}
				})
			})


module.exports = router;