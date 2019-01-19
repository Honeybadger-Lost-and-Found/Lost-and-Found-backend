const pgPromise= require('pg-promise');
const pgInstance=pgPromise();

//windows config
// const config={
//     host:'localhost',
//     port:3000,
//     database:'lost_and_found',
//     user: 'postgres',
//     password:123456789,
// }

//mac config
const config = {
    host: 'localhost',
    port: 5432,
    database: 'lost_and_found',
<<<<<<< HEAD
    user: 'postgres' // your username here!!
=======
    user: 'raed' // your username here!!
>>>>>>> b3405fea0a94fd7abe9ff10357af73cf6fa2c24b
  }

const connection = pgInstance(config);
module.exports=connection;

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'https://react-image-upload.surge.sh'
  : 'http://localhost:3000'
