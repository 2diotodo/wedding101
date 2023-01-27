package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.model.dto.UserDto;
import com.ssafy.wedding101.model.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@CrossOrigin
public class UserRestController {

    private final UserService userService;


    @Operation(summary = "로그인 요청")
    @PostMapping("/login")
    public ResponseEntity<UserDto> login(String userId, String userPassword) {

        UserDto userDto = userService.getUser(userId).orElseThrow();

        if (userDto.getUserPassword().equals(userPassword))
            return new ResponseEntity<>(userDto, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
    }
}
