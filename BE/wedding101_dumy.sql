drop schema if exists `wedding101_db`;
create schema `wedding101_db` default character set utf8 collate utf8_bin;
USE wedding101_db;

INSERT INTO tbl_user (user_id, user_password, user_name,user_nickname, user_email) VALUES
("dudwls624", "1234", "영진", "신부", "dudwls624@naver.com"),
("rla0347", "1234", "성환", "신랑", "rla0347@naver.com");

SELECT * FROM tbl_user;

insert into tbl_info (user_seq, wedding_day, wedding_hall_name, groom_name, bride_name, groom_phone_number, bride_phone_number) values
(1, now(), "theariel", "lsh", "kwj", "010-0000-0000", "010-1111-1111"),
(2, now(), "weston", "kwg", "kjh", "010-1234-1234", "010-9999-1111");

select * From tbl_info;

insert into tbl_album (info_seq, user_seq, album_name, album_access_id, album_thanks_url) values
(1, 1, "albumName", "123456789a", "https://a101-wedding101-pjt.s3.ap-northeast-2.amazonaws.com/dudwls624/video/00fce54f-555f-457e-a38b-d6f27c44ce4f.mp4"),
(2, 2, "HappyDay!", "123456789b", "https://a101-wedding101-pjt.s3.ap-northeast-2.amazonaws.com/dudwls624/video/00fce54f-555f-457e-a38b-d6f27c44ce4f.mp4");
select * from tbl_album;

-- relation_list = ['', 'family', 'relatives', 'friend', 'colleague', 'acquaintance']
-- receiver_list = ['', 'G', 'B']
insert into tbl_media (album_seq, storage_url, url_to_img, media_name, media_relation) values
(1, "https://a101-wedding101-pjt.s3.ap-northeast-2.amazonaws.com/dudwls624/video/76afe67e-5b83-45c3-b0d2-49febd48c378.mp4", "https://picsum.photos/200", "kny", "friend"),
(1, "https://picsum.photos/1000/800", "https://picsum.photos/200", "nki", "friend"),
(1, "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://picsum.photos/200", "강시몬", "family"),
(1, "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://picsum.photos/200", "dhl", "colleague"),
(1, "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://picsum.photos/200", "hihi", "colleague"),
(1, "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://picsum.photos/200", "meme", "acquaintance"),
(1, "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://picsum.photos/200", "mymy", "colleague"),
(1, "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://picsum.photos/200", "mine", "relatives");

select * from tbl_media;

select * from tbl_template;
insert into tbl_template (template_title, template_header, template_footer, template_etc) values
("기본템플릿", "초대합니다", "감사합니다", "돈많이주세요"),
("추가템플릿", "저희 결혼해요", "너무너무 감사합니다", "뷔페에 스테이크나옴");

select * from tbl_invitation;
insert into tbl_invitation (info_seq, user_seq, template_seq, photo_url1, photo_url2) values
(1, 1, 1, "photourl1", "photourl2");
insert into tbl_invitation (info_seq, user_seq, template_seq, photo_url1, photo_url2, template_header, template_etc) values
(2, 2, 2, "photourl1", "photourl2", "저희 드디어 결혼합니다", "뷔페에 킹크랩나옴");

