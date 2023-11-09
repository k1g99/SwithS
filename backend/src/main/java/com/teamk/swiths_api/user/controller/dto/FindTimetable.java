package com.teamk.swiths_api.user.controller.dto;

import com.teamk.swiths_api.user.repository.entity.TimetableEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalTime;
import java.util.List;

public class FindTimetable {
    @Getter
    public static class FindTimetableResponse {
        private int statusCode;
        private boolean isSuccess;
        private String message;
        private List<TimetableEntity> timetableList;


        public FindTimetableResponse(int statusCode, boolean isSuccess, String message, List<TimetableEntity> list){
            this.statusCode = statusCode;
            this.isSuccess = isSuccess;
            this.message = message;
            this.timetableList = list;
        }
    }
}
