package com.teamk.swiths_api.post.controller;

import com.teamk.swiths_api.post.repository.PostEntity;
import com.teamk.swiths_api.post.repository.dto.CreateVote.CreateVoteResponse;
import com.teamk.swiths_api.post.repository.dto.CreateVote.CreateVoteRequest;
import com.teamk.swiths_api.post.repository.dto.FindVote.*;
import com.teamk.swiths_api.post.service.VoteItemService;
import com.teamk.swiths_api.post.service.VoteService;
import com.teamk.swiths_api.post.vote.VoteEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RequestMapping("/vote")
public class VoteController {
    private final VoteService voteService;
    private final VoteItemService voteItemService;
    @GetMapping("/{id}")
    public FindVoteResponse findVote(@PathVariable Long id){
        VoteEntity voteResult = voteService.findVote(id);
        FindVoteResponse result = new FindVoteResponse(200, true, "투표 조회에 성공했습니다.", voteResult);
        return result;
    }

    @PostMapping("/{club}")
    @ResponseStatus(HttpStatus.CREATED)
    public CreateVoteResponse createVote(@RequestBody CreateVoteRequest createVoteRequest, @PathVariable Long club){
        createVoteRequest.setClub(club);
        VoteEntity voteEntity = voteService.createVote(createVoteRequest);
        voteItemService.createVoteItemByTimetalbe(club, voteEntity.getId());
        CreateVoteResponse result = new CreateVoteResponse(200, true, "투표 생성에 성공했습니다.");

        return result;
    }


}
