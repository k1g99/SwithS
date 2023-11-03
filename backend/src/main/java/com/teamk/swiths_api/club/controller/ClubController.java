package com.teamk.swiths_api.club.controller;

import com.teamk.swiths_api.club.repository.dto.CreateClub.CreateClubRequest;
import com.teamk.swiths_api.club.repository.dto.CreateClub.CreateClubResponse;
import com.teamk.swiths_api.club.service.ClubService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/clubs")
public class ClubController {

    private final ClubService clubService;


    @PostMapping()
    public CreateClubResponse createClub(@RequestBody CreateClubRequest createClubRequest) {
        clubService.createClub(createClubRequest);

        CreateClubResponse result = new CreateClubResponse(200, true, "동아리 생성에 성공하셨습니다.");

        return result;
    }



}
