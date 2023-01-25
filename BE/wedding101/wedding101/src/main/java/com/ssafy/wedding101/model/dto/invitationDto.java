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
public class invitationDto {

    private Integer invitationSeq;

    private Integer weddingSeq;

    private Integer userSeq;

    private Integer templateSeq;

    private String photoURL1;

    private String photoURL2;

    private String templateHeader;

    private String templateFooter;

    private String templateEtc;

    private Date createdAt;

    private Date updateAt;

    private Boolean isValid;

}
