package com.teamk.swiths_api.post;

import com.teamk.swiths_api.post.dto.CreatePost.*;
import com.teamk.swiths_api.post.dto.PatchPost.*;
import com.teamk.swiths_api.user.repository.UserRepository;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {
    PostRepository postRepository;
    UserRepository userRepository;
    @Autowired
    public PostServiceImpl(PostRepository postRepository,UserRepository userRepository){
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    @Override
    public PostEntity createPost(CreatePostRequest createPostRequest) {
        return null;
    }

    @Override
    public List<PostEntity> findAllPost() {
        return null;
    }

    @Override
    public List<PostEntity> findAllVotePost() {
        return null;
    }

    @Override
    public PostEntity patchPost(PatchPostRequest patchPostRequest) {
        return null;
    }

    @Override
    public PostEntity creaatePostVote(CreatePostVoteRequest createPostVoteRequest) {
        return null;
    }

    @Override
    public PostEntity patchPostVote(PatchPostVoteRequest patchPostVoteRequest) {
        return null;
    }
}
