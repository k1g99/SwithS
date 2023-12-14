package com.teamk.swiths_api.club.service;

import java.util.List;

import com.teamk.swiths_api.club.repository.ClubEntity;
import com.teamk.swiths_api.club.repository.dto.CreateClub.CreateClubRequest;

public interface ClubService {
    ClubEntity createClub(CreateClubRequest createClubRequest);
    List<ClubEntity> findAllClub();
    List<ClubEntity> searchClub(String keyword, Long major);
    ClubEntity findClub(Long id);
}
