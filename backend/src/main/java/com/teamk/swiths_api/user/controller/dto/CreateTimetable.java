package com.teamk.swiths_api.user.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

public class CreateTimetable {
    @Data
    public static  class CreateTimetableRequest{
        private Long id;
        private String title; // 시간표 수업명
        private LocalDateTime startTime; // 수업 시작 시간 ex) 15:30
        private LocalDateTime endTime; // 수업 종료 시간 ex) 17:30
        private Long user; // 유저 id 일대일 참조
        private String day; // 요일
    }

    @Getter
    @AllArgsConstructor
    public static class CreateTimetableResponse{
        private int code;
        private Boolean inSuccess;
        private String msg;
    }
}
