package com.teamk.swiths_api.user.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
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
import com.teamk.swiths_api.user.controller.dto.SignInDto;
import com.teamk.swiths_api.user.jwt.SecurityUtil;
import com.teamk.swiths_api.user.jwt.dto.JwtToken;
import com.teamk.swiths_api.user.repository.UserRepository;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import com.teamk.swiths_api.user.service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    @Value("${jwt.secret}")
    private String secretKey;

    // TODO: 차후, user 정보 필요할 시 만들기
    // @GetMapping("")
    // public UserEntity getUserById() {
    // return userService.getUserById();
    // }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public CreateUserResponse createUser(@RequestBody CreateUserRequest createUserRequest) {
        userService.createUser(createUserRequest);

        CreateUserResponse result = new CreateUserResponse(200, true, "회원가입에 성공하셨습니다.");

        return result;
    }

    @PostMapping("/auth/email")
    public EmailResponse authEmail(@RequestBody @Valid EmailRequest request) {
        userService.authEmail(request);

        EmailResponse result = new EmailResponse(200, true, "이메일이 성공적으로 발송되었습니다");

        return result;
    }

    @GetMapping("/auth/verify") // TODO: Post로 변환
    public EmailResponse verifyCode(@RequestParam("code") String code, @RequestParam("email") String email) {
        userService.checkAuthCode(code, email);

        EmailResponse result = new EmailResponse(200, true, "인증에 성공하셨습니다.");

        return result;
    }

    @PostMapping("/signin")
    public JwtToken signIn(@RequestBody SignInDto signInDto) {
        String email = signInDto.getEmail();
        String password = signInDto.getPassword();

        //email로 username 찾아주기
        Optional<UserEntity> user = userRepository.findByEmail(email);

        String username = user.get().getUsername();

        JwtToken jwtToken = userService.signIn(username, password);

        log.info("jwtToken: {}", jwtToken);
        log.info("jwtToken accessToken = {}, refreshToken = {}", jwtToken.getAccessToken(), jwtToken.getRefreshToken());
        return jwtToken;
    }

    // @PostMapping("/test")
    // public String test() {
    // String name = SecurityUtil.getNowUserName();

    // return name + "님 환영합니다.";
    // }

    @GetMapping("/getUserInfo")
    public Optional<UserEntity> getUserInfo() {
        Optional<UserEntity> userInfo = userRepository.findByUsername(SecurityUtil.getNowUserName());

        return userInfo;
    }

    @GetMapping("/hikj")
    public String hikj() {

        return secretKey;
    }
}
