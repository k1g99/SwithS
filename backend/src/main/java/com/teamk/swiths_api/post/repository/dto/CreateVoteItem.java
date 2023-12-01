package com.teamk.swiths_api.post.repository.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.teamk.swiths_api.user.repository.entity.Day;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.time.LocalTime;

public class CreateVoteItem {
    @Data
    public static class CreateVoteItemRequest{
        private Long vote;
        private Day day;
        @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="HH:mm:ss")
        @DateTimeFormat(pattern = "HH:mm:ss")
        private LocalTime startAt;
        @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="HH:mm:ss")
        @DateTimeFormat(pattern = "HH:mm:ss")
        private LocalTime endAt;
    }

    @Getter
    @AllArgsConstructor
    public static class CreateVoteItemResponse{
        private int statusCode;
        private Boolean inSuccess;
        private String msg;
        public CreateVoteItemResponse(int statusCode, boolean inSuccess, String msg){
            this.statusCode = statusCode;
            this.inSuccess = inSuccess;
            this.msg = msg;
        }
    }
}
