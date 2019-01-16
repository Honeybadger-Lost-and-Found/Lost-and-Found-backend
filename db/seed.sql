DROP DATABASE IF EXISTS lost_and_found;

CREATE DATABASE lost_and_found;

\c lost_and_found


CREATE TABLE users(
    
id SERIAL,
username varchar UNIQUE not null PRIMARY KEY,
phone VARCHAR,
email VARCHAR
);

CREATE TABLE items(

id SERIAL PRIMARY KEY,
name VARCHAR,
description VARCHAR,
type VARCHAR,
imageUrl VARCHAR,
lat DOUBLE PRECISION,
lon DOUBLE PRECISION,
addedBy VARCHAR,
addedDate VARCHAR,
FOREIGN KEY(addedBy) REFERENCES users
);


INSERT INTO users(username, phone, email)VALUES('Ahmad','0546799055','abcd@hotmail.com'),
('Mohammed', '0554279362', 'mohammed@gmail.com');


INSERT INTO items(name, description, type, imageUrl, lat, lon, addedBy, addedDate)
VALUES('mobile', 'I found this iphone on a bench and wanted to see if its owner was looking for it. Contact me at 0546799055', 'found', 'https://btech.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/u/n/untitled_8_3.jpg', 166.57, 156.74, 'Ahmad', '12/01/2019'),
('samsung mobile', 'This samsung s8 was on the floor between the chairs. I dropped it off with the security, go see them to retrieve it.', 'found', 'https://images-na.ssl-images-amazon.com/images/I/71uI%2BnAzruL._SY606_.jpg', 166.57, 156.74, 'Ahmad', '12/20/2019'),
('laptop', 'lost', 'I lost my macbook air somewhere around this location. It has a snake sticker on it. If you spot it please call on at 0554279362', 'https://target.scene7.com/is/image/Target/GUEST_064d9050-5243-4fc9-b689-9cb0b68d15bf?wid=488&hei=488&fmt=pjpeg', 180.59, 160.30, 'Mohammed', '12/08/2019');