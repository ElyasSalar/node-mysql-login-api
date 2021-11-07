const express = require('express');
const db = require('../DB/index');
const router = express.Router({mergeParams: true});

router.get('/', (req, res) => {
  const sqlQuery = 'SELECT * FROM users';
  db.query(sqlQuery, (err, result) => {
    if(err) res.status(200).json({success: false});
    
    else res.status(200).json(result);
  })
})

router.post('/', (req, res) => {
  if(req.body.name && req.body.email && req.body.password) {}
  else res.status(200).send({ success: false });

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password.hashCode();

  const sqlPost = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)'
  const sqlGet = "SELECT email FROM users WHERE email=?"
  const values = [name, email, password];

  db.query(sqlGet, email, (err, result) => {
    if(err) res.status(200).json({ success: false });

    if(result.length == 0) {

      db.query(sqlPost, values, (err, result) => {
        if(err) throw err;
    
        res.status(200).json({ success: true })
      })

    } else{
      res.status(200).json({ success: false })
    }
  })
});

module.exports = router