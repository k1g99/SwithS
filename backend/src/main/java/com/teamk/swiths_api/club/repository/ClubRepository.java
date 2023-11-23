package com.teamk.swiths_api.club.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ClubRepository extends JpaRepository<ClubEntity, Long> {
    ClubEntity getById(Long id);
    boolean existsById(Long id);
    List<ClubEntity> findByNameContaining(String name);
    List<ClubEntity> findByMajor_Id(Long major);
    List<ClubEntity> findByNameContainingAndMajor_Id(String major, Long name);
    List<ClubEntity> findAllByOrderByRegisterEndAtDescCreatedAtDesc();
}
