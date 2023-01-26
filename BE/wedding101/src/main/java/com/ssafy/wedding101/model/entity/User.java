package com.ssafy.wedding101.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "tbl_user")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {

    @Id
    @Column(name = "user_seq")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userSeq;

    @Column(name = "user_id", nullable = false)
    private String userId;

    @Column(name = "user_password", nullable = true)
    private String userPassword;

    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column(name = "user_nickname", nullable = true)
    private String userNickname;

    @Column(name = "user_email", nullable = false)
    private String userEmail;

    @Builder
    public User(String userId, String userPassword, String userName, String userNickname, String userEmail){
        this.userId = userId;
        this.userPassword = userPassword;
        this.userName = userName;
        this.userNickname = userNickname;
        this.userEmail = userEmail;
    }

    public void updateUser(String userId, String userPassword, String userName, String userNickname, String userEmail){
        this.userId = userId;
        this.userPassword = userPassword;
        this.userName = userName;
        this.userNickname = userNickname;
        this.userEmail = userEmail;
    }

}
