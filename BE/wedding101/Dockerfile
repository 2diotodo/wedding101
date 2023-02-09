FROM openjdk:11-jdk-slim

RUN apt-get update &&\
    apt install ffmpeg

ARG JAR_FILE=build/libs/*.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
