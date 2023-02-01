package com.ssafy.wedding101.model.service;

import com.ssafy.wedding101.model.dto.AlbumDto;
import com.ssafy.wedding101.model.entity.Album;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface AlbumService {
    Optional<AlbumDto> getAlbum(Long albumSeq);
    Optional<AlbumDto> getAlbumByUserSeq(Long userSeq);

    void writeAlbum(AlbumDto albumDto);

    void removeAlbum(Long albumSeq);

    void modifyAlbum(AlbumDto albumDto);

    Long getAlbumSeqByAccessId(String albumAccessId);

    default Album toEntity(AlbumDto albumDto) {
        return Album.builder()
                .albumSeq(albumDto.getAlbumSeq())
                .infoSeq(albumDto.getInfoSeq())
                .userSeq(albumDto.getUserSeq())
                .albumName(albumDto.getAlbumName())
                .albumColor(albumDto.getAlbumColor())
                .albumPhotoUrl(albumDto.getAlbumPhotoUrl())
                .albumAccessId(albumDto.getAlbumAccessId())
                .albumMediaCnt(albumDto.getAlbumMediaCnt())
                .isValid(true)
                .build();
    }

    default AlbumDto toDto(Album album) {
        return AlbumDto.builder()
                .albumSeq(album.getAlbumSeq())
                .infoSeq(album.getInfoSeq())
                .userSeq(album.getUserSeq())
                .albumName(album.getAlbumName())
                .albumColor(album.getAlbumColor())
                .albumPhotoUrl(album.getAlbumPhotoUrl())
                .albumAccessId(album.getAlbumAccessId())
                .albumMediaCnt(album.getAlbumMediaCnt())
                .isValid(album.isValid())
                .build();
    }
}
