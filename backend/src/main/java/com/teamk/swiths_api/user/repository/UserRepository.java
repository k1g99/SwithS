package com.teamk.swiths_api.user.repository;

import com.teamk.swiths_api.user.repository.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    // 학생 ID로 중복 확인
    boolean existsByStudentId(String studentId);
}
