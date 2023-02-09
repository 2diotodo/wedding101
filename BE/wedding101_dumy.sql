USE wedding101_db;

INSERT INTO tbl_user (user_id, user_password, user_name,user_nickname, user_email) VALUES
("dudwls624", "1234", "kwj", "dhiekd", "dudwls624@naver.com"),
("rla0347", "1234", "kjh", "sddlkjd", "rla0347@naver.com");

SELECT * FROM tbl_user;

insert into tbl_info (user_seq, wedding_day, wedding_hall_name, groom_name, bride_name, groom_phone_number, bride_phone_number) values
(1, now(), "theariel", "lsh", "kwj", "010-0000-0000", "010-1111-1111"),
(2, now(), "weston", "kwg", "kjh", "010-1234-1234", "010-9999-1111");

select * From tbl_info;

insert into tbl_album (info_seq, user_seq, album_name, album_access_id, album_thanks_url) values
(1, 1, "albumName", "123456789a", "https://a101-wedding101-pjt.s3.ap-northeast-2.amazonaws.com/dudwls624/video/00fce54f-555f-457e-a38b-d6f27c44ce4f.mp4"),
(2, 2, "HappyDay!", "123456789b", "https://a101-wedding101-pjt.s3.ap-northeast-2.amazonaws.com/dudwls624/video/00fce54f-555f-457e-a38b-d6f27c44ce4f.mp4");
select * from tbl_album;

insert into tbl_media (album_seq, storage_url, media_name, media_relation) values
(1, "s3_url1", "kny", "Friend"),
(1, "s3_url2", "nki", "Friend"),
(1, "유알엘", "강시몬", "친구");
select * from tbl_media;

select * from tbl_template;
insert into tbl_template (template_title, template_header, template_footer, template_etc) values
("기본템플릿", "초대합니다", "감사합니다", "돈많이주세요"),
("추가템플릿", "저희 결혼해요", "너무너무 감사합니다", "뷔페에 스테이크나옴");

