package com.teamk.swiths_api.post.controller;

import com.teamk.swiths_api.post.repository.dto.CreateVoteItemDetail.*;
import com.teamk.swiths_api.post.repository.dto.FindVote.*;
import com.teamk.swiths_api.post.service.VoteItemDetailService;
import com.teamk.swiths_api.post.vote.VoteItemDetailEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/vote/detail")
public class VoteItemDetailController {
    private final VoteItemDetailService voteItemDetailService;

    @PostMapping("/{user}")
    public CreateVoteItemDetailResponse createVoteItemDetail(@RequestBody CreateVoteItemDetailRequest createVoteItemDetailRequest, @PathVariable Long user){
        voteItemDetailService.createVoteItemDetail(createVoteItemDetailRequest);
        CreateVoteItemDetailResponse result = new CreateVoteItemDetailResponse(200,true,"투표 선택에 성공하였습니다.");
        return result;
    }

    @GetMapping("/{vote}")
    public FindVoteItemDetailResponse GetVoteItemDetailByVote(@PathVariable Long vote){
        List<VoteItemDetailEntity> VoteItemDetailLists = voteItemDetailService.findVoteItemDetailByVote(vote);
        FindVoteItemDetailResponse result = new FindVoteItemDetailResponse(200,true,"투표 선택 조회에 성공했습니다.",VoteItemDetailLists);
        return result;
    }
}
