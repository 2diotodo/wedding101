FROM openjdk:11-jdk-slim

RUN apt-get update &&\
    apt install ffmpeg language-pack-ko -y &&\
	local-gen ko_KR.UTF-8 &&\
	update-local LC_ALL=ko_KR.UTF-8 LANG=ko_KR.UTF-8 &&\
    mkdir -p /root/ffmpeg/temp

ARG JAR_FILE=build/libs/*.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
