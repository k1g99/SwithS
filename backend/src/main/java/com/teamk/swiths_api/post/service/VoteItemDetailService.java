package com.teamk.swiths_api.post.service;

import com.teamk.swiths_api.post.repository.dto.CreateVoteItemDetail.*;
import com.teamk.swiths_api.post.vote.VoteItemDetailEntity;

import java.util.List;
public interface VoteItemDetailService {
    VoteItemDetailEntity createVoteItemDetail(CreateVoteItemDetailRequest createVoteItemDetailRequest);
    List<VoteItemDetailEntity> findVoteItemDetailByVote (Long vote);
}
