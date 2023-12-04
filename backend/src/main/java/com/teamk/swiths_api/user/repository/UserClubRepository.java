package com.teamk.swiths_api.user.repository;

import com.teamk.swiths_api.club.repository.ClubEntity;
import com.teamk.swiths_api.user.repository.entity.UserClubEntity;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface UserClubRepository extends JpaRepository<UserClubEntity , Long> {
    List<ClubEntity> findByUser(UserEntity user);
    List<UserEntity> findByClub(ClubEntity club);

}
