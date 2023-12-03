CREATE DATABASE IF NOT EXISTS riverFinalApp;

USE riverFinalApp;


DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    userid       int not null AUTO_INCREMENT,
    username     varchar(64) not null,
    imageUri     varchar(256), 
   
    PRIMARY KEY  (userid)
   
);

ALTER TABLE users AUTO_INCREMENT = 10001; 




INSERT INTO users(username, imageUri)  -- pwd = abc123!!
            values('River', '');

INSERT INTO users(username, imageUri)  -- pwd = abc456!!
            values('Wai Chung', '');

INSERT INTO users(username, imageUri)  -- pwd = abc789!!
            values('Florian', '');

--
-- creating user accounts for database access:
--
-- ref: https://dev.mysql.com/doc/refman/8.0/en/create-user.html
--


DROP USER IF EXISTS 'riverFinalApp-read-write';


CREATE USER 'riverFinalApp-read-write' IDENTIFIED BY 'def456!!';


GRANT SELECT, SHOW VIEW, INSERT, UPDATE, DELETE, DROP, CREATE, ALTER ON riverFinalApp.* 
      TO 'riverFinalApp-read-write';
      
FLUSH PRIVILEGES;

--
-- done
--

