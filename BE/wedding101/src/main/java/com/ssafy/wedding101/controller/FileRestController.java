package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.model.service.impl.FileService;
import com.ssafy.wedding101.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/file")
@RequiredArgsConstructor
@CrossOrigin
public class FileRestController {

    private final FileService fileService;
    private final JwtUtil jwtUtil;

    @PostMapping("/uploadAlbumCover")
    public ResponseEntity<String> uploadAlbumCover(@RequestHeader String authorization,
                                                   @RequestBody MultipartFile multipartFile) {

        String accessToken = authorization.substring(7);
        String userId = jwtUtil.getSubject(accessToken);

        System.out.println(userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/uploadInvitation")
    public ResponseEntity<String> uploadInvitation(@RequestHeader("Authorization") String authorization,
                                                   @RequestBody MultipartFile multipartFile) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/uploadMedia/image")
    public ResponseEntity<String> uploadMediaImage(@RequestHeader("Authorization") String authorization,
                                                   @RequestBody MultipartFile multipartFile) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/uploadMedia/video")
    public ResponseEntity<String> uploadMediaVideo(@RequestHeader("Authorization") String authorization,
                                                   @RequestBody MultipartFile multipartFile) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/uploadImageC")
    public ResponseEntity<String> uploadImage(@RequestHeader("Authorization") String authorization,
                                              @RequestBody MultipartFile multipartFile) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/uploadVideo")
    public ResponseEntity<String> uploadVideo(@RequestHeader("Authorization") String authorization,
                                              @RequestBody MultipartFile multipartFile) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/mergeVideo")
    public ResponseEntity<?> mergeVideo(@RequestBody Map<String, List<String>> listMap) throws Exception {

        return new ResponseEntity<>(HttpStatus.OK);
    }


}
