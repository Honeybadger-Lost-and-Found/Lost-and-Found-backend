const db = require('../db/config');
const item = {};

item.getAll = (req, res, next) => {
    db.manyOrNone('SELECT * FROM items;')
      .then((data) => {
        res.locals.items = data;
        next();
      })
      .catch((error) => {
        console.log(error)
        next();
      })
  }

  item.find = (req, res, next) => {
    db.oneOrNone("SELECT * FROM items WHERE id = $1;", [req.params.id])
      .then(result => {
        res.locals.item = result;
        next();
      })
      .catch(error => {
        console.log(error);
        next();
      })
  }

  item.findItemsByUser = (req, res, next) => {
      db.manyOrNone("SELECT * FROM items WHERE addedby = $1;", [req.params.username])
        .then(result => {
            res.locals.items = result;
            next();
        })
        .catch(error => {
            console.log(error);
            next();
        })
  }
  

  item.create = (req, res, next) => {
    db.one('INSERT INTO items (name, description, type, imageurl, lat, lon, addedby, addeddate) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;',
      [req.body.name, req.body.description, req.body.type, req.body.imageurl, req.body.lat, req.body.lon, req.body.addedby, req.body.addeddate])
      .then((data) => {
        res.locals.item = data;
        next();
      })
      .catch((error) => {
        console.log(error)
        next();
      })
  }
  
  item.update = (req, res, next) => {
    db.one('UPDATE items SET name=$1, description=$2, type=$3, imageurl=$4, lat=$5, lon=$6, addedby=$7, addeddate=$8 WHERE id=$9 RETURNING *;',
    [req.body.name, req.body.description, req.body.type, req.body.imageurl, req.body.lat, req.body.lon, req.body.addedby, req.body.addeddate, req.params.id])
    .then((data) => {
        res.locals.item = data;
        next();
      })
      .catch((error) => {
        console.log(error)
        next();
      })
  }

  item.delete = (req, res, next) => {
    db.none('DELETE FROM items WHERE id=$1;', [req.params.id])
      .then(() => {
        console.log('successful delete');
        next();
      })
      .catch(error => {
        console.log(error);
        next();
      })
  }




module.exports = item;
  