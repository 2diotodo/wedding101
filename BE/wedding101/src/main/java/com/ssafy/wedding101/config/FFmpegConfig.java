package com.ssafy.wedding101.config;

import net.bramp.ffmpeg.FFmpeg;
import net.bramp.ffmpeg.FFprobe;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;

@Configuration
public class FFmpegConfig {

    @Value(value = "${ffmpeg.exe.location}")
    public String ffmpegPath;

    @Value("${ffprobe.exe.location}")
    public String ffprobePath;

    @Bean(name = "ffMpeg")
    public FFmpeg fFmpeg() throws IOException {
        FFmpeg ffmpeg = null;

        String osName = System.getProperty("os.name");

        // 운영체제가 window 인 경우 jar에 내장되어있는 ffmpeg 이용
        if (osName.toLowerCase().contains("win")) {
            ClassPathResource classPathResource = new ClassPathResource(ffmpegPath);
            ffmpeg = new FFmpeg(classPathResource.getURL().getPath());
        } else if (osName.toLowerCase().contains("unix") || osName.toLowerCase().contains("linux")) {
            ffmpeg = new FFmpeg(ffmpegPath);
        }

        return ffmpeg;
}

    @Bean(name = "ffProbe")
    public FFprobe fFprobe() throws IOException {
        FFprobe fFprobe = null;

        String osName = System.getProperty("os.name");

        if (osName.toLowerCase().contains("win")) {
            ClassPathResource classPathResource = new ClassPathResource(ffprobePath);
            fFprobe = new FFprobe(classPathResource.getURL().getPath());
        } else if (osName.toLowerCase().contains("unix") || osName.toLowerCase().contains("linux")) {
            fFprobe = new FFprobe(ffprobePath);
        }

        return fFprobe;
    }
}
