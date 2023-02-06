package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.model.service.impl.AmazonS3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/s3")
@RequiredArgsConstructor
@CrossOrigin
public class AmazonS3RestController {

    private final AmazonS3Service amazonS3Service;

    @PostMapping("/uploadImage")
    public ResponseEntity<String> uploadImage(String userId, MultipartFile multipartFile) {
        return new ResponseEntity<>(amazonS3Service.uploadImage(userId, multipartFile), HttpStatus.OK);
    }

    @PostMapping("/uploadVideo")
    public ResponseEntity<String> uploadVideo(String userId, MultipartFile multipartFile) {
        return new ResponseEntity<>(amazonS3Service.uploadVideo(userId, multipartFile), HttpStatus.OK);
    }

    @DeleteMapping("/deleteFile")
    public ResponseEntity<?> deleteFile(String fileUrl) {
        amazonS3Service.deleteFile(fileUrl);
        return new ResponseEntity<>(HttpStatus.OK);
    }




    // 제발 바꼈다고 인식해줘!!!!! 




}
