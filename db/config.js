const pgPromise= require('pg-promise');
const pgInstance=pgPromise();

const config={
    host:'localhost',
    port:3000,
    database:'lost_and_found',
    user: 'postgres',
    password:123456789,
}

const connection = pgInstance(config);
module.exports=connection;