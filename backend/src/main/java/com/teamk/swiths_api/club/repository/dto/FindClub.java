package com.teamk.swiths_api.club.repository.dto;

import java.util.List;

import com.teamk.swiths_api.club.repository.ClubEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class FindClub {
    @Getter
    @AllArgsConstructor
    public static class FindAllClubResponse {
        private int statusCode;
        private boolean isSuccess;
        private String message;
        private List<ClubEntity> clubs;
    }

}
