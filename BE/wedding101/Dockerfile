FROM openjdk:11-jdk-slim

RUN apt-get update &&\
    apt install ffmpeg -y &&\
    mkdir -p /root/ffmpeg/temp

RUN apt-get install -y locales

RUN localedef -f UTF-8 -i ko_KR.UTF-8

ENV LC_ALL ko_KR.UTF-8
ENV LANG ko_KR.UTF-8 
ENV LANGUAGE ko_KR.UTF-8

RUN locale -a 

ARG JAR_FILE=build/libs/*.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
