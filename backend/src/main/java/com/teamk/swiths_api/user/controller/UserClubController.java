package com.teamk.swiths_api.user.controller;

import com.teamk.swiths_api.club.repository.ClubEntity;
import com.teamk.swiths_api.club.repository.dto.ClubDto;
import com.teamk.swiths_api.user.controller.dto.CreateUserClub.*;
import com.teamk.swiths_api.user.controller.dto.FindUserClub.*;
import com.teamk.swiths_api.user.controller.dto.UserDto;
import com.teamk.swiths_api.user.repository.entity.UserClubEntity;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import com.teamk.swiths_api.user.service.UserClubService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("")
public class UserClubController {
    private final UserClubService userClubService;
    @GetMapping("/clubs/{club}/user")
    public FindUserByClubResponse findUser(@PathVariable Long club){
        try {
            List<UserClubEntity> userClubList = userClubService.findByClub(club);
            List<UserDto> userDtos = new ArrayList<>();

            for (UserClubEntity userClubEntity : userClubList) {
                UserEntity userEntity = userClubEntity.getUser();
                UserDto userDto = UserDto.builder()
                    .userId(userEntity.getId())
                    .userName(userEntity.getUsername())
                    // Add other fields as needed
                    .build();
                userDtos.add(userDto);
            }
            FindUserByClubResponse result = new FindUserByClubResponse(200, true, "스터디의 유저정보조회에 성공하였습니다.", userDtos);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            throw e; // 예외를 다시 던져서 어떤 예외가 발생했는지 확인
        }
    }

    @GetMapping("/user/{user}/club")
    public FindClubByUserResponse findClub(@PathVariable Long user){
        try {
            List<UserClubEntity> UserClubList = userClubService.findByUser(user);
            List<ClubDto> clubDtos = new ArrayList<>();

            for(UserClubEntity userClubEntity : UserClubList){
                ClubEntity clubEntity = userClubEntity.getClub();
                ClubDto clubDto = ClubDto.builder()
                    .clubId(clubEntity.getId())
                    .clubName(clubEntity.getName())
                    .build();
                clubDtos.add(clubDto);
            }
            FindClubByUserResponse result = new FindClubByUserResponse(200, true, "스터디의 유저정보조회에 성공하였습니다.", clubDtos);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            throw e; // 예외를 다시 던져서 어떤 예외가 발생했는지 확인
        }
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
