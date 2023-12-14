package com.teamk.swiths_api.club.repository.dto;

import java.time.LocalDateTime;
import java.util.List;

import org.joda.time.DateTime;

import com.teamk.swiths_api.club.repository.Category;
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

    @Getter // jackson 오류때문에 entity 바로 반환이 아닌 dto로 변환 후 반환하는 형식으로 코드를 짬.
    public static class FindClubResponse {
        private int statusCode;
        private boolean isSuccess;
        private String message;
        private Long id;
        private String name;
        private Category category;
        private String major;
        private Long leader;
        private LocalDateTime startAt;
        private LocalDateTime endAt;
        private String description;
        private int numRecruit;
        private Long timetable_mon;
        private Long timetable_tue;
        private Long timetable_wed;
        private Long timetable_thu;
        private Long timetable_fri;
        private Long timetable_sat;
        private Long timetable_sun;
        private LocalDateTime register_startAt;
        private LocalDateTime register_endAt;

        public FindClubResponse(int statusCode, boolean isSuccess, String message, ClubEntity entity) {
            this.statusCode = statusCode;
            this.isSuccess = isSuccess;
            this.id = entity.getId();
            this.name = entity.getName();
            this.category = entity.getCategory();
            this.major = entity.getMajor().getName();
            this.leader = entity.getLeader().getId();
            this.startAt = entity.getStartAt();
            this.endAt = entity.getEndAt();
            this.description = entity.getDescription();
            this.numRecruit = entity.getNumRecruit();
            this.register_startAt = entity.getRegisterStartAt();
            this.register_endAt = entity.getRegisterEndAt();
            this.timetable_mon = entity.getTimetableMon();
            this.timetable_tue = entity.getTimetableTue();
            this.timetable_wed = entity.getTimetableWed();
            this.timetable_thu = entity.getTimetableThu();
            this.timetable_fri = entity.getTimetableFri();
            this.timetable_sat = entity.getTimetableSat();
            this.timetable_sun = entity.getTimetableSun();
        }
    }

}
