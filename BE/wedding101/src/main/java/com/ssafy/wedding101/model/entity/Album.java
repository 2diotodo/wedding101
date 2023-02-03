package com.ssafy.wedding101.model.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tbl_album")
@Getter
@NoArgsConstructor
@DynamicInsert
public class Album {
    @Id
    @Column(name = "album_seq")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long albumSeq;
    @OneToOne
    @JoinColumn(name="user_seq", insertable = false, updatable = false)
    private Info info;
    @Column(name = "info_seq")
    private Long infoSeq;
    @Column(name = "user_seq")
    private Long userSeq;
    @Column(name = "album_Name")
    private String albumName;
    @Column(name = "album_color")
    private String albumColor;
    @Column(name = "album_photo_url")
    private String albumPhotoUrl;
    @Column(name = "album_access_id")
    private String albumAccessId;
    @Column(name = "album_thanks_url")
    private String albumThanksUrl;
    @Column(name = "album_media_cnt")
    private int albumMediaCnt;
    @Column(name = "is_valid", nullable = false, columnDefinition = "TINYINT")
    @ColumnDefault("true")
    private boolean isValid;

    @OneToMany(mappedBy = "album")
    private List<Media> mediaList = new ArrayList<>();

    @Builder
    public Album(Long albumSeq, Long infoSeq, Long userSeq, String albumName, String albumColor, String albumPhotoUrl,
                 String albumAccessId, String albumThanksUrl, int albumMediaCnt, boolean isValid) {
        this.albumSeq = albumSeq;
        this.infoSeq = infoSeq;
        this.userSeq = userSeq;
        this.albumName = albumName;
        this.albumColor = albumColor;
        this.albumPhotoUrl = albumPhotoUrl;
        this.albumAccessId = albumAccessId;
        this.albumThanksUrl = albumThanksUrl;
        this.albumMediaCnt = albumMediaCnt;
        this.isValid = isValid;
    }

    public void update(String albumName, String albumColor, String albumPhotoUrl, String albumThanksUrl) {
        this.albumName = albumName;
        this.albumColor = albumColor;
        this.albumPhotoUrl = albumPhotoUrl;
        this.albumThanksUrl = albumThanksUrl;
    }

    public void updateIsValid() {
        this.isValid = false;
    }

}
