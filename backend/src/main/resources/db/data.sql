INSERT INTO major (name) VALUES ('math');
INSERT INTO major (name) VALUES ('english');
INSERT INTO major (name) VALUES ('art');
INSERT INTO major (name) VALUES ('software');

INSERT INTO user (name, email, password, admin, statement, major_id, student_id) VALUES ('testname','testemail@gmail.com', 'testpassword', false, 'GRADUATION', '2', '2018310739');
INSERT INTO user (name, email, password, admin, statement, major_id, student_id) VALUES ('testname22','testemail22@gmail.com', 'testpassword2', false, 'GRADUATION', '3', '2022323023');
INSERT INTO user (name, email, password, admin, statement, major_id, student_id) VALUES ('testname33','testemail33@gmail.com', 'testpassword3', false, 'GRADUATION', '1', '2011023940');


INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id,timetable_mon,timetable_tue,timetable_wed,timetable_thu,timetable_fri) VALUES (5, "2020-04-20 10:15:18", "2020-04-08 10:15:18","2020-02-20 10:15:18", "2020-01-08 10:15:18", 1, '캡스톤디자인1', 'desc1', "STUDY", 1,2015,8253440,2015,8253440,4095);
INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id) VALUES (6, "2020-03-20 10:15:18", "2020-03-08 10:15:18","2020-02-20 10:15:18", "2020-02-08 10:15:18", 2, '캡스톤디자인2', 'desc2', "STUDY",2);
INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id) VALUES (7, "2020-02-20 10:15:18", "2020-02-08 10:15:18","2020-01-20 10:15:18", "2024-03-08 10:15:18", 3, '자료구조개론', 'desc3', "STUDY",2);
INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id) VALUES (8, "2020-01-20 10:15:18", "2020-03-08 10:15:18", "2020-01-20 10:15:18", "2020-04-08 10:15:18",2, '알고리즘개론', 'desc4', "STUDY",3);
INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id) VALUES (9, "2020-01-20 10:15:18", "2020-03-08 10:15:18", "2020-01-20 10:15:18", "2020-05-08 10:15:18",1, '성균논어', 'desc4', "STUDY",3);
INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id) VALUES (10, "2020-01-20 10:15:18", "2020-03-08 10:15:18", "2020-01-20 10:15:18", "2024-06-08 10:15:18",1, '토익800+', 'desc4', "STUDY",3);
INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id) VALUES (11, "2020-01-20 10:15:18", "2020-03-08 10:15:18", "2020-01-20 10:15:18", "2024-07-08 10:15:18",3, '삼성GSAT', 'desc4', "STUDY",3);
INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id) VALUES (12, "2020-01-20 10:15:18", "2020-03-08 10:15:18", "2020-01-20 10:15:18", "2023-11-18 10:15:18",1, '삼성 면접준비', 'desc4', "STUDY",3);
INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id) VALUES (13, "2020-01-20 10:15:18", "2020-03-08 10:15:18", "2020-01-20 10:15:18", "2020-09-08 10:15:18",2, '하이닉스 면접준비', 'desc4', "STUDY",3);
INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id) VALUES (14, "2020-01-20 10:15:18", "2020-03-08 10:15:18", "2020-01-20 10:15:18", "2020-10-08 10:15:18",3, 'LG 면접준비', 'desc4', "STUDY",3);
INSERT INTO club (num_recruit, end_at, start_at,register_start_at, register_end_at, user_id, name, description, category, major_id) VALUES (15, "2020-01-20 10:15:18", "2020-03-08 10:15:18", "2020-01-20 10:15:18", "2020-11-08 10:15:18",1, '현대자동차 면접준비', 'desc4', "STUDY",3);
