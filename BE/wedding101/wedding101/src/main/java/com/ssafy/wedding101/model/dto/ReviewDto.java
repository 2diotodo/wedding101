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
public class ReviewDto {

    private Integer reviewSeq;

    private Integer albumSeq;

    private String reviewTitle;

    private Integer reviewRate;

    private String reviewContent;

    private Date createdAt;

    private Date updatedAt;

    private Boolean isValid;

}
