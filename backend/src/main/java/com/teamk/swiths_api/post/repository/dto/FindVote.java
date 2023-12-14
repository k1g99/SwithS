package com.teamk.swiths_api.post.repository.dto;

import com.teamk.swiths_api.post.vote.VoteEntity;
import com.teamk.swiths_api.post.vote.VoteItemDetailEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

public class FindVote {


    @Getter
    @AllArgsConstructor
    public static class FindVoteResponse {
        private int statusCode;
        private boolean isSuccess;
        private String message;
        private VoteDto voteDto;
    }
    @Getter
    @AllArgsConstructor
    public static class FindVoteItemDetailResponse {
        private int statusCode;
        private boolean isSuccess;
        private String message;
        private List<VoteItemDetailDto> VoteItemDetailList;
    }
}
