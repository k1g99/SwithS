package com.teamk.swiths_api.post.repository.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.teamk.swiths_api.user.repository.entity.Day;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;


public class CreateVoteItemDetail {
    @Data
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class CreateVoteItemDetailRequest{
        private Long vote;
        @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime startAt;
        @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime endAt;
        private Long user;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class CreateVoteItemDetailResponse{
        private int statusCode;
        private Boolean inSuccess;
        private String msg;
    }
}
