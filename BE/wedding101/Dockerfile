FROM openjdk:11-jdk-slim

RUN apt-get update &&\
    apt install ffmpeg -y &&\
    mkdir -p /root/ffmpeg/temp/image /root/ffmpeg/temp/video

ARG JAR_FILE=build/libs/*.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
