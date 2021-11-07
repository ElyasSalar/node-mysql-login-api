const express = require('express');
const db = require('../DB/index');
const router = express.Router({mergeParams: true});


router.post('/', (req, res) => {
  const sql = 'SELECT id, name, email, password FROM users WHERE email=? and password=?';
  const values = [req.body.email, req.body.password.hashCode()];
  
  db.query(sql, values, (err, result) => {
    if(err) res.status(200).json({ success: false });

    if(result.length > 0){
      res.status(200).json({ success: true, isAuthenticated: true })
    } else {
      res.status(200).json({ success: true, isAuthenticated: false })
    }
  })
})

module.exports = router;