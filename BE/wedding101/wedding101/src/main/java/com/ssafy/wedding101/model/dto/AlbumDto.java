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
public class AlbumDto {

    private Integer albumSeq;

    private Integer weddingSeq;

    private Integer userSeq;

    private String albumName;

    private String albumColor;

    private String albumPhotoURL;
    private String albumAccessId;

    private Integer albumMediaCnt;

    private Date createdAt;

    private Date updatedAt;

    private Boolean isValid;

}
