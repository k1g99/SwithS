package com.teamk.swiths_api.user.controller.dto;

import jakarta.validation.Constraint;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

public class CreateUser {
    @Data
    public static class CreateUserRequest {
        private String email;
        private String name;
        private Boolean admin;
        private String password;
        private String studentId;
        private String major;
        private String department;
        private String statement;
    }

    @Getter
    @AllArgsConstructor
    public static class CreateUserResponse {
        private int code;
        private Boolean isSuccess;
        private String msg;
    }

}
