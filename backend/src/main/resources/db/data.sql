INSERT INTO major (name) VALUES ('math');
INSERT INTO major (name) VALUES ('english');
INSERT INTO major (name) VALUES ('art');
INSERT INTO major (name) VALUES ('software');

INSERT INTO user (name, email, password, admin, statement, major_id, student_id) VALUES ('testname','testemail@gmail.com', 'testpassword', false, 'GRADUATION', '2', '2018310739');
INSERT INTO user (name, email, password, admin, statement, major_id, student_id) VALUES ('testname22','testemail22@gmail.com', 'testpassword2', false, 'GRADUATION', '3', '2022323023');
INSERT INTO user (name, email, password, admin, statement, major_id, student_id) VALUES ('testname33','testemail33@gmail.com', 'testpassword3', false, 'GRADUATION', '1', '2011023940');

INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id) VALUES (5, "2020-04-20 10:15:18", "2020-04-08 10:15:18","2020-02-20 10:15:18", "2020-02-08 10:15:18", 1, 'asfsa', 'desc1', "STUDY", 1);
INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id) VALUES (6, "2020-03-20 10:15:18", "2020-03-08 10:15:18","2020-02-20 10:15:18", "2020-02-08 10:15:18", 2, 'asfsafsa', 'desc2', "STUDY",2);
INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id) VALUES (7, "2020-02-20 10:15:18", "2020-02-08 10:15:18","2020-01-20 10:15:18", "2020-01-08 10:15:18", 3, 'asdf', 'desc3', "STUDY",2);
INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id) VALUES (3, "2020-01-20 10:15:18", "2020-03-08 10:15:18", "2020-01-20 10:15:18", "2020-01-08 10:15:18",2, 'asfsafsa', 'desc4', "STUDY",3);
