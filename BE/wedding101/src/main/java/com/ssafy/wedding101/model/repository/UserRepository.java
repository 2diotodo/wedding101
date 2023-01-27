package com.ssafy.wedding101.model.repository;

import com.ssafy.wedding101.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public User findByUserId(String userId);

}
