package com.teamk.swiths_api.config;

import java.util.stream.Stream;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.teamk.swiths_api.user.jwt.JwtAuthenticationFilter;
import com.teamk.swiths_api.user.jwt.JwtTokenProvider;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity(debug = true)
@RequiredArgsConstructor
public class SecurityConfig {
    private final JwtTokenProvider jwtTokenProvider;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
            .csrf(csrf -> csrf.disable())
            .sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(authorize -> authorize // url 별 권한 설정
                // .requestMatchers(new AntPathRequestMatcher("/clubs/**"),
                //         new AntPathRequestMatcher("/user/signin"),
                //         new AntPathRequestMatcher("/user/auth/**"),
                //         new AntPathRequestMatcher("/user"),
                //         new AntPathRequestMatcher("/post/**"), // TODO: 현재, 개발의 편의를 위해 모두 액세스 허가해놓은 상태임. 추후, 권한 설정 필요
                //         new AntPathRequestMatcher("/major/**"),
                //         new AntPathRequestMatcher("/timetable/**"),
                //         new AntPathRequestMatcher("/user/**"),
                //         new AntPathRequestMatcher("/clubs/**"))
                .anyRequest()
                .permitAll())
            // .requestMatchers(new AntPathRequestMatcher("/user/test")).hasRole("USER"))
            .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider),
                UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();

    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}
