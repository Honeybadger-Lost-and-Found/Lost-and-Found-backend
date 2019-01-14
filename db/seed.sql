DROP DATABASE IF EXISTS lost_and_found

CREATE DATABASE lost_and_found

\c

CREATE TABLE items(

id SERIAL PRIMARY KEY,
name VARCHAR,
type VARCHAR,
imageUrl VARCHAR,
lat DOUBLE PRECISION,
lon DOUBLE PRECISION,
addedBy FOREIGN KEY,
receivedBy FOREIGN KEY,
addedDate DATE

);

INSERT INTO items(name, type, imageUrl, lat, lon, addedBy, receivedBy, addedDate)
VALUES('','','','' , '' ,'','','');


CREATE TABLE cantact(

id SERIAL PRIMARY KEY,
name VARCHAR,
phone VARCHAR,
email VARCHAR
);
INSERT INTO items(name, phone, email)VALUES('','','');

