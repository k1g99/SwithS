package com.teamk.swiths_api.user.service;

import com.teamk.swiths_api.club.repository.ClubEntity;
import com.teamk.swiths_api.user.controller.dto.CreateUserClub.*;
import com.teamk.swiths_api.user.repository.entity.UserClubEntity;
import com.teamk.swiths_api.user.repository.entity.UserEntity;

import java.util.List;
public interface UserClubService {
    UserClubEntity createUserClub(CreateUserClubRequest createUserClubRequest);
    List<UserClubEntity> findByClub(Long club);
    List<UserClubEntity> findByUser(Long user);
    List<Long> CompareClubTimetableBetweenUser(CreateUserClubRequest createUserClubRequest);
}
