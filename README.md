# 💑 Wedding101 - 신혼부부에게 축하영상 & 사진을 보내보세요!

## Wedding101(웹 최적화) : [https://wedding101.shop](https://wedding101.shop)

## 프로젝트 진행기간

2023.01.03 ~ 2023.02.17(45일)
<br />
2학기 공통프로젝트

</br>

## 배경

Wedding101이란 결혼(Wedding)과 101(입문)의 합성어입니다. 101은 학문에서 처음 배우는 입문수업을 의미하는데, 결혼이라는 일생일대의 경험이 좋은 추억으로 남을 수 있도록 본 서비스가 좋은 길잡이가 될 수 있음을 의미하고 있습니다.

## 개요

_-예비 부부가 결혼 과정에서 지나치기 쉬운 순간들을 담아-_
Wedding101은 예비부부를 향한 축하를 사진과 영상으로 담아 디지털 앨범을 제공하는 서비스입니다. 본 프로젝트는 IoT 플랫폼을 이용한 미디어와 디지털 앨범이라는 웹 서비스를 통해 아날로그와 디지털이 통합된 사용자 경험을 제공하고자 합니다.
</br>

## 🧡 주요기능

---

- ### 현장 부스 - 결혼식장에 축하 메세지를 보내는 부스 설치 - 친지, 지인 등 하객이 부부를 위해 사진, 영상을 보낼 수 있습니다. - 사진은 폴라로이드 형태로 메세지를, 영상은 음성과 함께 메세지를 보낼 수 있습니다.

<br />

- ### 모바일 청첩장 - 결혼식 현장에 가지 못한 분들을 위한 서비스 - 예비 부부가 미리 보낸 청첩장을 통해 접근가능합니다. - 모바일에서 부부를 위한 메세지를 보낼 수 있습니다. - 사진과 영상 모두 가능합니다.

<br />

- ### 앨범관리 - 결혼식 이후 부부가 축하 영상 및 사진을 확인하고 북마크 및 삭제 등이 가능합니다. 특히 미디어 북마크를 통해 통합본을 신청하여 새로운 하나의 미디어로 받아볼 수 있습니다.
<br />

## 🎀 주요기술

---

**BackEnd**

- IntelliJ IDE
- Spring Boot
- Spring Data JPA
- Spring Security
- Spring Web
- Swagger
- mySQL 8.0.29

**FrontEnd**

- Visual Studio Code IDE 1.74.3
- React 18.0
- Material UI
- Node.js 18.13.0

**IoT**

- PyCharm IDE
- Raspberry Pi 4 model B
- PySide6 + 2

**Design**

- Figma

**CI/CD**

- AWS EC2
- Jenkins
- Nginx

## 프로젝트 파일구조

---

### Back

```

```

### Front

```
FE
├─node_modules
├─public
├─src
    ├─  App.css
    ├─  App.js
    ├─  index.css
    ├─  index.js
    ├─  logo.svg
    ├─  reportWebVitals.js
    ├─  setupTests.js
    │
    ├─api
    │      server.js
    │      userService.js
    │
    ├─assets
    │  └─img
    │
    ├─components
    │  ├─album
    │  │      MediaDialog.js
    │  │      MediaItem.css
    │  │      MediaItem.js
    │  │      MediaModal.js
    │  │      MergedItem.js
    │  │
    │  ├─board
    │  │      PaginationButtons.js
    │  │      TableItem.css
    │  │      TableItem.js
    │  │
    │  ├─common
    │  │      Footer.css
    │  │      Footer.js
    │  │      GoServiceButton.css
    │  │      GoServiceButton.js
    │  │      Header.css
    │  │      Header.js
    │  │      Modal.js
    │  │      Navbar.css
    │  │      Navbar.js
    │  │      ProgressBar.js
    │  │      selectBox.js
    │  │      UploadMedia.css
    │  │      UploadMedia.js
    │  │
    │  ├─main
    │  │      useMoveScroll.js
    │  │
    │  ├─serviceProcess
    │  │      WeddingInfoForm.css
    │  │      WeddingInfoForm.js
    │  │
    │  ├─user
    │  │  ├─UserLogin
    │  │  │      LoginForm.css
    │  │  │      LoginForm.js
    │  │  │
    │  │  ├─UserModify
    │  │  │      UserDetailForm.css
    │  │  │      UserDetailForm.js
    │  │  │      UserModifyForm.css
    │  │  │      UserModifyForm.js
    │  │  │
    │  │  └─UserRegist
    │  │          RegistForm.css
    │  │          RegistForm.js
    │  │
    │  └─WeddingInvitation
    │      │  InvitationForm.css
    │      │  InvitationForm.js
    │      │  UploadText.css
    │      │  UploadText.js
    │      │
    │      └─InfoModify
    │              BoardReview.js
    │              InfoDetailForm.css
    │              InfoDetailForm.js
    │              InfoDetailForm_og.js
    │              InfoModifyForm.css
    │              InfoModifyForm.js
    │
    ├─data
    │
    ├─modules
    │      index.js
    │      useConfirm.js
    │      useForm.js
    │      useUploadMedia.js
    │
    ├─pages
    │  │
    │  ├─Album
    │  │      AlbumCover.css
    │  │      AlbumCover.js
    │  │      AlbumDeleted.css
    │  │      AlbumDeleted.js
    │  │      AlbumList.css
    │  │      AlbumList.js
    │  │      AlbumSelected.js
    │  │
    │  ├─BoardQuestion
    │  │      BoardQuestion.css
    │  │      BoardQuestion.js
    │  │      BoardQuestionModal.css
    │  │
    │  ├─BoardReview
    │  │      BoardReview.css
    │  │      BoardReview.js
    │  │      BoardReviewRegist.js
    │  │
    │  ├─Main
    │  │      MainArea01.css
    │  │      MainArea01.js
    │  │      MainArea02.css
    │  │      MainArea02.js
    │  │      MainArea03.css
    │  │      MainArea03.js
    │  │      MainArea04.css
    │  │      MainArea04.js
    │  │      MainIndex.css
    │  │      MainIndex.js
    │  │      MainLayout.js
    │  │
    │  ├─ServiceProcess
    │  │      ServiceProcess01.css
    │  │      ServiceProcess01.js
    │  │      ServiceProcess02.css
    │  │      ServiceProcess02.js
    │  │      ServiceProcess03.css
    │  │      ServiceProcess03.js
    │  │      ServiceProcess04.css
    │  │      ServiceProcess04.js
    │  │
    │  ├─User
    │  │  ├─UserLogin
    │  │  │      UserLogin.css
    │  │  │      UserLogin.js
    │  │  │
    │  │  ├─UserMyPage
    │  │  │      UserMyPage.css
    │  │  │      UserMyPage.js
    │  │  │
    │  │  └─UserRegist
    │  │          UserRegist.css
    │  │          UserRegist.js
    │  │
    │  └─WeddingInvitation
    │          InvitationProcess01.css
    │          InvitationProcess01.js
    │          InvitationProcess02.css
    │          InvitationProcess02.js
    │          InvitationProcess03.css
    │          InvitationProcess03.js
    │          InvitationProcess04.css
    │          InvitationProcess04.js
    │          InvitationShared.css
    │          InvitationShared.js
    │          UserInvitation.css
    │          UserInvitation.js
    │
    ├─test
    └─utils

```

## 협업 툴

---

- Git
- Notion
- JIRA
- MatterMost

## 팀원 역할 분배

---

### Web - BackEnd

- 권영진
- 김지현

### Web - FrontEnd

- 류제엽

### IoT

- 김성환(팀장)
- 이동형
- 이진욱

## 프로젝트 산출물

---

## 프로젝트 결과물

- [포팅메뉴얼](./exec/Porting_menual/menual.md)
- [중간발표자료]()
- [최종발표자료]()

## 🧡 Wedding101 서비스 화면

---

### 로그인

- 서비스 신청을 위해 로그인이 필요합니다.
  ![로그인](https://user-images.githubusercontent.com/79901413/220556110-117c4698-fa21-4fb6-aaba-2b5a635895ba.gif)
  <br />

### 회원가입

- 아이디, 이메일 중복확인 및 비밀번호 길이 등 검증과정을 거쳐 가입합니다.
  <br />
  ![회원가입](https://user-images.githubusercontent.com/79901413/220556104-181ead89-299c-4d70-bb53-771622877cca.gif)
  <br />

### 마이페이지

- 로그인 후 마이페이지에서 자신의 정보를 확인하고 수정할 수 있습니다.
- 결혼정보 신청 후 확인 및 수정이 가능합니다.
  <br />
  ![마이페이지](https://user-images.githubusercontent.com/79901413/220556077-2c87b77f-1d23-416b-acd9-168a826a825f.gif)

<br />

### 메인화면

- 서비스 개요를 소개합니다.
- 전체 페이지 스크롤을 통해 구현하였습니다.
  <br />
  ![메인화면](https://user-images.githubusercontent.com/79901413/220556080-23ba88c8-20e7-47a5-bb5b-f295c132a962.gif)
  <br />

### 서비스 신청

- 로그인 후 메인화면 또는 헤더에서 서비스를 신청할 수 있습니다.
  <br />
  ![서비스신청-1](https://user-images.githubusercontent.com/79901413/220556084-769ca79c-10fc-4165-bcc9-71744b8b16db.gif)
  ![서비스신청-2](https://user-images.githubusercontent.com/79901413/220556087-eedbe859-6092-4938-a2eb-b683ec1e7999.gif)
  ![서비스신청-3,4](https://user-images.githubusercontent.com/79901413/220556090-a495d526-cc97-487b-ade3-fefeafea34ae.gif)

<br />

### 모바일 청첩장

- 모바일 환경에서 영상 및 사진을 업로드 할 수 있습니다.
- 업로드한 미디어는 부부가 앨범 목록에서 확인가능합니다.
  <br />
  ![모바일청첩장](https://user-images.githubusercontent.com/79901413/220558876-cebe2381-f98c-4748-95c2-6dc38ba40375.gif)
  <br />

### 앨범표지

- 서비스 신청 후 앨범표지에 접근할 수 있습니다.
- 앨범 목록에서 통합본 신청 후 앨범표지화면에서 확인가능합니다.
  <br />
  ![앨범-통합본](https://user-images.githubusercontent.com/79901413/220556096-4b9cd9ba-fead-4751-bc8b-61451a75575f.gif)
  <br />

### 앨범목록

- 하객이 보낸 사진과 영상을 확인할 수 있습니다.
- 미디어 북마크 및 삭제가 가능합니다.
- 통합본 신청을 통해 북마크 미디어들을 통합본으로 만들 수 있습니다.
  <br />
  ![앨범-목록](https://user-images.githubusercontent.com/79901413/220556105-65eede97-cf39-46d2-b2ac-c46fcae98247.gif)
  <br />

### 리뷰

- 서비스 이용에 대한 리뷰를 남길 수 있습니다.
  <br />
  ![리뷰](https://user-images.githubusercontent.com/79901413/220556068-42a29c08-3694-4a76-8ae7-e772bc926cd5.gif)

<br />
Jenkins Connection Test

```
1. iot branch modify
2. update (add -> commit -> push)
3. merge branch from iot to develop

then,
jenkins should detect somethings has been merged,
and should rebuild and test.
```

before setting the pipeline on the jenkins
