package com.teamk.swiths_api.domain;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Timetable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(length = 20, nullable = false)
    private String title; // 시간표 수업명

    @Column(name = "start_time", nullable = false)
    private LocalDateTime startTime; // 수업 시작 시간 ex) 15:30

    @Column(name = "end_Time", nullable = false)
    private LocalDateTime endTime; // 수업 종료 시간 ex) 17:30

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user; // 유저 id 일대일 참조

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Day day; // 요일
}

enum Day {
    MON,
    TUE,
    WED,
    THU,
    FRI,
    SAT,
    SUN;
}
