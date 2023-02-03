USE wedding101_db;

INSERT INTO tbl_user (user_id, user_password, user_name,user_nickname, user_email) VALUES
("dudwls624", "1234", "권영진", "꿔녕징", "dudwls624@naver.com"),
("rla0347", "1234", "김지현", "응애", "rla0347@naver.com");

SELECT * FROM tbl_user;

insert into tbl_info (user_seq, wedding_day, wedding_hall_name, groom_name, bride_name, groom_phone_number, bride_phone_number) values
(1, now(), "더아리엘", "이상현", "권영진", "010-0000-0000", "010-1111-1111"),
(2, now(), "신라호텔", "김영광", "김지현", "010-1234-1234", "010-9999-1111");

select * From tbl_info;

insert into tbl_album (info_seq, user_seq, album_name, album_access_id, album_thanks_url) values
(1, 1, "albumName", "123456789a", "thanks_url1"),
(2, 2, "HappyDay!", "123456789b", "thanks_url2");
select * from tbl_album;

insert into tbl_media (album_seq, storage_url, media_name, media_relation) values
(1, "s3_url1", "김나영", "친구"),
(1, "s3_url1", "나경인", "친구");
select * from tbl_media;

