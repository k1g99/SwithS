package com.teamk.swiths_api.user.jwt;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import com.teamk.swiths_api.user.repository.entity.UserEntity;

public class SecurityUtil {
    public static String getNowUserName() {
        final Authentication authentication2 = SecurityContextHolder.getContext().getAuthentication();
        if (authentication2 == null || authentication2.getName() == null) {
            throw new RuntimeException("Security Context에 인증 정보가 없습니다.");
        }
        return authentication2.getName();
    }

    public static String getNowUserId() {
        final Authentication authentication2 = SecurityContextHolder.getContext().getAuthentication();
        if (authentication2 == null || authentication2.getName() == null) {
            throw new RuntimeException("Security Context에 인증 정보가 없습니다.");
        }

        return authentication2.getPrincipal().toString();
    }
}
