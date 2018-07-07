var express = require('express');
var router = express.Router();

router

			.get('/user/:id', (req, res, next) => {
				let id = req.params.id;
				const db = require('../database/config');
				db.query('select * from users where id_user =  ?', id, (err, rows, fields) => {
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json({ user : rows[0] });
					}
				})
			})


			.post('/loginUser', (req, res, next) => {

				let email = req.body.email;
				let password = req.body.password;
				
				const db = require('../database/config');
				db.query('select * from users where email = ? && `password` = ?', [email, password], (err, rows, fields) => {
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json({ user: rows[0] });
					}
				})
			})


			.post('/addUser', (req, res, next) => {console.log('Data login: ', data);
				let user = {
					id_user : 0,
					email: req.body.email,
					name : req.body.username,
					password : req.body.password
				}
				const db = require('../database/config');
				db.query('insert into users ?', user, (err, rows, fields) => {
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json({ user: 'Added' });
					}
				})
			})


			.delete('/deleteUser/:id', (req, res, next) => {
				let id = req.params.id;
				const db = require('../database/config');
				db.query('DELETE from users where id_user = ?', id, (err, rows, fields) => {
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json({ user: 'Deleted' });
					}
				});
			});



module.exports = router;