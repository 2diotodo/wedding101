package com.ssafy.wedding101.controller;

import com.ssafy.wedding101.model.dto.MediaDto;
import com.ssafy.wedding101.model.service.MediaService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/media")
@CrossOrigin
public class MediaRestController {
    private final MediaService mediaService;

    @Operation(summary = "미디어 등록")
    @PostMapping("")
    public ResponseEntity<Map<String, Object>> writeMedia(@RequestBody MediaDto mediaDto) {
        Map<String, Object> result = new HashMap<>();
        try {
            mediaService.writeMedia(mediaDto);
            result.put("message", "미디어 등록 SUCCESS");
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @Operation(summary = "미디어 조회")
    @GetMapping("/all/{albumSeq}")
    public ResponseEntity<Map<String, Object>> getAllMediaList(@PathVariable Long albumSeq) {
        Map<String, Object> result = new HashMap<>();
        List<MediaDto> mediaList = mediaService.getAllMedia(albumSeq);
        result.put("data", mediaList);
        result.put("count", mediaList.size());
        return new ResponseEntity<>(result, HttpStatus.OK);
//        Map<String, String> conditions = new HashMap<>();
//        if(!StringUtils.isEmpty(type)) {
//            conditions.put("type", type);
//        }
//        if(!StringUtils.isEmpty(to)) {
//            conditions.put("to", to);
//        }
//        if(!StringUtils.isEmpty(relation)) {
//            conditions.put("relation", relation);
//        }
//        Map<String, Object> result = new HashMap<>();
//        List<MediaDto> mediaList =


//        int caseNum = 7;
//        if(StringUtils.isEmpty(type)) {
//            type = "all";
//            caseNum -= 1;
//        }
//        if(StringUtils.isEmpty(to)) {
//            to = "a";
//            caseNum -= 2;
//        }
//        if(StringUtils.isEmpty(relation)) {
//            relation = "all";
//            caseNum -= 4;
//        }
//        List<MediaDto> mediaList = new ArrayList<>();
//        switch (caseNum) {
//            case 0:
//                //옵션없음
//                break;
//            case 1:
//                //type
//                break;
//            case 2:
//                //to
//                break;
//            case 3:
//                //type, to
//                break;
//            case 4:
//                //relation
//                break;
//            case 5:
//                //type, relation
//                break;
//            case 6:
//                //to, relation
//                break;
//            case 7:
//                //type, to, relation
//                break;
//            default:
//        }
//        result.put("data", mediaList); //불러온 미디어 목록
//        result.put("count", mediaList.size()); // 미디어 수
//        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    public ResponseEntity<Map<String, Object>> getMediaListByOptions(@RequestParam(value = "type", required = false) String type,
                                                                     @RequestParam(value = "to", required = false) String to,
                                                                     @RequestParam(value = "relation", required = false) String relation) {
        return new ResponseEntity<>(HttpStatus.OK);
    }






}
