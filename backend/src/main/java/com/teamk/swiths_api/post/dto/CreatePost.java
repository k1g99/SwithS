package com.teamk.swiths_api.post.dto;

import com.teamk.swiths_api.post.vote.VoteEntity;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

public class CreatePost {
    @Data
    public static class CreatePostRequest{
        private Long user;
        private String title;
        private String content;
        private String shortContent;
        private Long vote;
        private Long club;
    }


    @Getter
    @AllArgsConstructor
    public static class CreatePostResponse{
        private int statusCode;
        private boolean isSuccess;
        private String message;

    }

    @Getter
    @AllArgsConstructor
    public static class CreatePostVoteResponse{
        private int statusCode;
        private boolean isSuccess;
        private String message;
    }
}
