package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.model.dto.AlbumDto;
import com.ssafy.wedding101.model.service.AlbumService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/album")
@CrossOrigin
public class AlbumRestController {
    private final AlbumService albumService;

    @Operation(summary = "앨범 조회")
    @GetMapping("")
    public ResponseEntity<AlbumDto> getAlbumDetail(Long userSeq) {
        //토큰 userSeq
        try {
            AlbumDto albumDto = albumService.getAlbumByUserSeq(userSeq).orElseThrow();
            return new ResponseEntity<>(albumDto, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @Operation(summary = "앨범 삭제")
    @GetMapping("/delete/{albumSeq}")
    public ResponseEntity<?> deleteAlbum(@PathVariable Long albumSeq) {
        try {
            albumService.removeAlbum(albumSeq);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }




}
