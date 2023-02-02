package com.ssafy.wedding101.model.service.impl;

import com.ssafy.wedding101.model.dto.MediaDto;
import com.ssafy.wedding101.model.entity.Album;
import com.ssafy.wedding101.model.entity.Media;
import com.ssafy.wedding101.model.repository.AlbumRepository;
import com.ssafy.wedding101.model.repository.MediaRepository;
import com.ssafy.wedding101.model.service.MediaService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class MediaServiceImpl implements MediaService {

    private final MediaRepository mediaRepository;
    private final AlbumRepository albumRepository;

    @Override
    public Optional<MediaDto> getMedia(Long mediaSeq) {
        return Optional.empty();
    }

    @Override
    public List<MediaDto> getAllMedia(Long albumSeq) {
        return null;
    }

    @Override
    public void writeMedia(MediaDto mediaDto) {
        System.out.println("서비스임플" + mediaDto.getAlbumSeq());
        Media media = toEntity(mediaDto);
        System.out.println("미디어 entity");
        Album album = albumRepository.findById(mediaDto.getAlbumSeq()).orElseThrow();
        System.out.println("앨범 entity");
        media.setAlbum(album);
        System.out.println("앨범set");
        mediaRepository.save(media);
        System.out.println("됨");
    }

    @Override
    public void throwBin(Long mediaSeq) {

    }

    @Override
    public void restore(Long mediaSeq) {

    }

    @Override
    public void wish(Long mediaSeq) {

    }

    @Override
    public void unwish(Long mediaSeq) {

    }
}
