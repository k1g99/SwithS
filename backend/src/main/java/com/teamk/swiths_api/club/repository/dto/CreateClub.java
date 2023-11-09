package com.teamk.swiths_api.club.repository.dto;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

public class CreateClub {

    @Data
    public static class CreateClubRequest {

        private String name;
        private String category;
        private String major;
        private Long leaderId; // user 확인하는 로직에 따라 달라질 듯?
        // json date를 java localdatetime으로 변환
        @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime startAt;
        @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime endAt;
        @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime registerStartAt;
        @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime registerEndAt;
        private String description;
        private int numRecruit;
    }

    @Getter
    @AllArgsConstructor
    public static class CreateClubResponse {
        private int statusCode;
        private boolean isSuccess;
        private String message;
    }
}
