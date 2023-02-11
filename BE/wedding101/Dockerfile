FROM openjdk:11-jdk-slim

RUN apt-get update &&\
    apt install ffmpeg locale language-pack-ko -y &&\
    mkdir -p /root/ffmpeg/temp &&\
	locale-gen ko_KR.utf8

ARG JAR_FILE=build/libs/*.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
