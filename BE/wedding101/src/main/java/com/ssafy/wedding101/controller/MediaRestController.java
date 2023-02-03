package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.model.dto.MediaDto;
import com.ssafy.wedding101.model.service.MediaService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/media")
@CrossOrigin
public class MediaRestController {
    private final MediaService mediaService;

    @Operation(summary = "미디어 등록")
    @PostMapping("")
    public ResponseEntity<Map<String, Object>> writeMedia(@RequestBody MediaDto mediaDto) {
        Map<String, Object> result = new HashMap<>();
        try {
            mediaService.writeMedia(mediaDto);
            result.put("message", "미디어 등록 SUCCESS");
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }


}
