package com.teamk.swiths_api.post.service;

import com.teamk.swiths_api.post.dto.CreatePost;
import com.teamk.swiths_api.post.dto.PatchPost;
import com.teamk.swiths_api.post.repository.PostEntity;

import java.util.List;

public interface PostService {
    PostEntity createPost(CreatePost.CreatePostRequest createPostRequest);
    List<PostEntity> findAllPost();
    List<PostEntity> findAllVotePost();
    PostEntity patchPost(PatchPost.PatchPostRequest patchPostRequest);
    PostEntity createPostVote(CreatePost.CreatePostVoteRequest createPostVoteRequest);
    PostEntity patchPostVote(PatchPost.PatchPostVoteRequest patchPostVoteRequest);

}
