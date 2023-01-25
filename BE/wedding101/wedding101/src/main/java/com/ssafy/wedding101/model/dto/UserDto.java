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
public class UserDto {

    private Integer userSeq;
    private String userId;
    private Character userType;
    private String userPassword;
    private String userEmail;
    private String userNickname;
    private Boolean isBanned;
    private Date createdAt;
    private Date updatedAt;
    private Boolean isValid;

}
