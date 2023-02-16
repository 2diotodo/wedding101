# 포팅 매뉴얼

## 1. 환경 구성

1) EC2 서버에 도커 설치 </br>
    a. 공식 문서 참조 - [🔗](https://docs.docker.com/engine/install/ubuntu/) </br>
    b. 순서</br>

    - 이전 도커 관련 라이브러리 삭제
        ```sh
        $sudo apt-get remove docker docker-engine docker.io containerd runc
        ```
    - <u>**Docker 레포지토리**</u>를 설정
      -  apt 패키지 업데이트 + apt가 HTTPS를 통해 저장소를 사용할 수 있도록 패키지 설치
            ```sh
            $sudo apt-get update
            $sudo apt-get install \
                ca-certificates \
                curl \
                gnupg \
                lsb-release
            ```
      - Docker’s official GPG 키 추가
        ```sh
        $sudo mkdir -m 0755 -p /etc/apt/keyrings
        $curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
        ```
      - 레포지토리 설정
        ```sh
        $echo \ "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \ $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
        ```
    - <u>**Docker 엔진**</u> 설치 
       - apt 패키지 업데이트
            ```sh 
            $sudo apt-get update 
            ```
       - Docker 엔진, containerd, and Docker Compose 설치
            ```sh 
            $sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin 
            ```
    - 도커 동작 확인
      ```sh 
      $docker ps
      CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
      ```
      - 권한 에러 시 권한 부여
        ```sh
        $sudo chown root:docker /var/run/docker.sock
        ```
2) 