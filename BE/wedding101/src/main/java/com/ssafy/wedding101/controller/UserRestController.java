package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.model.dto.UserDto;
import com.ssafy.wedding101.model.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@CrossOrigin
public class UserRestController {

        private final UserService userService;

        @Operation(summary = "회원가입")
        @PostMapping("/signup")
        public ResponseEntity<?> singup(String userId, String userPassword, String userName, String userNickname, String userEmail) {
            UserDto userDto = new UserDto(0L, userId, userPassword, userName, userNickname, userEmail);
            try {
                userService.writeUser(userDto);
                return new ResponseEntity<>(HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
            }
        }

        @Operation(summary = "로그인")
        @PostMapping("/login")
        public ResponseEntity<UserDto> login(String userId, String userPassword) {

            UserDto userDto = userService.getUser(userId).orElseThrow();

            if (userDto.getUserPassword().equals(userPassword))
                return new ResponseEntity<>(userDto, HttpStatus.OK);
            else
                return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }

        @Operation(summary = "회원 조회 (1)")
        @GetMapping ("")
        public ResponseEntity<UserDto> getUserDetail(Long userSeq) {
            UserDto userDto = userService.getUser(userSeq).orElseThrow();
            return new ResponseEntity<>(userDto, HttpStatus.OK);
        }

        @Operation(summary = "회원 조회 (all)")
        @GetMapping ("/all")
        public ResponseEntity<Map<String, Object>> getUserList() {
            List<UserDto> userList = userService.getAllUser();
            Map<String, Object> result = new HashMap<>();
            result.put("data", userList); // 전체 회원 목록
            result.put("count", userList.size()); // 전체 회원 수
            return new ResponseEntity<>(result, HttpStatus.OK);
        }

        @Operation(summary = "회원 탈퇴")
        @GetMapping ("/delete")
        public ResponseEntity<?> deleteUser(Long userSeq) {
            UserDto userDto = userService.getUser(userSeq).orElseThrow();
            userService.removeUser(userDto);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        @Operation(summary = "회원 정보 수정")
        @PutMapping("")
        public ResponseEntity<UserDto> modifyUser(String userId, String userPassword, String userName, String userNickname, String userEmail) {
            UserDto userDto = new UserDto(userService.getUser(userId).orElseThrow().getUserSeq(), userId, userPassword, userName, userNickname, userEmail);
            System.out.println("컨트롤러");
            System.out.println(userDto.toString()
            );
            userService.modifyUser(userDto);
            return new ResponseEntity<>(userDto, HttpStatus.OK);
        }



}
