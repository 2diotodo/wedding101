package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.model.dto.UserDto;
import com.ssafy.wedding101.model.service.UserService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
    @RequiredArgsConstructor
    @RequestMapping("/user")
    @CrossOrigin
public class UserRestController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(String userId, String userPassword) {

        UserDto userDto = userService.getUser(userId).orElseThrow();
        if (userDto.getUserPassword().equals(userPassword))
            return new ResponseEntity<>(userDto,HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
    }

}

