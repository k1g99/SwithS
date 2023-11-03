package com.teamk.swiths_api.global;

import java.util.ArrayList;
import java.util.List;

import com.teamk.swiths_api.user.repository.entity.UserEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "major")
public class MajorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(length = 50, nullable = false)
    private String name; // 과목 명

    @OneToMany(mappedBy = "major")
    private List<UserEntity> users = new ArrayList<>();

}
