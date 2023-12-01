package com.teamk.swiths_api.post.service;

import com.teamk.swiths_api.post.repository.dto.CreateVoteItem;
import com.teamk.swiths_api.post.vote.VoteEntity;
import com.teamk.swiths_api.post.vote.VoteItemEntity;
import com.teamk.swiths_api.user.repository.entity.Day;

import java.util.List;

public interface VoteItemService {
    void createVoteitem(CreateVoteItem.CreateVoteItemRequest createVoteItemRequest);
    List<VoteItemEntity> getVoteItemByVote(VoteEntity vote);
    List<VoteItemEntity> createVoteItemByTimetalbe(Long clubId, VoteEntity voteEntity);
}
