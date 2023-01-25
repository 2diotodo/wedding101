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
public class InfoDto {

    private Integer infoSeq;

    private Integer userSeq;

    private Date weddingDay;

    private String weddingHallName;

    private String weddingHallAddress;
    private String weddingHallNumber;
    private String groomName;
    private String brideName;

    private String groomPhoneNumber;
    private String bridePhoneNumber;

    private String groomAccountNumber;
    private String brideAccountNumber;
    private String groomAccountName;
    private String brideAccountName;

    private String groomRelation;
    private String brideRelation;

    private String groomFatherName;
    private String groomMotherName;

    private String brideFatherName;
    private String brideMotherName;

    private Boolean groomFatherIsAlive;
    private Boolean groomMotherIsAlive;

    private Boolean brideFatherIsAlive;
    private Boolean brideMotherIsAlive;

    private Date createdAt;

    private Date updatedAt;

    private Boolean isValid;

}
