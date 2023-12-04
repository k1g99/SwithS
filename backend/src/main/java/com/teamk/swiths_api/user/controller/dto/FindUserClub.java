package com.teamk.swiths_api.user.controller.dto;

import com.teamk.swiths_api.club.repository.ClubEntity;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

public class FindUserClub {
    @Getter
    @AllArgsConstructor
    public static class FindUserByClubResponse {
        private int statusCode;
        private boolean isSuccess;
        private String message;
        private List<UserEntity> users;
    }

    @Getter
    @AllArgsConstructor
    public static class FindClubByUserResponse {
        private int statusCode;
        private boolean isSuccess;
        private String message;
        private List<ClubEntity> clubs;
    }

    @Getter
    @AllArgsConstructor
    public static class CompareClubTimetableBetweenUserResponse {
        private int statusCode;
        private boolean isSuccess;
        private String message;
        private List<Long> Timetables;
    }
}
