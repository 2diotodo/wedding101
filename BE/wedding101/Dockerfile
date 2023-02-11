FROM openjdk:11-jdk-slim

RUN apt-get update &&\
    apt install ffmpeg -y &&\
    mkdir -p /root/ffmpeg/temp

RUN apt-get update && apt-get install -y language-pack-ko
RUN locale-gen ko_KR.UTF-8
RUN update-locale LC_ALL=ko_KR.UTF-8 LANG=ko_KR.UTF-8

ARG JAR_FILE=build/libs/*.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
