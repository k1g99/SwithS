package com.teamk.swiths_api.post.vote;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "vote")
public class VoteEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(length = 40, nullable = false)
    private String title;

    @Column(name = "start_at", columnDefinition = "TIMESTAMP")
    private LocalDateTime startAt;

    @Column(name = "end_at", columnDefinition = "TIMESTAMP")
    private LocalDateTime endAt;

}
