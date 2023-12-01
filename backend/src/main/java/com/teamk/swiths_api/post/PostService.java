package com.teamk.swiths_api.post;

import com.teamk.swiths_api.post.dto.CreatePost.*;
import com.teamk.swiths_api.post.dto.PatchPost.*;

import java.util.List;

public interface PostService {
    PostEntity createPost(CreatePostRequest createPostRequest);
    List<PostEntity> findAllPost();
    List<PostEntity> findAllVotePost();
    PostEntity patchPost(PatchPostRequest patchPostRequest);
    PostEntity creaatePostVote(CreatePostVoteRequest createPostVoteRequest);
    PostEntity patchPostVote(PatchPostVoteRequest patchPostVoteRequest);
}
