package com.teamk.swiths_api.user.service;

import com.teamk.swiths_api.major.repository.MajorEntity;
import com.teamk.swiths_api.major.repository.MajorRepository;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.teamk.swiths_api.user.controller.dto.CreateUser.CreateUserRequest;
import com.teamk.swiths_api.user.controller.dto.Email.EmailRequest;
import com.teamk.swiths_api.user.jwt.JwtTokenProvider;
import com.teamk.swiths_api.user.jwt.dto.JwtToken;
import com.teamk.swiths_api.user.repository.UserRepository;
import com.teamk.swiths_api.user.repository.entity.Statement;
import com.teamk.swiths_api.user.repository.entity.UserEntity;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private MajorRepository majorRepository;
    private AuthenticationManagerBuilder authenticationManagerBuilder;
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private RedisUtil redisUtil;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, MajorRepository majorRepository, AuthenticationManagerBuilder authenticationManagerBuilder, JwtTokenProvider jwtTokenProvider) {
        this.userRepository = userRepository;
        this.majorRepository = majorRepository;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
        this.jwtTokenProvider = jwtTokenProvider;
    }
    // @Override
    // public UserEntity getUserById() {
    // return null;
    // }

    @Override
    public UserEntity createUser(CreateUserRequest createUserRequest) {

        // 이메일 중복 확인
        if (userRepository.existsByEmail(createUserRequest.getEmail())) {
            throw new RuntimeException("이미 가입된 이메일입니다.");
        }

        // 도메인 확인
        // TODO: 골뱅이 뒤에 SKKU 확인하는 것 -> 현재는 DB에 안들어가게만 처리해놓음

        // db에 저장
        UserEntity userEntity = UserEntity.builder()
                .email(createUserRequest.getEmail())
                .username(createUserRequest.getUsername())
                .password(createUserRequest.getPassword())
                .build();
        userRepository.save(userEntity);
        return userEntity; // 리턴하는게 맞나?? 어차피 결과확인을 안하는데???
    }

    @Override
    public UserEntity getUserById(Long id) {
        // 유저 존재 안할시
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("존재하지 않는 유저입니다.");
        }

        return userRepository.getById(id);
    }

    @Override
    @Transactional
    public void authEmail(EmailRequest request) {
        // import random
        Random random = new Random();
        String authKey = String.valueOf(random.nextInt(8888888) + 111111);

        sendAuthEmail(request.getEmail(), authKey);
    }

    private void sendAuthEmail(String email, String authKey) {

        String subject = "[회원가입 인증번호] 안녕하세요 Swiths입니다.";
        String text = "Swiths 고객님, 안녕하세요.<br/>  Swiths를 이용해주셔서 감사합니다.<br/> 회원 가입을 위한 인증번호는 <h3>" + authKey
                + "</h3> 입니다. <br/> 다음 인증 코드를 5분 이내로 입력해주세요.";

        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "utf-8");
            helper.setTo(email);
            helper.setSubject(subject);
            helper.setText(text, true);
            javaMailSender.send(mimeMessage);

        } catch (MessagingException e) {
            e.printStackTrace();
        }

        // redisUtil만들어
        redisUtil.setDataExpire(authKey, email, 60 * 5L);
    }

    public boolean checkAuthCode(String authKey, String email) {
        String authCode = redisUtil.getData(authKey);

        if (authCode == null || !authCode.equals(email)) {
            throw new RuntimeException("인증번호가 일치하지 않습니다. 다시 인증해주세요");
        }

        return true;
    }

    //jwt 토큰 발급
    @Transactional
    @Override
    public JwtToken signIn(String username, String password) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);

        Authentication authentication2 = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        JwtToken jwtToken = jwtTokenProvider.generateToken(authentication2);

        return jwtToken;
    }

}
