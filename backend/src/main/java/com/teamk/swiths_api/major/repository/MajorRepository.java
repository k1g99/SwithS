package com.teamk.swiths_api.major.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MajorRepository extends JpaRepository<MajorEntity, Long> {
    MajorEntity findByName(String majorName);

    List<MajorMapping> findAllBy();
}
