package com.ssafy.wedding101.model.repository;

import com.ssafy.wedding101.model.entity.Media;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvitationRepository extends JpaRepository<Media, Long> {
}
