package com.ssafy.wedding101.model.repository;

import com.ssafy.wedding101.model.entity.Album;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AlbumRepository extends JpaRepository<Album, Long> {
    Optional<Album> findByUserSeq(Long userSeq);

    boolean existsByAlbumAccessId(String albumAccessId);

    Optional<Album> findByAlbumAccessId(String albumAccessId);
}
