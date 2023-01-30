# 230125

1. 페이지 전환 기능 구현
  - QStackedWidget
  - 페이지 구성 : 메인, 약관, 정보입력, 모드선택, 사진모드, 영상모드, 종료
  - 다음 버튼, 홈 버튼
2. GUI에서 영상 녹화하여 파일 생성하는 예제 실행
3. 영상과 음성 동시화하는 파일 생성

4. PySide.QThread vs therading.thread
- [Blog Article](https://coding-yoon.tistory.com/46)

- `pip install pyaudio`


### sum-up
1. cam_audio_record/main.py
  - 녹음, 녹화 싱크 맞음
2. cam_write/main.py
  - GUI 버튼으로 녹음, 녹화 합본 생성 가능
  - but, 싱크가 맞지 않는 문제
  - also, 반복적으로 생성하는 방법은 아직 구현하지 못함


# 230126

1. dhl 영상처리 기능 + 배경 전환 위한 UI 구성
2. GUI + 영상/음성 녹화 기능 합치기
3. 스트림과 버퍼에 대한 이해
  - [스트리밍(Streaming)이란](https://curryyou.tistory.com/440)
  - [PiCamera Docs](https://picamera.readthedocs.io/en/release-1.13/recipes1.html#)
4. 라즈베리파이 한글 설정
5. alsamixer로 마이크 음량 키우기

### sum-up
1. 간헐적으로 영상/음성 녹화에 segmentation fault 및 기타 오류 사항 개선해야함
2. Picamera로 녹화, Pyaudio로 녹음하는 방법 생각해볼 필요 있다.


# 230127
1. 음성 및 영상 녹화 시 실시간 피드백 가능
- but, 녹화 종료 후 초기 화면으로 돌아가지 않음