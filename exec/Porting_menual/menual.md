# 포팅 매뉴얼

## 1. 환경 구성
---
1) EC2 서버에 도커 설치 </br>
    a. 공식 문서 참조 - [🔗](https://docs.docker.com/engine/install/ubuntu/) <br></br>
    b. 순서<br></br>
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
---
2) 자동 CI/CD Pipeline 설계 </br>
   a. 배포 툴 설정
    - 🐳 Docker 
      - 도커 이미지를 통해 손 쉬운 배포와 배포환경 조성 가능<br>
      - 도커파일과 도커 컴포즈를 통해 여러 도커 컨테이너를 손쉽게 관리 가능 <br><br>

   - 🕴🏼Jenkins
      - FE / BE 의 빌드 과정과 배포 과정을 ***pipeline*** 스크립트 하나로 관리 가능 <br>
      - 빌드 테스트와 로그를 통해 에러 체크 용이
      - 다양한 플러그 인 제공 <br><br>
   
   b. 자동 배포 환경을 위한 디렉토리 구조
      - 아래의 구조로 디렉토리들을 구성해야한다
      - 홈 디렉토리 파악 : 3개의 디렉토리 (도커 파일 폴더, 프로젝트 폴더, 젠킨스 백업 폴더)
        ```sh
        ~$ls 
        Dockerfiles  S08P12A101  jenkins_backup
        ```
      - Dockerfiles 구조
        ```sh
        $tree ./Dockerfiles
        ./Dockerfiles
        ├── docker-compose.yaml
        ├── jenkins
        │   └── Dockerfile
        ├── mysql
        │   ├── Dockerfile
        │   └── conf.d
        │       └── my.cnf
        └── nginx
            ├── Dockerfile
            ├── conf.d
            │   └── default.conf
            └── nginx.conf
        ```
    - jenkins_backup 디렉토리는 docker-compose 로 젠킨스를 실행 시킬 때<br>
      볼륨을 마운트하는 대상이 된다. 따라서 젠킨스가 껐다 켜져도 원상복구가 된다<br><br>

    c. 자동 배포를 위한 설정 파일 구성

    |docker-compose.yaml|Dockerfile(BE)|Dockerfile(FE)|
    |:------:|:--:|:--:|
    |jenkins, nginx, mysql|Spring|React|

    <details><summary>docker-compose.yaml</summary>
    ```yaml

        version: "3"
        services:
            jenkins:
                container_name: jenkins
                build:
                    context: ./jenkins
                    dockerfile: Dockerfile
                ports:
                    - "9090:8080"
                    - "50000:50000"
                volumes:
                    - /home/ubuntu/jenkins_backup:/var/jenkins_home
                    - /var/run/docker.sock:/var/run/docker.sock
                environment:
                    TZ: "Asia/Seoul"
            mysql:
                container_name: mysql
                build:
                    context: ./mysql
                    dockerfile: Dockerfile
                ports:
                    - "3306:3306"
                volumes:
                    - /mysql:/var/lib/mysql
                environment:
                    MYSQL_DATABASE: wedding101_db
                    MYSQL_ROOT_PASSWORD: ssafy
                    MYSQL_PASSWORD: ssafy
                    MYSQL_ALLOW_EMPTY_PASSWORD: "yes"
                    MYSQL_CHARACTER_SET_SERVER: utf8mb4
                    MYSQL_COLLATION_SERVER: utf8mb4_unicode_ci
            nginx:
                container_name: nginx
                build:
                    context: ./nginx
                    dockerfile: Dockerfile
                ports:
                    - "80:80"
                    - "443:443"
                expose:
                    - "80"
                    - "443"
                volumes:
                    - ./nginx/conf.d:/etc/nginx/conf.d
                    - /etc/letsencrypt:/etc/letsencrypt
                    - ./nginx/nginx.conf:/etc/nginx/nginx.conf
  
    ```
    </details>
    
3) 