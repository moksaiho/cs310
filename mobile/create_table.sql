CREATE DATABASE IF NOT EXISTS riverFinalApp;

USE riverFinalApp;


DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    userid       varchar(256) not null ,
    username     varchar(64) not null,
    imageUri     varchar(256), 
   
    PRIMARY KEY  (userid)
   
);




CREATE TABLE messages
(
    messageid    int not null AUTO_INCREMENT,
    userid       varchar(256) not null,
    timestamp    datetime not null,
    content      text not null,
    PRIMARY KEY  (messageid),
    FOREIGN KEY (userid) REFERENCES users(userid)
);
ALTER TABLE messages AUTO_INCREMENT = 80001; 


INSERT INTO users(userid,username, imageUri)  -- pwd = abc123!!
            values('10001','River', 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png');

INSERT INTO users(userid,username, imageUri)  -- pwd = abc456!!
            values('10002','Wai Chung', 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg');

INSERT INTO users(userid,username, imageUri)  -- pwd = abc789!!
            values('10003','Florian', 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg');

INSERT INTO messages (userid, timestamp, content) VALUES ('10001', '2023-12-03 16:00:00', 'Hello! Just checking in to see how your day is going.');
INSERT INTO messages (userid, timestamp, content) VALUES ('10001', '2023-12-03 16:05:00', 'Have you had a chance to look at the project we discussed?');

-- Messages from user 10002
INSERT INTO messages (userid, timestamp, content) VALUES ('10002', '2023-12-03 16:10:00', 'Hey! My day is going great, thanks for asking. How about yours?');
INSERT INTO messages (userid, timestamp, content) VALUES ('10002', '2023-12-03 16:15:00', 'Yes, I have started working on the project. It looks exciting!');

-- Additional conversation
INSERT INTO messages (userid, timestamp, content) VALUES ('10001', '2023-12-03 16:20:00', 'Glad to hear that! My day is quite busy, but productive.');
INSERT INTO messages (userid, timestamp, content) VALUES ('10002', '2023-12-03 16:25:00', 'That’s good to know. Let’s catch up later to discuss more about the project.');
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

