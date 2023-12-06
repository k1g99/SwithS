package com.teamk.swiths_api.post.repository.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.teamk.swiths_api.user.repository.entity.TimetableEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

public class CreateVote {
    @Data
    public static class CreateVoteRequest{
        private String title;
        @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime startAt;
        @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime endAt;
    }

    @Getter
    @AllArgsConstructor
    public static class CreateVoteResponse{
        private int statusCode;
        private Boolean inSuccess;
        private String msg;
        public CreateVoteResponse(int statusCode, boolean inSuccess, String msg){
            this.statusCode = statusCode;
            this.inSuccess = inSuccess;
            this.msg = msg;
        }
    }
}
