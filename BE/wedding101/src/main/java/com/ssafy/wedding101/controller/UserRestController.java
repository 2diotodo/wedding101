package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.model.dto.UserDto;
import com.ssafy.wedding101.model.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@CrossOrigin
public class UserRestController {

        private final UserService userService;

        @Operation(summary = "회원가입")
        @PostMapping("/signup")
        public ResponseEntity<?> singup(@RequestBody UserDto userDto) {
//            UserDto userDto = new UserDto(0L, userId, userPassword, userName, userNickname, userEmail);
            try {
                userService.writeUser(userDto);
                return new ResponseEntity<>(HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
            }
        }

        @Operation(summary = "로그인")
        @PostMapping("/login")
        public ResponseEntity<Map<String, Object>> login(@RequestBody UserDto userDto) {
//            UserDto userDto = userService.getUser(userId).orElseThrow();
            Map<String, Object> result = new HashMap<>();
            try {
                UserDto checkUserDto  = userService.getUser(userDto.getUserId()).orElseThrow();
                if (checkUserDto.getUserPassword().equals(userDto.getUserPassword())) {
                    result.put("data", checkUserDto);
                    result.put("message", "login success");
                }
                else {
                    result.put("message", "password incorrect");
                    return new ResponseEntity<>(result, HttpStatus.EXPECTATION_FAILED);
                }
            } catch (NoSuchElementException e) {
                result.put("message", "id incorrect");
                return new ResponseEntity<>(result, HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(result, HttpStatus.OK);
        }

        @Operation(summary = "회원 조회 (1)")
        @GetMapping ("")
        public ResponseEntity<UserDto> getUserDetail(Long userSeq) {
            // 세션에서 seq 가져옴
            try {
                UserDto userDto = userService.getUser(userSeq).orElseThrow();
                return new ResponseEntity<>(userDto, HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
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
            // 세션에서 seq 가져옴
            UserDto userDto = userService.getUser(userSeq).orElseThrow();
            userService.removeUser(userDto);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        @Operation(summary = "회원 정보 수정")
        @PutMapping("")
        public ResponseEntity<UserDto> modifyUser(@RequestBody UserDto userDto) {
//            UserDto userDto = new UserDto(userService.getUser(userId).orElseThrow().getUserSeq(), userId, userPassword, userName, userNickname, userEmail);
            // 토큰에서 유저Seq 가져와서 넣어줘도됨
            userDto.setUserSeq(userService.getUser(userDto.getUserId()).orElseThrow().getUserSeq());
            userService.modifyUser(userDto);
            return new ResponseEntity<>(userDto, HttpStatus.OK);
        }

        @Operation(summary = "닉네임 중복 확인")
        @GetMapping("/exist/nickname/{userNickname}")
        public ResponseEntity<Boolean> checkNicknameDuplicate(@PathVariable String userNickname) {
            return ResponseEntity.ok(userService.checkNicknameDuplicate(userNickname));
        }

        @Operation(summary = "아이디 중복 확인")
        @GetMapping("/exist/id/{userId}")
        public ResponseEntity<Boolean> checkIdDuplicate(@PathVariable String userId) {
            return ResponseEntity.ok(userService.checkIdDuplicate(userId));
        }

        @Operation(summary = "이메일 중복 확인")
        @GetMapping("/exist/email/{userEmail}")
        public ResponseEntity<Boolean> checkEmailDuplicate(@PathVariable String userEmail) {
            return ResponseEntity.ok(userService.checkEmailDuplicate(userEmail));
        }

        @Operation(summary = "이메일로 아이디 찾기")
        @GetMapping("/find/id/{userEmail}")
        public ResponseEntity<Map<String, Object>> findIdByEmail(@PathVariable String userEmail) {
            Map<String, Object> result = new HashMap<>();
            try {
                UserDto userDto = userService.getUserIdByUserEmail(userEmail).orElseThrow();
                result.put("userId", userDto.getUserId());
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(result, HttpStatus.OK);
        }


}
