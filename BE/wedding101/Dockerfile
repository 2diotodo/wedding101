# # 1. Build Image
# FROM ubuntu:20.04 AS builder
 
# # Install dependencies
# RUN apt-get update &&\
#     apt install -y sudo &&\
#     sudo apt update &&\
#     apt install -y ffmpeg
 
# # Build modules
# RUN echo "ffmpeg -encoders"
 
# ------------------------------
# # 2. Production Image
# FROM busybox
# WORKDIR /opt/greet/bin
 
# # Deploy modules
# COPY --from=builder /go/src/github.com/asashiho/dockertext-greet/ .
# ENTRYPOINT ["./greet"]

FROM openjdk:11-jdk-slim

RUN apt-get update &&\
    apt install ffmpeg -y

ARG JAR_FILE=build/libs/*.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
