USE wedding101_db;

-- user data
INSERT INTO tbl_user (user_id, user_password, user_name,user_nickname, user_email) VALUES
("dudwls624", "1234", "권영진", "영진짱", "dudwls624@naver.com"),
("rla0347", "1234", "김지현", "JIIHH", "rla0347@naver.com"),
("llee.dh", "1234", "이동형", "후드티개발자", "dhl@naver.com"),
("seonghwan1031", "1234", "김성환", "최고팀장", "seonghwan1031@naver.com");

INSERT INTO tbl_user (user_id, user_password, user_name,user_nickname, user_email) VALUES
("wlsdnr4729", "1234", "이진욱", "핑크마스크", "wlsdnr4729@naver.com"),
("2diotodo", "1234", "류제엽", "JYP", "2diotodo@naver.com"),
("ruddlssk97", "1234", "나경인", "오창불주먹", "ruddlssk97@naver.com"),
("na0ngS2", "1234", "김니영", "엘베지옥", "na0ngS2@naver.com"),
("godqhr7424", "1234", "김소정", "ZezE", "godqhr7424@naver.com"),
("leeuh7777", "1234", "이연희", "스팀기둥세움", "leeuh7777@naver.com"),
("s00hyun30", "1234", "김소현", "술무살", "s00hyun30@naver.com");
SELECT * FROM tbl_user;

-- info data / 6번부터는 데이터 같은거임 -> 리뷰데이터용 정보
insert into tbl_info 
(user_seq, wedding_day, wedding_hall_name, wedding_hall_address, wedding_hall_number, groom_name, bride_name, groom_phone_number, bride_phone_number,
groom_account_number, groom_account_bank, groom_account_name, bride_account_number, bride_account_bank, bride_account_name, 
groom_relation, bride_relation, groom_father_name, groom_mother_name, bride_father_name, bride_mother_name) values
(1, "2023-02-19 10:00:00", "서울신라호텔", "서울 중구 동호로 249", "02-1234-1234", "김성환", "권영진", "010-0000-0000", "010-1111-1111", "0-0000-0000-00", "국민은행", "김성환", "000-0000-000-00", "농협" , "권영진", "장남", "차녀", "김도진", "이은화", "권효창", "김수진"),
(2, "2023-02-25 11:00:00", "웨스턴 조선 서울", "서울 중구 소공로 106", "02-1234-1234", "강동원", "김지현", "010-0000-0000", "010-1111-1111", "0-0000-0000-00", "국민은행", "강동원", "000-0000-000-00", "농협" , "김지현", "장남", "장녀", "강요한", "박정화", "김영광", "김은혜"),
(3, "2023-02-25 14:00:00", "서울프라자예식장", "서울 중구 소공로 119", "02-1234-1234", "이동형", "이예솔", "010-0000-0000", "010-1111-1111", "0-0000-0000-00", "국민은행", "이동형", "000-0000-000-00", "농협" , "이예솔", "차남", "장녀", "이중재", "김지혜", "이한빛", "유하은"),
(4, "2023-02-25 10:00:00", "롯데호텔 웨딩", "서울 중구 을지로 30", "02-1234-1234", "김성환", "김채원", "010-0000-0000", "010-1111-1111", "0-0000-0000-00", "국민은행", "김성환", "000-0000-000-00", "농협" , "김채원", "차남", "장녀", "김구민", "윤승현", "김다산", "권한솔"),
(5, "2023-02-26 10:00:00", "롯데호텔 웨딩", "서울 중구 을지로 30", "02-1234-1234", "이진욱", "오채은", "010-0000-0000", "010-1111-1111", "0-0000-0000-00", "국민은행", "이진욱", "000-0000-000-00", "농협" , "오채은", "차남", "장녀", "이근석", "하예솔", "오창석", "박경남"),
(6, "2023-02-26 10:00:00", "롯데호텔 웨딩", "서울 중구 을지로 30", "02-1234-1234", "이진욱", "오채은", "010-0000-0000", "010-1111-1111", "0-0000-0000-00", "국민은행", "이진욱", "000-0000-000-00", "농협" , "오채은", "차남", "장녀", "이근석", "하예솔", "오창석", "박경남"),
(7, "2023-02-26 10:00:00", "롯데호텔 웨딩", "서울 중구 을지로 30", "02-1234-1234", "이진욱", "오채은", "010-0000-0000", "010-1111-1111", "0-0000-0000-00", "국민은행", "이진욱", "000-0000-000-00", "농협" , "오채은", "차남", "장녀", "이근석", "하예솔", "오창석", "박경남"),
(8, "2023-02-26 10:00:00", "롯데호텔 웨딩", "서울 중구 을지로 30", "02-1234-1234", "이진욱", "오채은", "010-0000-0000", "010-1111-1111", "0-0000-0000-00", "국민은행", "이진욱", "000-0000-000-00", "농협" , "오채은", "차남", "장녀", "이근석", "하예솔", "오창석", "박경남"),
(9, "2023-02-26 10:00:00", "롯데호텔 웨딩", "서울 중구 을지로 30", "02-1234-1234", "이진욱", "오채은", "010-0000-0000", "010-1111-1111", "0-0000-0000-00", "국민은행", "이진욱", "000-0000-000-00", "농협" , "오채은", "차남", "장녀", "이근석", "하예솔", "오창석", "박경남"),
(10, "2023-02-26 10:00:00", "롯데호텔 웨딩", "서울 중구 을지로 30", "02-1234-1234", "이진욱", "오채은", "010-0000-0000", "010-1111-1111", "0-0000-0000-00", "국민은행", "이진욱", "000-0000-000-00", "농협" , "오채은", "차남", "장녀", "이근석", "하예솔", "오창석", "박경남"),
(11, "2023-02-26 10:00:00", "롯데호텔 웨딩", "서울 중구 을지로 30", "02-1234-1234", "이진욱", "오채은", "010-0000-0000", "010-1111-1111", "0-0000-0000-00", "국민은행", "이진욱", "000-0000-000-00", "농협" , "오채은", "차남", "장녀", "이근석", "하예솔", "오창석", "박경남");
select * From tbl_info;

-- template data
select * from tbl_template;
insert into tbl_template (template_title, template_header, template_footer, template_etc) values
("기본템플릿", "HAPPY WEDDING DAY", "저희 결혼합니다.", "두 사람의 출발을 축하해주세요."),
("추가템플릿", "예쁜 예감이 들었다", "우리는 언제나 손을 잡고 있게 될 것이다", "이이체, <연인>");

-- invitation data
select * from tbl_invitation;
insert into tbl_invitation (info_seq, user_seq, template_seq, photo_url1, photo_url2) values
(1, 1, 1, "photourl1", "photourl2");
insert into tbl_invitation (info_seq, user_seq, template_seq, photo_url1, photo_url2, template_header, template_etc) values
(2, 2, 2, "photourl1", "photourl2", "저희 드디어 결혼합니다", "뷔페에 킹크랩나옴");

-- album data
insert into tbl_album (info_seq, user_seq, album_name, album_access_id, album_thanks_url) values
(1, 1, "albumName", "123456789a", "https://a101-wedding101-pjt.s3.ap-northeast-2.amazonaws.com/dudwls624/video/00fce54f-555f-457e-a38b-d6f27c44ce4f.mp4"),
(2, 2, "HappyDay!", "123456789b", "https://a101-wedding101-pjt.s3.ap-northeast-2.amazonaws.com/dudwls624/video/00fce54f-555f-457e-a38b-d6f27c44ce4f.mp4");
select * from tbl_album;

-- relation_list = ['', 'family', 'relatives', 'friend', 'colleague', 'acquaintance']
-- receiver_list = ['', 'G', 'B']
select * from tbl_media;
insert into tbl_media (album_seq, storage_url, url_to_img, media_name, media_relation) values
(1, "https://a101-wedding101-pjt.s3.ap-northeast-2.amazonaws.com/dudwls624/video/76afe67e-5b83-45c3-b0d2-49febd48c378.mp4", "https://picsum.photos/200", "kny", "friend"),
(1, "https://picsum.photos/1000/800", "https://picsum.photos/200", "nki", "friend"),
(1, "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://picsum.photos/200", "강시몬", "family"),
(1, "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://picsum.photos/200", "dhl", "colleague"),
(1, "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://picsum.photos/200", "hihi", "colleague"),
(1, "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://picsum.photos/200", "meme", "acquaintance"),
(1, "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://picsum.photos/200", "mymy", "colleague");

insert into tbl_media (album_seq, storage_url, url_to_img, media_name, media_relation) values
(1, "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://picsum.photos/200", "mine", "relatives");

select * from tbl_media;


select * from tbl_invitation;
insert into tbl_invitation (info_seq, user_seq, template_seq, photo_url1, photo_url2) values
(1, 1, 1, "photourl1", "photourl2");
insert into tbl_invitation (info_seq, user_seq, template_seq, photo_url1, photo_url2, template_header, template_etc) values
(2, 2, 2, "photourl1", "photourl2", "저희 드디어 결혼합니다", "뷔페에 킹크랩나옴");


select * from tbl_question;
select * from tbl_question where user_seq = 2 and is_valid = true order by updated_at desc limit 1;

select * from tbl_review where is_valid = true;

select * from tbl_review where album_seq = 1 and is_valid = true;