package com.teamk.swiths_api.global;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MajorRepository extends JpaRepository<MajorEntity, Long> {
    MajorEntity findByName(String majorName);
}
