package com.teamk.swiths_api.user.repository;

import com.teamk.swiths_api.user.repository.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import com.teamk.swiths_api.user.repository.entity.TimetableEntity;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TimetableRepository extends JpaRepository<TimetableEntity, Long>{
    boolean existsByUser(Long user);
    List<TimetableEntity> findByUser(Long user);
}
