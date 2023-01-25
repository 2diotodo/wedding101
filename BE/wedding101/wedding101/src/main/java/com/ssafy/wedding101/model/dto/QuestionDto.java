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
public class QuestionDto {

    private Integer questionSeq;
    private Integer userSeq;

    private String questionTitle;

    private String questionContent;

    private Date createdAt;

    private Date updatedAt;

    private Boolean isValid;

}
