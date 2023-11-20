package com.teamk.swiths_api.user.controller;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.teamk.swiths_api.user.controller.dto.CreateUser.CreateUserRequest;
import com.teamk.swiths_api.user.controller.dto.CreateUser.CreateUserResponse;
import com.teamk.swiths_api.user.controller.dto.Email.EmailRequest;
import com.teamk.swiths_api.user.controller.dto.Email.EmailResponse;
import com.teamk.swiths_api.user.service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    // TODO: 차후, user 정보 필요할 시 만들기
    // @GetMapping("")
    // public UserEntity getUserById() {
    //     return userService.getUserById();
    // }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public CreateUserResponse createUser(@RequestBody CreateUserRequest createUserRequest) {
        userService.createUser(createUserRequest);

        CreateUserResponse result = new CreateUserResponse(200, true, "유저 생성에 성공하셨습니다.");

        return result;
    }

    @PostMapping("/auth/email")
    public EmailResponse authEmail(@RequestBody @Valid EmailRequest request) {
        userService.authEmail(request);

        EmailResponse result = new EmailResponse(200, true, "이메일이 성공적으로 발송되었습니다");

        return result;
    }

    @GetMapping("/auth/verify")
    public EmailResponse verifyCode(@RequestParam("code") String code, @RequestParam("email") String email) {
        userService.checkAuthCode(code, email);

        EmailResponse result = new EmailResponse(200, true, "인증에 성공하셨습니다.");


        return result;
    }
}

