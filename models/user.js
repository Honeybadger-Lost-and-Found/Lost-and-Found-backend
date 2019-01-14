const db = require('../db/config');
const user ={};



  user.create = (req, res, next) => {
    db.one('INSERT INTO users (userName,phone,email ) VALUES($1, $2, $3, ) RETURNING *;',
      [req.body.userName, req.body.phone, req.body.email])
      .then((data) => {
        res.locals.item = data;
        next();
      })
      .catch((error) => {
        console.log(error)
        next();
      })
  }
  user.find = (req, res, next) => {
    const id = req.params.id;
    db.oneOrNone("SELECT * FROM users WHERE id = $1;", [id])
      .then(result => {
        res.locals.item = result;
        next();
      })
      .catch(error => {
        console.log(error);
        next();
      })
  }
  
  




module.exports = user;