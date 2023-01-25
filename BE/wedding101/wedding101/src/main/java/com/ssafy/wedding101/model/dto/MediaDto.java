package com.ssafy.wedding101.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MediaDto {

    private Integer mediaSeq;

    private Integer albumSeq;

    private String storageURL;

    private Boolean onBooth;

    private Boolean isVideo;

    private String mediaName;

    private String mediaRelation;

    private String mediaReceiver;

    private Boolean isWish;
    private Boolean isInBin;

    private Date createdAt;

    private Date updatedAt;

    private Boolean isValid;

}
