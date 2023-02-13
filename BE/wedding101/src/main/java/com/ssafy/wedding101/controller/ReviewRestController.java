package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.model.dto.QuestionDto;
import com.ssafy.wedding101.model.dto.ReviewDto;
import com.ssafy.wedding101.model.repository.UserRepository;
import com.ssafy.wedding101.model.service.ReviewService;
import com.ssafy.wedding101.model.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/review")
@CrossOrigin
public class ReviewRestController {
    private final ReviewService reviewService;
    private final UserService userService;
    private final UserRepository userRepository;

    @Operation(summary = "리뷰 등록")
    @PostMapping("")
    public ResponseEntity<Map<String, Object>> writeQuestion(@RequestBody ReviewDto reviewDto) {
        Map<String, Object> result = new HashMap<>();
        //토큰에서 가져오기
//        Long userSeq =
        Long userSeq = userService.getUser(reviewDto.getUserId()).orElseThrow().getUserSeq();
        // reviewDto.setUserId();
        reviewDto.setUserId(userService.getUser(userSeq).orElseThrow().getUserId());
        try {
            reviewService.writeReview(reviewDto);
            ReviewDto newReviewDto = reviewService.getReviewByUserSeq(userSeq)
                    .orElseThrow(() -> new NoSuchElementException("리뷰 등록 FAIL"));
            result.put("data", newReviewDto);
            result.put("messsage", "리뷰 등록 SUCCESS");
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            result.put("message", "리뷰 등록 FAIL");
            return new ResponseEntity<>(result, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @Operation(summary = "전체 리뷰 조회")
    @GetMapping("/all")
    public ResponseEntity<Map<String, Object>> getReviewList() {
        Map<String, Object> result = new HashMap<>();
        List<ReviewDto> reviewList = reviewService.getAllReview();
        result.put("data", reviewList); // 전체 리뷰 목록
        result.put("count", reviewList.size()); // 리뷰 게시글 수
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
