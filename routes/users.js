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
					req.body.name,
					req.body.password
				]
	
				const db = require('../database/config');
				db.query('insert into users (email, `name`, `password`)values(?,?,?);', user, (err, rows, fields) => {
					if (err) {
						res.status(500).json( err );
					} else {
						res.status(200).json( user );
<<<<<<< HEAD
					}
				})
			})


			.post('/editUser/:id', (req, res, next) => {
				let user = {
					id_user: req.params.id,
					email: req.body.email,
					name: req.body.username,
					password: req.body.password
				}

				const db = require('../database/config');
				db.query('UPDATE users set ? where ?', [user, {id_user: req.params.id}], (err, rows, fields) => {
					if (err) {
						res.status(500).json( err );
					} else {
						res.status(200).json({ user: 'Edited' });
=======
>>>>>>> e676ab13d2b5f6ed4e1c2f48f7733e01bf7ebf1e
					}
				})
			})


			.delete('/deleteUser/:id', (req, res, next) => {
				let id = req.params.id;
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