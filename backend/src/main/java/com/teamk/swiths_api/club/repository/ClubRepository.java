package com.teamk.swiths_api.club.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ClubRepository extends JpaRepository<ClubEntity, Long> {
    ClubEntity getById(Long id);
    boolean existsById(Long id);
}
