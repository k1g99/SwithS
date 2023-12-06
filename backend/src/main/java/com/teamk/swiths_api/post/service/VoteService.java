package com.teamk.swiths_api.post.service;

import com.teamk.swiths_api.post.repository.dto.CreateVote.*;
import com.teamk.swiths_api.post.vote.VoteEntity;

public interface VoteService {
    VoteEntity createVote(CreateVoteRequest CreateVoteRequest);
    VoteEntity findVote(Long id);
}
