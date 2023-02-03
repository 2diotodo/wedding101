package com.ssafy.wedding101.model.repository;

import com.ssafy.wedding101.model.entity.Album;
import com.ssafy.wedding101.model.entity.Media;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Long> {
    Optional<Album> findByUserSeq(Long userSeq);

    boolean existsByAlbumAccessId(String albumAccessId);

    Optional<Album> findByAlbumAccessId(String albumAccessId);

//    @Query(nativeQuery = true, value = "select * " +
//            "from tbl_media m left outer join tbl_album a on m.album_seq = a.album_seq " +
//            "where m.album_seq = :albumSeq")
//    List<Media> findAllByAlbumSeq(@Param("albumSeq") Long albumSeq);

}
