package com.teamk.swiths_api.club.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teamk.swiths_api.club.repository.ClubEntity;
import com.teamk.swiths_api.club.repository.dto.CreateClub.CreateClubRequest;
import com.teamk.swiths_api.club.repository.dto.CreateClub.CreateClubResponse;
import com.teamk.swiths_api.club.repository.dto.FindClub.FindAllClubResponse;
import com.teamk.swiths_api.club.repository.dto.FindClub.FindClubResponse;
import com.teamk.swiths_api.club.service.ClubService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/clubs")
public class ClubController {

    private final ClubService clubService;

    // 스터디데이터 전체 조회
    @GetMapping()
    public FindAllClubResponse findAllClub() {
        List<ClubEntity> clubLists = clubService.findAllClub();

        FindAllClubResponse result = new FindAllClubResponse(200, true, "모든 스터디 조회에 성공하였습니다.", clubLists);
        return result;
    }

    // 스터디 상세 조회
    @GetMapping("/{id}")
    public FindClubResponse findClub(@PathVariable Long id) {
        ClubEntity club = clubService.findClub(id);

        FindClubResponse result = new FindClubResponse(200, true, "스터디 상세조회에 성공하였습니다.", club);

        return result;
    }

    @PostMapping()
    public CreateClubResponse createClub(@RequestBody CreateClubRequest createClubRequest) {
        clubService.createClub(createClubRequest);

        CreateClubResponse result = new CreateClubResponse(200, true, "동아리 생성에 성공하셨습니다.");

        return result;
    }

}
