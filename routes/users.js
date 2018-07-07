var express = require('express');
var router = express.Router();

router

			.get('/user/:id', (req, res, next) => {
				let id = req.params.id;
				const db = require('../database/config');
				db.query('select * from users where id_user =  ?', id, (err, rows, fields) => {
					if (err) {
						res.status(500).json( err );
					} else {
						res.status(200).json(rows[0]);
					}
				})
			})


			.post('/loginUser', (req, res, next) => {

				let email = req.body.email;
				let password = req.body.password;
				
				const db = require('../database/config');
				db.query('select * from users where email = ? && `password` = ?', [email, password], (err, rows, fields) => {
					if (err) {
						res.status(500).json( err );
					} else {
						res.status(200).json( rows[0] );
					}
				})
			})


			.post('/addUser', (req, res, next) => {
				let user = [
					req.body.email,
					req.body.username,
					req.body.password
				]
	
				console.log(user);
				const db = require('../database/config');
				db.query('insert into users (email, `name`, `password`)values(?,?,?);', user, (err, rows, fields) => {
					if (err) {
						res.status(500).json( err );
					} else {
						res.status(200).json({ user: 'Added' });
					}
				})
			})


			.delete('/deleteUser/:id', (req, res, next) => {
				let id = req.params.id;
				// console.log(id);
				const db = require('../database/config');
				db.query('DELETE from users where id_user = ?', id, (err, rows, fields) => {
					if (err) {
						res.status(500).json( err );
					} else {
						res.status(200).json({ user: 'Deleted' });
					}
				});
			});



module.exports = router;