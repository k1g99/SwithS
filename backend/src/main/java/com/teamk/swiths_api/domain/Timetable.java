package com.teamk.swiths_api.domain;

import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
    private String title; //시간표 수업명

    @Column(nullable = false)
    private LocalTime start_time; //수업 시작 시간 ex) 15:30

    @Column(nullable = false)
    private LocalTime emd_Time; // 수업 종료 시간 ex) 17:30

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user; //유저 id 일대일 참조
}
