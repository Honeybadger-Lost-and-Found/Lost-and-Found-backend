const db = require('../db/config');
const user ={};


  user.create = (req, res, next) => {
    db.one('INSERT INTO users (username, phone, email ) VALUES($1, $2, $3) RETURNING *;',
      [req.body.username, req.body.phone, req.body.email])
      .then((data) => {
        res.locals.user = data;
<<<<<<< HEAD
=======
        console.log("created: ", data)
>>>>>>> ee8fd33089683f8548aa64025e17b9633086f8d1
        next();
      })
      .catch((error) => {
        console.log(error)
        next();
      })
  }

  user.getAll = (req, res, next) => {
    db.manyOrNone("SELECT * FROM users;")
      .then(result => {
<<<<<<< HEAD
        res.locals.user = result;
=======
        res.locals.users = result;
        console.log(result)
>>>>>>> ee8fd33089683f8548aa64025e17b9633086f8d1
        next();
      })
      .catch(error => {
        console.log(error);
        next();
      })
  }

  user.find = (req, res, next) => {
    db.oneOrNone("SELECT * FROM users WHERE username = $1;", [req.params.username])
      .then(result => {
        res.locals.user = result;
        console.log("found: ", result)
        next();
      })
      .catch(error => {
        console.log(error);
        next();
      })
  }


module.exports = user;