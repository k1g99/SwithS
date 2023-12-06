package com.teamk.swiths_api.user.repository.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Collection;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import com.teamk.swiths_api.club.repository.ClubEntity;
import com.teamk.swiths_api.post.repository.PostEntity;
import com.teamk.swiths_api.major.repository.MajorEntity;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Getter
@NoArgsConstructor
@EnableJpaRepositories
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Table(name = "user")
public class UserEntity implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @NotBlank(message = "이메일은 필수 입력 값입니다.")
    @Email(message = "이메일 형식에 맞지 않습니다.")
    @Column(length = 30, nullable = false)
    private String email; // 유저 이메일

    @Column(length = 20, nullable = false)
    private String username; // 유저이름

    @Column(length = 100, nullable = false)
    private String password; // 유저 비밀번호

    @ManyToOne
    @JoinColumn(name = "major_id")
    @JsonIgnore
    private MajorEntity major;

    @Column(name = "student_id", length = 10)
    private String studentId; // 학번

    @Column(length = 50)
    private String department; // 학부

    @Column
    @Enumerated(EnumType.STRING)
    private Statement statement; // 학적상태

    // TODO: builder 문제 해결..아래 전부다
    @OneToMany(mappedBy = "user")
    private List<TimetableEntity> timetables = new ArrayList<>();

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @CreationTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updated_at = LocalDateTime.now();

    @OneToMany(mappedBy = "user")
    private List<PostEntity> posts = new ArrayList<>();

    @OneToMany(mappedBy = "leader")
    private List<ClubEntity> clubLeaderUser = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    @Builder.Default
    private List<String> roles = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
