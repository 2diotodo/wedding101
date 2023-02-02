package com.ssafy.wedding101.model.service;

import com.ssafy.wedding101.model.dto.MediaDto;

import java.util.Optional;

public interface MediaService {
    Optional<MediaDto> getMedia(Long mediaSeq);

}
