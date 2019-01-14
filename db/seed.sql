DROP DATABASE IF EXISTS lost_and_found

CREATE DATABASE lost_and_found

\c lost_and_found

CREATE TABLE items(

id SERIAL PRIMARY KEY,
name VARCHAR,
type VARCHAR,
imageUrl VARCHAR,
lat DOUBLE PRECISION,
lon DOUBLE PRECISION,
addedBy VARCHAR,
receivedBy VARCHAR,
FOREIGN KEY(addedBy) REFERENCES contact,
FOREIGN KEY(receivedBy) REFERENCES contact,
addedDate DATE,

);

INSERT INTO items(name, type, imageUrl, lat, lon, addedBy, receivedBy, addedDate)
VALUES('mobile','found','https://www.pexels.com/photo/nature-red-love-romantic-67636/',166.57 , 156.74 ,'Ahmad','Mohammad','12/01/2019');


CREATE TABLE contact(

id SERIAL PRIMARY KEY,
name VARCHAR,
phone VARCHAR,
email VARCHAR
);
INSERT INTO contact(name, phone, email)VALUES('Ahmad','05467990','abcd@hotmail.com');

