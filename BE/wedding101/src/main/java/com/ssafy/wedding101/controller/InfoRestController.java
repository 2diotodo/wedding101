package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.model.dto.InfoDto;
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

    @Operation(summary = "결혼정보 조회")
    @GetMapping("")
    public ResponseEntity<InfoDto> getInfoDetail(Long infoSeq) {
        // Long userSeq = 토큰에서 가져와서 유저시퀀스로 찾는게 맞는듯 ?
        try {
            InfoDto infoDto = infoService.getInfo(infoSeq).orElseThrow();
            return new ResponseEntity<>(infoDto, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @Operation(summary = "결혼정보 등록")
    @PostMapping("")
    public ResponseEntity<?> writeInfo(@RequestBody InfoDto infoDto) {
        // Long userSeq = 가져와서
//        infoDto.setUserSeq(userSeq);
        try {
            infoService.writeInfo(infoDto);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @Operation(summary = "결혼정보 수정")
    @PutMapping("")
    public ResponseEntity<InfoDto> modifyInfo(@RequestBody InfoDto infoDto) {
//        infoDto.setUserSeq();
        infoService.modifyInfo(infoDto);
        return new ResponseEntity<>(infoDto, HttpStatus.OK);
    }

    @Operation(summary = "결혼정보 삭제")
    @GetMapping("/delete/{infoSeq}")
    public ResponseEntity<?> deleteInfo(@PathVariable Long infoSeq) {
        try {
            infoService.removeInfo(infoSeq);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}
