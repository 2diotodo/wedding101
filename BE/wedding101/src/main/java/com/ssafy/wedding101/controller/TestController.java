package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.util.FileUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Log4j2
@RestController
@RequiredArgsConstructor
@CrossOrigin
public class TestController {

    private final FileUtil fileUtil;

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
    public ResponseEntity<?> mergeWeddingmedia(@RequestBody Map<String, List<String>> listMap) throws Exception {

        fileUtil.downloadImage(listMap.get("imageList"));
        fileUtil.downloadVideo(listMap.get("videoList"), listMap.get("imageList"));
        fileUtil.combineImage(listMap.get("imageList"));
        fileUtil.combineVideo();

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
