package com.teamk.swiths_api.post.controller;

import com.teamk.swiths_api.post.repository.dto.CreateVoteItemDetail.*;
import com.teamk.swiths_api.post.repository.dto.FindVote.*;
import com.teamk.swiths_api.post.repository.dto.VoteItemDetailDto;
import com.teamk.swiths_api.post.service.VoteItemDetailService;
import com.teamk.swiths_api.post.vote.VoteItemDetailEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.stream.Collectors;
@RestController
@RequiredArgsConstructor
@RequestMapping("/vote/detail")
public class VoteItemDetailController {
    private final VoteItemDetailService voteItemDetailService;

    @PostMapping("{vote}/{user}")
    public CreateVoteItemDetailResponse createVoteItemDetail(@RequestBody CreateVoteItemDetailRequest createVoteItemDetailRequest, @PathVariable Long vote, @PathVariable Long user){
        createVoteItemDetailRequest.setVote(vote);
        createVoteItemDetailRequest.setUser(user);
        voteItemDetailService.createVoteItemDetail(createVoteItemDetailRequest);

        CreateVoteItemDetailResponse result = new CreateVoteItemDetailResponse(200,true,"투표 선택에 성공하였습니다.");
        return result;
    }

    @GetMapping("/{vote}")
    public FindVoteItemDetailResponse GetVoteItemDetailByVote(@PathVariable Long vote){
        List<VoteItemDetailEntity> VoteItemDetailLists = voteItemDetailService.findVoteItemDetailByVote(vote);
        List<VoteItemDetailDto> voteItemDetailDtos = VoteItemDetailLists.stream()
            .map(VoteItemDetailDto::fromEntity)
            .collect(Collectors.toList());
        FindVoteItemDetailResponse result = new FindVoteItemDetailResponse(200,true,"투표 선택 조회에 성공했습니다.",voteItemDetailDtos);
        return result;
    }
}
