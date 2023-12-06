package com.teamk.swiths_api.user.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.checkerframework.checker.units.qual.A;

public class CreateUserClub {

    @Data
    @Getter
    @AllArgsConstructor
    public static class CreateUserClubRequest{
        private Long user;
        private Long club;
    }

    @Getter
    @AllArgsConstructor
    public static class CreateUserClubResponse{
        private int statusCode;
        private boolean inSuccess;
        private String message;
    }
}
