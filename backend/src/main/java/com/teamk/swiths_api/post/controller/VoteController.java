package com.teamk.swiths_api.post.controller;

import com.teamk.swiths_api.post.repository.dto.CreateVote.CreateVoteResponse;
import com.teamk.swiths_api.post.repository.dto.CreateVote.CreateVoteRequest;
import com.teamk.swiths_api.post.repository.dto.FindVote.*;
import com.teamk.swiths_api.post.repository.dto.VoteDto;
import com.teamk.swiths_api.post.service.VoteService;
import com.teamk.swiths_api.post.vote.VoteEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
@RestController
@RequiredArgsConstructor
@RequestMapping("/vote")
public class VoteController {
    private final VoteService voteService;
    @GetMapping("/{id}")
    public FindVoteResponse findVote(@PathVariable Long id){
        VoteEntity voteResult = voteService.findVote(id);
        VoteDto voteDto = VoteDto.fromEntity(voteResult);
        FindVoteResponse result = new FindVoteResponse(200, true, "투표 조회에 성공했습니다.", voteDto);
        return result;
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public CreateVoteResponse createVote(@RequestBody CreateVoteRequest createVoteRequest){
        VoteEntity voteEntity = voteService.createVote(createVoteRequest);
        CreateVoteResponse result = new CreateVoteResponse(200, true, "투표 생성에 성공했습니다.", voteEntity.getId());
        return result;
    }


}
