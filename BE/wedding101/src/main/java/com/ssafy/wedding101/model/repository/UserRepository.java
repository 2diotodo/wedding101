package com.ssafy.wedding101.model.repository;

import com.ssafy.wedding101.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    public Optional<User> findByUserId(String userId);

    public boolean existsByUserNickname(String nickname);
}
