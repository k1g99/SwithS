package com.teamk.swiths_api.user.controller.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.time.LocalTime;

public class CreateTimetable {
    @Data
    public static  class CreateTimetableRequest{
        private Long id;
        private String title; // 시간표 수업명
        @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="HH:mm:ss")
        @DateTimeFormat(pattern = "HH:mm:ss")
        private LocalTime startTime; // 수업 시작 시간 ex) 15:30
        @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="HH:mm:ss")
        @DateTimeFormat(pattern = "HH:mm:ss")
        private LocalTime endTime; // 수업 종료 시간 ex) 17:30
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
