package com.teamk.swiths_api.user.service;



import com.teamk.swiths_api.user.controller.dto.CreateUser.CreateUserRequest;
import com.teamk.swiths_api.user.controller.dto.Email.EmailRequest;
import com.teamk.swiths_api.user.jwt.dto.JwtToken;
import com.teamk.swiths_api.user.repository.entity.UserEntity;

public interface UserService {
    UserEntity getUserById(Long id);
    UserEntity createUser(CreateUserRequest createUserRequest);
    void authEmail(EmailRequest request);
    boolean checkAuthCode(String authKey, String emailCode);
    JwtToken signIn(String username, String password);
}
