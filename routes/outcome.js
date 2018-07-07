var express = require('express');
var router = express.Router();

router

			.get('/getOutcomeFixed/:id', function (req, res, next) {
				const db = require('../database/config');	
				let id = req.params.id;
				db.query('select amount, description from movements where id_movement_type = "Gasto Fijo" && id_wallet = ?',id , (err, rows, fields) => {
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
				db.query('select amount, description from movements where id_movement_type = "Gasto Imprevisto" && id_wallet = ?',id , (err, rows, fields) => {
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
					req.body.id_movement_type,
					req.body.amount,
					req.body.description,
					req.body.date,
					req.body.id_frequency,
					req.params.id
				]	
				
				const db = require('../database/config');
				db.query('insert into movements (id_movement_type, amount, description, date, id_frequency, id_wallet) values (?,?,?,?,?,?)', movement, (err, rows, fields) => {
					if (err) {
						console.log(err);
						res.status(500).json({ err });
					} else {
						res.status(200).json({ Movement: 'Added' });
					}
				})
			})


			.get('/getOutcome/:id', function (req, res, next) {
				const db = require('../database/config');	
				let id = req.params.id;
				db.query("Select * from movements where id_wallet = ? AND id_movement_type = (SELECT id_movement_type WHERE id_movement_type between 3 AND 4);",id , (err, rows, fields) => {
					console.log(rows);
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json({ ok: rows });
					}
				})
			})


			.post('/editOutcome/:id', (req, res, next) => {
				let movement = {
					id_movement : req.params.id,
					id_movement_type : req.body.id_movement_type,
					amount : req.body.amount,
					description : req.body.description,
					date : 	req.body.date,
					id_frequency : req.body.id_frequency,
					id_wallet : req.body.id_wallet
				}
				
				const db = require('../database/config');
					db.query('UPDATE movements set ? where ?', [movement, {id_movement: req.params.id}], (err, rows, fields) => {
					if (err) {
						console.log(err);
						res.status(500).json({ err });
					} else {
						res.status(200).json({ Movement: 'Updated' });
					}
				})
			})


module.exports = router;