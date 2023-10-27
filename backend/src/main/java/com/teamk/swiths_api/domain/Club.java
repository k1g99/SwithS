package com.teamk.swiths_api.domain;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Entity
@Getter
@Setter
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(nullable = false, length = 20)
    private String name; // 스터디 이름

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Category category; // 스터디(S) or 멘토링(M)
    // TODO : AttributeConverter 로 변경하면 더 좋을 듯!

    @OneToOne
    @JoinColumn(name = "major_id")
    private Major major; // 전공 스터디인 경우, Major 테이블 참조

    @OneToOne
    @JoinColumn(name = "user_id")
    private User leader;

    @Column(name = "start_at", nullable = false)
    private LocalDateTime startAt;

    @Column(name = "end_at", nullable = false)
    private LocalDateTime endAt;

    @Column(nullable = false, length = 100)
    private String description;

    @Column(name = "num_recruit", nullable = false)
    @ColumnDefault("5")
    private int numRecruit;
}

enum Category {
    STUDY,
    MENTORING;
}