package com.teamk.swiths_api.post.repository;

import com.teamk.swiths_api.club.repository.ClubEntity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import org.hibernate.annotations.UpdateTimestamp;

import com.teamk.swiths_api.post.vote.VoteEntity;
import com.teamk.swiths_api.user.repository.entity.UserEntity;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "post")
public class PostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    public UserEntity user;

    @Column(length = 20, nullable = false)
    private String title; // 스터디명

    @Column(name = "short_content", length = 20)
    private String shortContent; // 썸네일 상 보이는 간략 설명

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content; // 스터디 설명창을 누르면 보이는 상세 설명 창

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();

    @OneToOne
    @JoinColumn(name = "vote_id")
    private VoteEntity vote;
    @ManyToOne
    @JoinColumn(name = "club_id")
    private ClubEntity club;
}
