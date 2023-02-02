package com.ssafy.wedding101.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Entity
@Table(name = "tbl_media")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
public class Media {
    @Id
    @Column(name = "media_seq")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mediaSeq;

    @ManyToOne // 하나의 앨범의 여러개의 미디어가 있다. 주인은 media
    @JoinColumn(name = "album_seq", updatable = false, insertable = false)
    private Album album;

    @Column(name = "storage_url")
    private String storageUrl;

    @Column(name = "on_booth", columnDefinition = "TINYINT")
    private boolean onBooth;

    @Column(name = "is_video", columnDefinition = "TINYINT")
    private boolean isVideo;

    @Column(name = "media_name")
    private String mediaName;

    @Column(name = "media_relation")
    private String mediaRelation;

    @Column(name = "media_receiver", columnDefinition = "TINYINT")
    private boolean mediaReceiver;

    @Column(name = "is_wish", columnDefinition = "TINYINT")
    @ColumnDefault("false")
    private boolean isWish;

    @Column(name = "is_in_bin", columnDefinition = "TINYINT")
    @ColumnDefault("false")
    private boolean isInBin;

    @Column(name = "is_valid", columnDefinition = "TINYINT")
    @ColumnDefault("true")
    private boolean isValid;

    public void wish(boolean isWish) {
        this.isWish = true;
    }

    public void unWish(boolean isWish) {
        this.isWish = false;
    }

    public void throwBin(boolean isInBin) {
        this.isInBin = true;
    }

    public void restore(boolean isInBin) {
        this.isInBin = false;
    }

    public void updateIsValid() {
        this.isValid = false;
    }
}



