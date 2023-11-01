package com.teamk.swiths_api.user.controller.dto;

import com.teamk.swiths_api.global.MajorEntity;
import lombok.Data;

@Data
public class CreateUserRequest {
    private String email;
    private String name;
    private Boolean admin;
    private String password;
    private String studentId;
    private String major;
    private String department;
    private String statement;
}
