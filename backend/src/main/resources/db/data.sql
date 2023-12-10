INSERT INTO major (name) VALUES ('수학과');
INSERT INTO major (name) VALUES ('영어영문학과');
INSERT INTO major (name) VALUES ('미술학과');
INSERT INTO major (name) VALUES ('소프트웨어학과');
INSERT INTO major (name) VALUES ('기타');

INSERT INTO user (username, email, password, statement, major_id, student_id) VALUES ('신경준','skj6747@skku.edu', 'tlsrudwns', 'GRADUATION', '2', '2018310739');
INSERT INTO user (username, email, password, statement, major_id, student_id) VALUES ('김일건','kiigun@skku.edu', 'rladlfrjs', 'GRADUATION', '3', '2022323023');
INSERT INTO user (username, email, password, statement, major_id, student_id) VALUES ('정노원','rowon178@skku.edu', 'wjdshdnjs', 'GRADUATION', '1', '2011023940');
INSERT INTO user (username, email, password, statement, major_id, student_id) VALUES ('김이지','ezez@skku.edu', 'rladlwl', 'GRADUATION', '4', '2019024409');

INSERT INTO user_entity_roles(user_entity_id, roles) VALUES (1, 'USER');
INSERT INTO user_entity_roles(user_entity_id, roles) VALUES (2, 'USER');
INSERT INTO user_entity_roles(user_entity_id, roles) VALUES (3, 'USER');
INSERT INTO user_entity_roles(user_entity_id, roles) VALUES (4, 'USER');


INSERT INTO club (num_recruit, end_at, start_at, register_start_at, register_end_at, user_id, name, description, category, major_id, created_at) VALUES (6, "2023-12-20 00:00:00", "2023-10-08 00:00:00","2023-10-01 00:00:00", "2023-10-08 00:00:00", 2, '캡스톤디자인스터디', '캡스톤 디자인 스터디 구합니다. 저는 백엔드 담당이고요. 웬만하면 프론트 분들로 구해오', "STUDY",4, "2023-01-10 10:15:18");
INSERT INTO club (num_recruit, end_at, start_at, register_start_at, register_end_at, user_id, name, description, category, major_id, created_at) VALUES (7, "2023-12-20 00:00:00", "2023-11-08 00:00:00","2023-11-01 00:00:00", "2023-11-08 00:00:00", 3, '자료구조개론', '자료구조개론 스터디 구해요. 저도 잘하는 편이 아니라 웬만하면 초보자 분들로 구해요', "STUDY",4, "2023-02-10 10:15:18");
INSERT INTO club (num_recruit, end_at, start_at, register_start_at, register_end_at, user_id, name, description, category, major_id, created_at) VALUES (8, "2023-12-10 00:00:00", "2023-11-12 00:00:00", "2023-11-07 00:00:00", "2023-11-12 00:00:00", 2, '알고리즘개론', '조대호 교수님 알고개 스터디 구합니다. 현재 레드블랙트리까지 스터디 진행된 상태에요 참고부탁드려요', "STUDY",4, "2023-02-11 10:15:18");
INSERT INTO club (num_recruit, end_at, start_at, register_start_at, register_end_at, user_id, name, description, category, major_id, created_at) VALUES (9, "2023-12-15 00:00:00", "2023-11-30 00:00:00", "2023-11-07 00:00:00", "2023-11-30 00:00:00", 1, '암호론 스터디', '암호론 스터디 구합니다. 열정적으로 하실분만 들어오셨으면 좋겠어여.', "STUDY",1, "2023-01-10 10:15:18");
INSERT INTO club (num_recruit, end_at, start_at, register_start_at, register_end_at, user_id, name, description, category, major_id, created_at) VALUES (10, "2024-12-10 00:00:00", "2023-12-01 00:00:00", "2023-11-21 00:00:00", "2023-12-01 00:00:00", 1, '토익800+', '토익 800 이상을 목표로 하는 스터디입니다. 기상 스터디 형태에요. 벌금있어요', "STUDY",5, "2023-04-10 10:15:18");
INSERT INTO club (num_recruit, end_at, start_at, register_start_at, register_end_at, user_id, name, description, category, major_id, created_at) VALUES (11, "2024-12-20 00:00:00", "2023-12-03 00:00:00", "2023-12-03 00:00:00", "2024-12-20 00:00:00", 3, '삼성GSAT', '지싸트 합격과정을 위해 달리실 분들 구해요. 열심히 하셔야 좋은 성과있어요.', "STUDY",5, "2023-05-10 10:15:18");
INSERT INTO club (num_recruit, end_at, start_at, register_start_at, register_end_at, user_id, name, description, category, major_id, created_at) VALUES (12, "2024-12-20 00:00:00", "2023-12-04 00:00:00", "2023-12-04 00:00:00", "2024-12-20 00:00:00", 1, '삼성 면접준비', '면접 합격을 위한 스터디 입니다. 지싸트 40 이상만 가입 부탁드릴게요', "STUDY",5, "2023-06-10 10:15:18");
INSERT INTO club (num_recruit, end_at, start_at, register_start_at, register_end_at, user_id, name, description, category, major_id, created_at) VALUES (13, "2024-12-20 00:00:00", "2023-12-06 00:00:00", "2023-12-06 00:00:00", "2024-12-20 00:00:00", 2, '하이닉스 면접준비', '하닉 스터디 구해요. 양기 스터디입니다. 참고부탁드려요.', "STUDY",5, "2023-07-10 10:15:18");
INSERT INTO club (num_recruit, end_at, start_at, register_start_at, register_end_at, user_id, name, description, category, major_id, created_at) VALUES (14, "2024-12-20 00:00:00", "2023-12-07 00:00:00", "2023-12-07 00:00:00", "2024-12-20 00:00:00", 3, 'LG 면접준비', '엘지 현직자 한분 계시는 스터디 입니다. 잠수 타실 분들은 오지마세요.', "STUDY",5, "2023-08-10 10:15:18");
INSERT INTO club (num_recruit, end_at, start_at, register_start_at, register_end_at, user_id, name, description, category, major_id, created_at) VALUES (15, "2024-12-08 00:00:00", "2023-12-07 00:00:00", "2023-12-07 00:00:00", "2024-12-08 00:00:00", 1, '현대자동차 면접준비', '자동차에 대한 이해를 바탕으로 면접 합격을 위한 스터디에요 다양한 전공으로 구성되어있습니다.', "STUDY",5, "2023-09-10 10:15:18");
INSERT INTO club (num_recruit, end_at, start_at, register_start_at, register_end_at, user_id, name, description, category, major_id, created_at) VALUES (15, "2024-12-21 00:00:00", "2023-12-08 00:00:00", "2023-12-08 00:00:00", "2024-12-21 00:00:00", 1, '석고상만들기', '김영석 교수님 석고상만들기 스터디 구합니다. 석고 좋아하시는 분들이 오셨으면 좋겠어요.', "STUDY",3, "2023-01-10 10:15:18");
INSERT INTO club (num_recruit, end_at, start_at, register_start_at, register_end_at, user_id, name, description, category, major_id, created_at) VALUES (15, "2024-12-21 00:00:00", "2023-12-08 00:00:00", "2023-12-08 00:00:00", "2024-12-21 00:00:00", 1, '영어소설읽기', '유명 영어 소설읽기 스터디입니다. 김나미 교수님 영어책 읽기 전용 스터디 분반입니다.', "STUDY",2, "2023-04-10 10:15:18");

INSERT INTO user_club (user_id, club_id) VALUES (2, 1);
INSERT INTO user_club (user_id, club_id) VALUES (3, 2);
INSERT INTO user_club (user_id, club_id) VALUES (2, 3);
INSERT INTO user_club (user_id, club_id) VALUES (1, 4);
INSERT INTO user_club (user_id, club_id) VALUES (1, 5);
INSERT INTO user_club (user_id, club_id) VALUES (3, 6);
INSERT INTO user_club (user_id, club_id) VALUES (1, 7);
INSERT INTO user_club (user_id, club_id) VALUES (2, 8);
INSERT INTO user_club (user_id, club_id) VALUES (3, 9);
INSERT INTO user_club (user_id, club_id) VALUES (1, 10);
INSERT INTO user_club (user_id, club_id) VALUES (1, 11);
INSERT INTO user_club (user_id, club_id) VALUES (1, 12);

