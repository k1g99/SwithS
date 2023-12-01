package com.teamk.swiths_api.post.controller;



import com.teamk.swiths_api.post.repository.dto.CreateVoteItem.*;
import com.teamk.swiths_api.post.service.VoteItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

}
