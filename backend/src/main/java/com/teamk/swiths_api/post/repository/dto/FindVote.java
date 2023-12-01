package com.teamk.swiths_api.post.repository.dto;

import com.teamk.swiths_api.post.vote.VoteEntity;
import com.teamk.swiths_api.user.repository.entity.TimetableEntity;
import lombok.Getter;

import java.util.List;

public class FindVote {

    @Getter
    public static class FindVoteResponse {
        private int statusCode;
        private boolean isSuccess;
        private String message;
        private VoteEntity voteEntity;

        public FindVoteResponse(int statusCode, boolean isSuccess, String message, VoteEntity voteEntity) {
            this.statusCode = statusCode;
            this.isSuccess = isSuccess;
            this.message = message;
            this.voteEntity = voteEntity;
        }
    }
}
