package com.teamk.swiths_api.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.teamk.swiths_api.user.repository.entity.TimetableEntity;
import com.teamk.swiths_api.user.repository.entity.UserEntity;

import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TimetableRepository extends JpaRepository<TimetableEntity, Long>{
    boolean existsByUser (UserEntity user);
    List<TimetableEntity> findByUser(UserEntity user);
}
