package com.ssafy.wedding101.util;

import lombok.RequiredArgsConstructor;
import net.bramp.ffmpeg.FFmpeg;
import net.bramp.ffmpeg.FFmpegExecutor;
import net.bramp.ffmpeg.FFprobe;
import net.bramp.ffmpeg.builder.FFmpegBuilder;
import org.springframework.stereotype.Component;

import java.io.*;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Component
@RequiredArgsConstructor
public class FileUtil {

    private final FFmpeg ffmpeg;

    private final FFprobe ffProbe;

    // Temp 디렉토리에 대한 basePath 설정
    private final String basePath = "/root/ffmpeg/temp/";
//    private final String basePath = "C:/Users/SSAFY/Desktop/temp/";


    public void downloadVideo(List<String> videoList, List<String> imageList) throws IOException {

        File file = new File(basePath + "videoList.txt");
        BufferedWriter writer = new BufferedWriter(new FileWriter(file));


        for (int i = 0; i < videoList.size(); i++) {
            FFmpegBuilder builder = new FFmpegBuilder()
                    .overrideOutputFiles(true)
                    .addInput(videoList.get(i))
                    .addOutput(basePath + "/video/Test" + i + ".mp4")
                    .addExtraArgs("-c:v", "h264")
                    .setFormat("mp4")
                    .setVideoFrameRate(30, 1)
                    .setVideoCodec("libx265")
                    .done();

            writer.write("file '" + basePath + "/video/Test" + i + ".mp4'\n");

            FFmpegExecutor executor = new FFmpegExecutor(ffmpeg, ffProbe);
            executor.createJob(builder).run();
        }

        if (imageList.size() != 0)
            writer.write("file '" + basePath + "/video/imageList.mp4\n");


        writer.close();
    }

    public void downloadImage(List<String> imageList) throws IOException {

        File file = new File(basePath + "imageList.txt");


        for (int i = 0; i < imageList.size(); i++) {

            String fileUrl = imageList.get(i);

            String fileName = basePath + "/image/Test" + i + ".jpg";
            Path target = Paths.get(fileName);

            try {
                URL url = new URL(fileUrl);
                InputStream in = url.openStream();
                Files.copy(in, target);
                in.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public void combineImage(List<String> imageList) {

        if (imageList.size() == 0)
            return;

        FFmpegBuilder builder = new FFmpegBuilder()
                .overrideOutputFiles(true)
                .setInput(basePath + "/image/Test0.jpg");

        for (int i = 0; i < imageList.size(); i++) {
            builder.addExtraArgs("-loop", "1")
                    .addExtraArgs("-t", "3")
                    .addExtraArgs("-i", basePath + "image/Test" + i + ".jpg");
        }

        StringBuilder sb = new StringBuilder();
        sb.append("[0:v]scale=1280:720:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,setsar=1,fade=t=out:st=2:d=1[v0];");

        for (int i = 1; i < imageList.size(); i++) {
            sb.append("[")
                    .append(i)
                    .append(":v]scale=1280:720:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,setsar=1,fade=t=in:st=0:d=1,fade=t=out:st=2:d=1[v")
                    .append(i)
                    .append("];");
        }

        for (int i = 0; i < imageList.size(); i++) {
            sb.append("[v").append(i).append("]");
        }
        sb.append("concat=n=").append(imageList.size()).append(":v=1:a=0,format=yuv420p[v]");

        System.out.println("hi");
        System.out.println(sb.toString());
        System.out.println("hi");

        builder.setComplexFilter(sb.toString())
                .addOutput(basePath + "video/imageList.mp4")
                .addExtraArgs("-map", "[v]")
                .addExtraArgs("-c:v", "h264")
                .setFormat("mp4")
                .setVideoFrameRate(30, 1)
                .setVideoCodec("libx265")
                .done();

        FFmpegExecutor executor = new FFmpegExecutor(ffmpeg, ffProbe);

        executor.createJob(builder).run();
    }

    public void combineVideo() {

        FFmpegBuilder builder = new FFmpegBuilder()
                .overrideOutputFiles(true)
//              // 비디오 저장 폴더
                // 여기서 서비스 코드에 맞는? 회원 정보에 맞는 앨범 찾는다
                // 해당 앨범 디렉토리에 영상이 저장되있다.
                // 그 디렉토리에 접근해서 파일 목록을 하나씩 불러와
                // for 문을 돌면서 그 파일 이름들을
                //    fopen 'videolist.txt.' as f
                //    f.write( 비디오 이름 )
                // videoList.txt
                // "/home/ubuntu/ffmpeg/temp"
                .addInput(basePath + "videoList.txt")
                .addExtraArgs("-f", "concat")
                .addExtraArgs("-safe", "0")
//                .addExtraArgs("--with:fade:out-in")
                .addOutput(basePath + "output.mp4")
                .done();

        FFmpegExecutor executor = new FFmpegExecutor(ffmpeg, ffProbe);

        executor.createJob(builder).run();


//        executor.createTwoPassJob(builder).run();
        //https://github.com/bramp/ffmpeg-cli-wrapper/issues/109
        //java.lang.IllegalStateException: Target size does not support multiple inputs

    }
}
