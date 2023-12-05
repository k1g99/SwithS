package com.teamk.swiths_api.user.controller.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
@Builder
@Getter
@AllArgsConstructor
public class UserDto {
    private Long userId;
    private String userName;
}
