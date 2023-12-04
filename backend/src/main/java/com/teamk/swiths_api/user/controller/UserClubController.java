package com.teamk.swiths_api.user.controller;

import com.teamk.swiths_api.club.repository.ClubEntity;
import com.teamk.swiths_api.user.controller.dto.CreateUserClub.*;
import com.teamk.swiths_api.user.controller.dto.FindUserClub.*;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import com.teamk.swiths_api.user.service.UserClubService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequiredArgsConstructor
@RequestMapping("")
public class UserClubController {
    private final UserClubService userClubService;
    @GetMapping("/clubs/{club}/user")
    public FindUserByClubResponse findClub(@PathVariable Long club){
        List<UserEntity> userLists = userClubService.findByClub(club);

        FindUserByClubResponse result = new FindUserByClubResponse(200,true,"유저의 스터디정보조회에 성공하였습니다.", userLists);

        return result;
    }

    @GetMapping("/user/{user}/club")
    public FindClubByUserResponse findUser(@PathVariable Long user){
        List<ClubEntity> clubLists = userClubService.findByUser(user);

        FindClubByUserResponse result = new FindClubByUserResponse(200,true,"스터디의 유저정보조회에 성공하였습니다.", clubLists);

        return result;
    }

    @GetMapping("/clubs/{club}/user/{user}")
    public CompareClubTimetableBetweenUserResponse CompareClubTimetableBetweenUser(@PathVariable Long club,@PathVariable Long user){
        CreateUserClubRequest createUserClubRequest = new CreateUserClubRequest(user,club);
        List<Long> Timetables = userClubService.CompareClubTimetableBetweenUser(createUserClubRequest);

        CompareClubTimetableBetweenUserResponse result = new CompareClubTimetableBetweenUserResponse(200,true,"스터디와 유저의 시간표 차이 조회에 성공하였습니다.", Timetables);

        return result;
    }

    @PostMapping("/clubs/{club}/user/{user}")
    public CreateUserClubResponse createUserClub (@PathVariable Long club,@PathVariable Long user){
        CreateUserClubRequest createUserClubRequest = new CreateUserClubRequest(user,club);
        userClubService.createUserClub(createUserClubRequest);

        CreateUserClubResponse result = new CreateUserClubResponse(200, true,"유저가 스터디가입에 성공했습니다.");

        return result;
    }
}
