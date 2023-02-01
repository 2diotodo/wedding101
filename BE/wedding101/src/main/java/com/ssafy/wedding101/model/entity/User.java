package com.ssafy.wedding101.model.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.Type;
import org.springframework.data.jpa.repository.Temporal;
import org.springframework.format.annotation.NumberFormat;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tbl_user")
@Getter
@NoArgsConstructor
@DynamicInsert
public class User {

    @Id
    @Column(name = "user_seq")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userSeq;

    @Column(name = "user_id", nullable = false)
    private String userId;

    @Column(name = "user_password", nullable = false)
    private String userPassword;

    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column(name = "user_nickname", nullable = false)
    private String userNickname;

    @Column(name = "user_email", nullable = false)
    private String userEmail;

    @Column(name = "is_valid", nullable = false, columnDefinition = "TINYINT")
    @ColumnDefault("true")
    private boolean isValid;


    @Builder
    public User(Long userSeq, String userId, String userPassword, String userName, String userNickname, String userEmail, boolean isValid){
        this.userSeq = userSeq;
        this.userId = userId;
        this.userPassword = userPassword;
        this.userName = userName;
        this.userNickname = userNickname;
        this.userEmail = userEmail;
        this.isValid = isValid;
    }

    public void updateUser(String userId, String userPassword, String userName, String userNickname, String userEmail){
        this.userId = userId;
        this.userPassword = userPassword;
        this.userName = userName;
        this.userNickname = userNickname;
        this.userEmail = userEmail;
    }

    public void updateIsValid() {
        this.isValid = false;
    }

}
