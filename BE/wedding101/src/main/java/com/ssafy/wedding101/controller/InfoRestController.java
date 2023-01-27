package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.model.service.InfoService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/Info")
@CrossOrigin
public class InfoRestController {

    private final InfoService infoService;

    @Operation(summary = "결혼정보 등록")
    @PostMapping("")
    public ResponseEntity<?> registInfo(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @Operation(summary = "결혼정보 조회")
    @GetMapping("")
    public ResponseEntity<?> getInfo(){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
