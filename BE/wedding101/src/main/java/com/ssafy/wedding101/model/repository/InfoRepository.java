package com.ssafy.wedding101.model.repository;

import com.ssafy.wedding101.model.entity.Info;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InfoRepository extends JpaRepository<Info, Long> {
    Optional<Info> findByUserSeq(Long userSeq);
}
