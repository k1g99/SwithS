package com.teamk.swiths_api.user.service;


import com.teamk.swiths_api.user.controller.dto.CreateUser.CreateUserRequest;
import com.teamk.swiths_api.user.repository.entity.UserEntity;

public interface UserService {
    UserEntity getUserById();

    UserEntity createUser(CreateUserRequest createUserRequest);
}