package com.teamk.swiths_api.post.dto;

import com.teamk.swiths_api.post.vote.VoteEntity;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

public class PatchPost {
    @Data
    public static class PatchPostRequest{
        private Long id;
        private Long user;
        private String title;
        private String shortContent;
        private String content;
    }

    @Data
    public static class PatchPostVoteRequest{
        private Long id;
        private Long user;
        private String title;
        private String shortContent;
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class PatchPostResponse{
        private int statusCode;
        private boolean isSuccess;
        private String message;

    }

    @Getter
    @AllArgsConstructor
    public static class PatchPostVoteResponse{
        private int statusCode;
        private boolean isSuccess;
        private String message;
    }
}
