package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.util.FFmpegUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@Log4j2
@RestController
@RequiredArgsConstructor
public class TestController {


    private final FFmpegUtil fFmpegUtil;

    @GetMapping("/log")
    public void log() throws Exception {
        log.fatal("fatal log");
        log.error("error");
        log.warn("warn");
        log.info("info");
        log.debug("debug");
        log.trace("trace");

    }

    @PostMapping("/video/merge")
    public ResponseEntity<?> mergeWeddingmedia(Map<String, List<String>> listMap) throws Exception {

        fFmpegUtil.downloadImage(listMap.get("imageList"));
        fFmpegUtil.downloadVideo(listMap.get("videoList"), listMap.get("imageList"));
        fFmpegUtil.combineImage(listMap.get("imageList"));
        fFmpegUtil.combineVideo();

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
