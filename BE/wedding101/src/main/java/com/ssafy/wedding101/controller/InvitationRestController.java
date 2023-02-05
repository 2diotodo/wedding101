package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.model.dto.InvitationDto;
import com.ssafy.wedding101.model.service.InvitationService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/invitation")
@CrossOrigin
public class InvitationRestController {
    private final InvitationService invitationService;

//    @Operation(summary = "청첩장 생성")
//    @PostMapping("")
//    public ResponseEntity<Map<String, Object>> writeInvitation(@RequestBody InvitationDto invitationDto) {
//        Map<String, Object> result = new HashMap<>();
//
//    }
}
