FROM openjdk:11-jdk-slim

RUN apt-get update &&\
    apt install ffmpeg &&\
    mkdir -p /root/ffmpeg/temp

RUN apt-get install -y locales language-pack-ko \
	locale-gen ko_KR.utf8


ARG JAR_FILE=build/libs/*.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
