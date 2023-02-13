FROM openjdk:11-jdk-slim

RUN apt-get update &&\
    apt install ffmpeg -y &&\
    mkdir -p /root/ffmpeg/temp

RUN apt-get install -y locales file vim sudo timedatectl

RUN locale-gen ko_KR.UTF-8
RUN sudo sed -i 's/^# \(ko_KR.UTF-8\)/\1/' /etc/locale.gen
RUN sudo locale-gen
RUN sudo timedatectl set-timezone Asia/Seoul

ARG JAR_FILE=build/libs/*.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
