const db = require('../db/config');
const items ={};

items.getAll = (req, res, next) => {
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

  items.find = (req, res, next) => {
    const id = req.params.id;
    db.oneOrNone("SELECT * FROM items WHERE id = $1;", [id])
      .then(result => {
        res.locals.item = result;
        next();
      })
      .catch(error => {
        console.log(error);
        next();
      })
  }
  

  items.create = (req, res, next) => {
    db.one('INSERT INTO items (name, type, imageUrl, lat, lon, addedBy, recivedBy, addedDate) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;',
      [req.body.name, req.body.type, req.body.imageUrl, req.body.lat, req.body.lon,req.body.addedBy,req.body.recivedBy,req.body.addedDate])
      .then((data) => {
        res.locals.item = data;
        next();
      })
      .catch((error) => {
        console.log(error)
        next();
      })
  }
  
  items.update = (req, res, next) => {
    db.one('UPDATE items SET name =$1, type=$2, imageUrl=$3, lat=$4, lon=$5, addedBy=$6, recivedBy=$7, addedDate=$8 WHERE id =$9 RETURNING *;',
    [req.body.name, req.body.type, req.body.imageUrl, req.body.lat, req.body.lon,req.body.addedBy,req.body.recivedBy,req.body.addedDate, req.params.id])
    .then((data) => {
        res.locals.item = data;
        next();
      })
      .catch((error) => {
        console.log(error)
        next();
      })
  }

  items.delete = (req, res, next) => {
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




module.exports = items;
  