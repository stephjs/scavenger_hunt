-- working database
-- run command "mysql -u root -p" then "source schema.sql"

CREATE DATABASE scavhunt;
USE scavhunt;

CREATE TABLE scav 
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    item VARCHAR(25) NOT NULL,
    found TINYINT(1) NOT NULL,
    date_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);