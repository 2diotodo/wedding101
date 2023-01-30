package com.ssafy.wedding101.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RestController
public class TestController {
    @GetMapping("/log")
    public void log() throws Exception {
        log.fatal("fatal log");
        log.error("error");
        log.warn("warn");
        log.info("info");
        log.debug("debug");
        log.trace("trace");

    }
}
