//package com.ssafy.wedding101.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.io.ClassPathResource;
//import lombok.Value;
//import lombok.extern.slf4j.Slf4j;
//
//import java.io.IOException;
//
//@Slf4j
//@Configuration
//public class FFmpegConfig {
//
//    @Value("${ffmpeg.exe.location")
//    private String ffmpegLocation;
//
//    @Value("ffprobe.exe.location")
//    private String ffprobeLocation;
//
//    @Bean(name = "ffMpeg")
////    public FFmpeg ffMpeg() throws IOException {
//        FFmpeg ffMpeg = null;
//
//        String osName = System.getProperty("os.name");
//
//        if (osName.toLowerCase().contains("win")){
//            ClassPathResource classPathResource = new ClassPathResource(ffmpegLocation);
//            ffMpeg = new FFmpeg(classPathResource.getURL().getPath());
//        } else if (osName.toLowerCase().contains("unix") || osName.toLowerCase().contains("linux")) {
//            ffMpeg = new FFmpeg(ffmpegLocation);
//        }
//
//        return ffMpeg;
//    }
//
//    @Bean(name = "ffProbe")
//    public FFprobe ffProbe() throws IOException {
//        FFprobe fFprobe = null;
//
//        String osName = System.getProperty("os.name");
//
//
//
//
//    }
//
//}
