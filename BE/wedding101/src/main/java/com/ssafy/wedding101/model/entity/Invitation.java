package com.ssafy.wedding101.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Entity
@Table(name = "tbl_invitation")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
public class Invitation {
    @Id
    @Column(name = "invitation_seq")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long invitationSeq;

    @OneToOne
    @JoinColumn(name = "info_seq")
    private Info info;

    @Column(name = "user_seq")
    private Long userSeq;

    @Column(name = "template_seq")
    private Long templateSeq;

    @Column(name = "photo_url1")
    private String photoUrl1;

    @Column(name = "photo_url2")
    private String photoUrl2;

    @Column(name = "template_header")
    private String templateHeader;

    @Column(name = "template_footer")
    private String templateFooter;

    @Column(name = "template_etc")
    private String templateEtc;

    @Column(name = "is_valid", nullable = false, columnDefinition = "TINYINT")
    @ColumnDefault("true")
    private boolean isValid;

    public void setInfo(Info info) {
        this.info = info;
        this.userSeq = info.getUserSeq();
    }
}
