package com.teamk.swiths_api.user.repository.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.time.LocalTime;

import lombok.*;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Table(name = "timetable")
public class TimetableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(length = 20, nullable = false)
    private String title; // 시간표 수업명

    @Column(name = "start_time", nullable = false)
    private LocalTime startTime; // 수업 시작 시간 ex) 15:30

    @Column(name = "end_Time", nullable = false)
    private LocalTime endTime; // 수업 종료 시간 ex) 17:30

    @ManyToOne // 왜 원투원???
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private UserEntity user; // 유저 id 일대일 참조

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Day day; // 요일
}
