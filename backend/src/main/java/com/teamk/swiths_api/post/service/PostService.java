package com.teamk.swiths_api.post.service;

import com.teamk.swiths_api.post.dto.CreatePost;
import com.teamk.swiths_api.post.dto.PatchPost;
import com.teamk.swiths_api.post.repository.PostEntity;

import java.util.List;

public interface PostService {
    PostEntity createPost(CreatePost.CreatePostRequest createPostRequest);
    List<PostEntity> findAllPost(Long club);
    List<PostEntity> findAllVotePost(Long club);
    PostEntity patchPost(PatchPost.PatchPostRequest patchPostRequest);
    PostEntity findPost(Long id);
}
