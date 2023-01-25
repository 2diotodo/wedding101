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
public class ManagerDto {

    private Integer managerSeq;

    private String managerId;

    private String managerPassword;

    private String mangerName;

    private String managerEmail;

    private String managerGrade;

    private Date createdAt;

    private Date updatedAt;

    private Boolean isValid;

}
