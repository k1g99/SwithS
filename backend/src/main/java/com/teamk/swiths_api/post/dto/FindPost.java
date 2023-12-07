package com.teamk.swiths_api.post.dto;

import com.teamk.swiths_api.club.repository.ClubEntity;
import com.teamk.swiths_api.post.repository.PostEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

public class FindPost {
    @Getter
    @AllArgsConstructor
    public static class FindAllPostResponse{
        private int statusCode;
        private boolean isSuccess;
        private String message;
        private List<PostDto> posts;
    }

    @Getter
    @AllArgsConstructor
    public static class FindPostResponse{
        private int statusCode;
        private boolean isSuccess;
        private String message;
        private PostDto post;
    }
}
