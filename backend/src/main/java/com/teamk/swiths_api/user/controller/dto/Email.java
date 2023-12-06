package com.teamk.swiths_api.user.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

public class Email {
    @Data
    public static class EmailRequest {
        private String email;
    }

    @Getter
    @AllArgsConstructor
    public static class EmailResponse {
        private int code;
        private Boolean isSuccess;
        private String msg;
    }
}
