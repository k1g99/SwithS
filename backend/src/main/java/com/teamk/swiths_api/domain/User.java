package com.teamk.swiths_api.domain;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import java.util.List;
import java.util.ArrayList;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(length = 30, nullable = false)
    private String email; // 유저 이메일

    @Column(nullable = false)
    private Boolean admin; // 유저에게 권한을 줄지말지 정함

    @Column(length = 20, nullable = false)
    private String name; // 유저이름

    @Column(length = 100, nullable = false)
    private String password; // 유저 비밀번호

    @OneToOne
    @JoinColumn(name = "major_id")
    private Major major;

    @Column(name = "student_id", length = 10)
    private String studentId; // 학번

    @Column(length = 50)
    private String department; // 학부

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Statement statement; // 학적상태

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @CreationTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updated_at = LocalDateTime.now();

    @OneToMany(mappedBy = "user")
    private List<Post> posts = new ArrayList<>();
}


enum Statement {
    ATTENDING,
    GRADUATION;
}
