package com.teamk.swiths_api.post.controller;



import com.teamk.swiths_api.post.repository.dto.CreateVoteItem.*;
import com.teamk.swiths_api.post.repository.dto.FindVote.*;
import com.teamk.swiths_api.post.service.VoteItemService;
import com.teamk.swiths_api.post.vote.VoteItemEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/vote")
public class VoteItemController {
    private final VoteItemService voteItemService;


    @PostMapping("/{vote}/item")
    public CreateVoteItemResponse createVoteItem(@RequestBody CreateVoteItemRequest createVoteItemRequest, @PathVariable Long vote){
        createVoteItemRequest.setVote(vote);
        voteItemService.createVoteitem(createVoteItemRequest);

        CreateVoteItemResponse result = new CreateVoteItemResponse(200, true, "투표항목 생성에 성공하셨습니다.");
        return result;
    }

    @GetMapping("/{vote}/item")
    public FindVoteItemResponse findVoteItemByVote(@PathVariable Long vote){
        List<VoteItemEntity> VoteItemList =  voteItemService.getVoteItemByVote(vote);
        FindVoteItemResponse result = new FindVoteItemResponse(200, true,"투표항목 조회에 성공하였습니다.", VoteItemList);
        return result;
    }

}
