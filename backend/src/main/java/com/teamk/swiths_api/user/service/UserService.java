package com.teamk.swiths_api.user.service;

import com.teamk.swiths_api.user.controller.dto.CreateUserRequest;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;

public interface UserService {
//    UserEntity getUserById();

    UserEntity createUser(CreateUserRequest createUserRequest);
}
