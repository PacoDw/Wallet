var express = require('express');
var router = express.Router();

/* GET users listing. */
router
			.get('/', function (req, res, next) {
				res.status(200).json({ ok: 'ok' });
			})


			.get('/user', (req, res, next) => {
				id = req.body.id;
				const db = require('../database/config');
				db.query('select from users where id_user =  ?', id, (err, rows, fields) => {

				})
			})


			.post('/addsUser', (req, res, next) => {
				// user = {
				// 	username = req.body.username,
				// 	password = req.body.password
				// }
				const db = require('../database/config');
				db.query('insert into users ?', user, (err, rows, fields) => {
					if (err) {
						res.status(500).json({ err });
					} else {
						res.status(200).json({ ok: 'Added' });
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
						res.status(200).json({ ok: 'Deleted' });
					}
				});
			});



		module.exports = router;
