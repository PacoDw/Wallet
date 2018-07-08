var express = require('express');
var router = express.Router();

router      
			
			.get('/profile/:id', (req, res, next) => {

					let id = req.params.id;
					const db = require('../database/config');

					db.query('Select * from users where id_user = ?', id, 
						
						(err, rows, fields) => {
						
							if (err) {
								res.status(500).json( err );
							} else {
								res.status(200).json( rows );
							}
					})
			})


			.delete('/resetApp/:id', (req, res, next) => {

					let id = req.params.id;
					const db = require('../database/config');

					db.query('delete from movements where id_user = ?', id, 
					
						(err, rows, fields) => {
						
							if (err) {
								res.status(500).json( err );
							} else {
								res.status(200).json({ user: 'Reseted' });
							}
					})
			})
			
module.exports = router;