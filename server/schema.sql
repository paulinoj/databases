CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userName VARCHAR(50)
);
CREATE TABLE messages (
  messageText varchar(300),
  messageID numeric(4)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

