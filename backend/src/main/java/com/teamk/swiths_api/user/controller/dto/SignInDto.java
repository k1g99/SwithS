package com.teamk.swiths_api.user.controller.dto;

import com.teamk.swiths_api.user.jwt.dto.JwtToken;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


public class SignInDto {
    @Getter
    @Setter
    @ToString
    @NoArgsConstructor
    public static class SignInRequest {
        private String email;
        private String password;
    }

    @Getter
    @AllArgsConstructor
    public static class SignInResponse {
        private JwtToken jwtToken;
        private Long userId;
    }
}
