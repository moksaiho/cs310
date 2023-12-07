use riverFinalApp;
-- ALTER DATABASE  riverFinalApp CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
-- ALTER TABLE messages CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- ALTER TABLE messages CHANGE content content TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL;
-- select * from messages
-- select * from users
delete from messages where userid = '9c27e2f9-a489-485a-87b6-cae468caa572'
-- describe messages
-- insert into users(userid,imageUri) values ('7f79ae80-6e89-46b7-9cb2-524790e58267','');
-- INSERT INTO messages (userid, timestamp, content) VALUES ('9c27e2f9-a489-485a-87b6-cae468caa572', '2023-12-03 16:10:00', 'Hey! My day is going great, thanks for asking. How about yours?');
-- INSERT INTO messages (userid, timestamp, content) VALUES ('7f79ae80-6e89-46b7-9cb2-524790e58267', '2023-12-03 16:15:00', 'Yes, I have started working on the project. It looks exciting!');
-- update users set imageUri = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' 
-- delete from users where userid=10005
-- delete from users where userid=10006