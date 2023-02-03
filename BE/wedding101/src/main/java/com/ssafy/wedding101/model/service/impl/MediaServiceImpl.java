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
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

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
//        List<Media> medias = mediaRepository.findAll();
        List<MediaDto> mediaList = mediaRepository.findAll().stream().map(this::toDto).collect(Collectors.toList());
        List<MediaDto> result = new ArrayList<>();
        for (MediaDto mediaDto : mediaList) {
            if (Objects.equals(mediaDto.getAlbumSeq(), albumSeq)) {
                result.add(mediaDto);
            }
        }
//        for(Media m : medias) {
//            if (Objects.equals(m.getAlbum().getAlbumSeq(), albumSeq)) {
//                mediaList.add(this.toDto(m));
//            }
//        }
        return result;
    }

    @Override
    public List<MediaDto> getMediaList(Long albumSeq, String type, String to, String relation) {
        return null;
    }

    @Override
    public void writeMedia(MediaDto mediaDto) {
        Media media = toEntity(mediaDto);
        Album album = albumRepository.findById(mediaDto.getAlbumSeq()).orElseThrow();
        media.setAlbum(album);
        mediaRepository.save(media);
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
