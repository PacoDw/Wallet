var express = require('express');
var router = express.Router();

router

			.get('/getIncomeFixed/:id', (req, res, next) => {
				let id = req.params.id;
				
				const db = require('../database/config');	
				db.query('select amount, description from movements where movement_type = "Ingreso Fijo" && id_wallet = ?',id , (err, rows, fields) => {
					console.log(rows);
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json({ Income: rows[0] });
					}
				})
			})


			.get('/getIncomeIncidental/:id', (req, res, next) => {
				const db = require('../database/config');	
				let id = req.params.id;
				db.query('select amount, description from movements where movement_type = "Ingreso Imprevisto" && id_wallet = ?',id , (err, rows, fields) => {
					console.log(rows);
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json({ Income: rows[0] });
					}
				})
			})


			.post('/addIncome/:id', (req, res, next) => {
				let movement = [
					req.body.movement_type,
					req.body.amount,
					req.body.description,
					req.body.date,
					req.body.id_frequency,
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


			.get('/getIncome/:id', function (req, res, next) {
				const db = require('../database/config');	
				let id = req.params.id;
				db.query("select * from movements where movement_type LIKE '%Ingreso%' && id_wallet = ?",id , (err, rows, fields) => {
					console.log(rows);
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json({ ok: rows });
					}
				})
			})


			.post('/editIncome/:id', (req, res, next) => {
				let movement = {
					id_movement : req.params.id,
					movement_type : req.body.movement_type,
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