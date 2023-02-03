package com.ssafy.wedding101.model.repository;

import com.ssafy.wedding101.model.dto.MediaDto;
import com.ssafy.wedding101.model.entity.Media;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MediaRepository extends JpaRepository<Media, Long> {
    @Query(nativeQuery = true, value = "select * " +
            "from tbl_media where album_seq = :albumSeq")
    List<Media> findAllByAlbumSeq(@Param("albumSeq") Long albumSeq);
}