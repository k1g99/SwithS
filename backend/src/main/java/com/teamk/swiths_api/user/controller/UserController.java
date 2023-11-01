package com.teamk.swiths_api.user.controller;

import com.teamk.swiths_api.user.controller.dto.CreateUserRequest;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import com.teamk.swiths_api.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

//    @GetMapping()
//    public UserEntity getUserById() {
//        return userService.getUserById();
//    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public UserEntity createUser(@RequestBody CreateUserRequest createUserRequest) {
        return userService.createUser(createUserRequest);
    }
}
