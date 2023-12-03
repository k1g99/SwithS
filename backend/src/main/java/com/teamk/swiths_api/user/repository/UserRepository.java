package com.teamk.swiths_api.user.repository;

import com.teamk.swiths_api.user.repository.entity.UserEntity;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    // 학생 ID로 중복 확인
    boolean existsByStudentId(String studentId);
    // 이메일 중복 확인
    boolean existsByEmail(String email);
    // 유저 id로 확인
    boolean existsById(Long id);
    UserEntity getById(Long id);
    // username으로 유저 찾기
    Optional<UserEntity> findByUsername(String username);
}
