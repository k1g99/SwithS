package com.teamk.swiths_api.club.repository;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

import lombok.*;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.teamk.swiths_api.major.repository.MajorEntity;
import com.teamk.swiths_api.user.repository.entity.UserEntity;

@Entity
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@JsonIgnoreProperties({ "leader" })
@Table(name = "club")
@DynamicInsert
public class ClubEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(nullable = false, length = 20)
    private String name; // 스터디 이름

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Category category; // 스터디(S) or 멘토링(M)

    @ManyToOne
    @JoinColumn(name = "major_id")
    // get 요청시 무한참조 현상 발생해서 추가함 TODO: DTO 클래스 처리하는거 생각(이 방법이 더 좋을거 같음)
    private MajorEntity major; // 전공 스터디인 경우, Major 테이블 참조

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore // get 요청시 무한참조 현상 발생해서 추가함 TODO: DTO 클래스 처리하는거 생각(이 방법이 더 좋을거 같음)
    private UserEntity leader;

    @Column(name = "start_at", nullable = false)
    private LocalDateTime startAt;

    @Column(name = "end_at", nullable = false)
    private LocalDateTime endAt;

    @Column(name = "register_start_at", nullable = false)
    private LocalDateTime registerStartAt;

    @Column(name = "register_end_at", nullable = false)
    private LocalDateTime registerEndAt;

    @Column(nullable = false, length = 100)
    private String description;

    @Column(name = "num_recruit", nullable = false)
    @ColumnDefault("5")
    private int numRecruit;

    @Column(name = "timetable_mon")
    @ColumnDefault("0")
    private Long timetableMon;

    @Column(name = "timetable_tue")
    @ColumnDefault("0")
    private Long timetableTue;

    @Column(name = "timetable_wed")
    @ColumnDefault("0")
    private Long timetableWed;

    @Column(name = "timetable_thu")
    @ColumnDefault("0")
    private Long timetableThu;

    @Column(name = "timetable_fri")
    @ColumnDefault("0")
    private Long timetableFri;

    @Column(name = "timetable_sat")
    @ColumnDefault("0")
    private Long timetableSat;

    @Column(name = "timetable_sun")
    @ColumnDefault("0")
    private Long timetableSun;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @CreationTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();
}
