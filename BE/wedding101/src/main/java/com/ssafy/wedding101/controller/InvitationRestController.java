package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.model.dto.InvitationDto;
import com.ssafy.wedding101.model.service.InvitationService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/invitation")
@CrossOrigin
public class InvitationRestController {
    private final InvitationService invitationService;

    @Operation(summary = "청첩장 생성")
    @PostMapping("")
    public ResponseEntity<Map<String, Object>> writeInvitation(@RequestBody InvitationDto invitationDto) {
        Map<String, Object> result = new HashMap<>();
        try {
//            invitationDto.setUserSeq(); // 토큰에서 받아서 넣기
            invitationService.writeInvitation(invitationDto);
            result.put("message", "청첩장 생성 SUCCESS");
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @Operation(summary = "청첩장 조회")
    @GetMapping("/{invitationSeq}")
    public ResponseEntity<InvitationDto> getInvitation(@PathVariable Long invitationSeq) {
        try {
            InvitationDto invitationDto = invitationService.getInvitation(invitationSeq).orElseThrow();
            return new ResponseEntity<>(invitationDto, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    

}
