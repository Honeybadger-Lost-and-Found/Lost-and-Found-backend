DROP DATABASE IF EXISTS lost_and_found;

CREATE DATABASE lost_and_found;

\c lost_and_found


CREATE TABLE contact(

id SERIAL PRIMARY KEY,
name VARCHAR,
phone VARCHAR,
email VARCHAR
);

CREATE TABLE items(

id SERIAL PRIMARY KEY,
name VARCHAR,
type VARCHAR,
imageUrl VARCHAR,
lat DOUBLE PRECISION,
lon DOUBLE PRECISION,
addedBy INTEGER,
receivedBy INTEGER,
addedDate DATE,
FOREIGN KEY(addedBy) REFERENCES contact,
FOREIGN KEY(receivedBy) REFERENCES contact
);


INSERT INTO contact(name, phone, email)VALUES('Ahmad','05467990','abcd@hotmail.com'),
('Mohammed', '0554279362', 'mohammed@gmail.com');


INSERT INTO items(name, type, imageUrl, lat, lon, addedBy, receivedBy, addedDate)
VALUES('mobile','found','https://www.pexels.com/photo/nature-red-love-romantic-67636/',166.57 , 156.74 , 1, 2,'12/01/2019'),
('laptop', 'lost', 'https://target.scene7.com/is/image/Target/GUEST_064d9050-5243-4fc9-b689-9cb0b68d15bf?wid=488&hei=488&fmt=pjpeg', 180.59, 160.30, 2, 1, '12/08/2019');

