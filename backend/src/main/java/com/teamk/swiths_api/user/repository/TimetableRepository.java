package com.teamk.swiths_api.user.repository;

import com.teamk.swiths_api.user.repository.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import com.teamk.swiths_api.user.repository.entity.TimetableEntity;

public interface TimetableRepository extends JpaRepository<TimetableEntity, Long>{
    boolean existsByUserID(Long UserID);
    TimetableEntity getByuser(Long UserID);
}
