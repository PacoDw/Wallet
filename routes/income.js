var express = require('express');
var router = express.Router();

router

			.get('/getIncomeFixed/:id', (req, res, next) => {
				let id = req.params.id;
				
				const db = require('../database/config');	
				db.query('select amount, description from movements where id_movement_type = 1 && id_user = ?',id , (err, rows, fields) => {
					console.log(rows);
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json( rows );
					}
				})
			})


			.get('/getIncomeIncidental/:id', (req, res, next) => {
				const db = require('../database/config');	
				let id = req.params.id;
				db.query('select amount, description from movements where id_movement_type = 2 && id_user = ?',id , (err, rows, fields) => {
					console.log(rows);
					if (err) {
						res.status(500).json( err );
					} else {
						res.status(200).json( rows );
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
				db.query('insert into movements (id_movement_type, amount, description, date, id_frequency, id_user) values (?,?,?,?,?,?)', movement, (err, rows, fields) => {
					if (err) {
						res.status(500).json( err );
					} else {
						res.status(200).json({ Movement: 'Added' });
					}
				})
			})


			.get('/getIncome/:id', function (req, res, next) {
				const db = require('../database/config');	
				let id = req.params.id;
				db.query("Select * from movements where id_user = ? AND id_movement_type = (SELECT id_movement_type WHERE id_movement_type between 1 AND 2);",id , (err, rows, fields) => {
					if (err) {
						res.status(500).json( err );
					} else {
						res.status(200).json( rows );
					}
				})
			})


			.post('/editIncome/:id', (req, res, next) => {
				let movement = {
					id_movement : req.params.id,
					id_movement_type : req.body.id_movement_type,
					amount : req.body.amount,
					description : req.body.description,
					date : 	req.body.date,
					id_frequency : req.body.id_frequency,
					id_user : req.body.id_wallet
				}
				
				const db = require('../database/config');
					db.query('UPDATE movements set ? where ?', [movement, {id_movement: req.params.id}], (err, rows, fields) => {
					if (err) {
						console.log(err);
						res.status(500).json( err );
					} else {
						res.status(200).json({ Movement: 'Updated' });
					}
				})
			})


			.delete('/deleteIncome/:id', (req, res, next) => {
				id_movement = req.params.id;
				const db = require('../database/config');
				db.query('delete from movements where id_movement = ?', id_movement, (err, rows, fields) => {
					if (err) {
						console.log(err);
						res.status(500).json( err );
					} else {
						res.status(200).json({ Movement: 'Deleted' });
					}
				});
			});

module.exports = router;