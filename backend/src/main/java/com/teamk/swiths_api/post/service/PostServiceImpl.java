package com.teamk.swiths_api.post.service;

import com.teamk.swiths_api.post.dto.CreatePost.*;
import com.teamk.swiths_api.post.dto.PatchPost.*;
import com.teamk.swiths_api.post.repository.PostEntity;
import com.teamk.swiths_api.post.repository.PostRepository;
import com.teamk.swiths_api.post.repository.VoteRepository;
import com.teamk.swiths_api.post.vote.VoteEntity;
import com.teamk.swiths_api.user.repository.UserRepository;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.teamk.swiths_api.post.service.PostService;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {
    PostRepository postRepository;
    UserRepository userRepository;
    VoteRepository voteRepository;
    //vote 추가
    @Autowired
    public PostServiceImpl(VoteRepository voteRepository,PostRepository postRepository,UserRepository userRepository){
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.voteRepository = voteRepository;
    }

    @Override
    public PostEntity createPost(CreatePostRequest createPostRequest) {
        UserEntity userEntity = userRepository.getById(createPostRequest.getUser());
        if (userEntity == null){
            throw new RuntimeException("존재하지 않는 유저입니다.");
        }
        if(createPostRequest.getContent() ==""){
            throw new RuntimeException("내용을 입력해주시기 바랍니다.");
        }
        if(createPostRequest.getTitle() == ""){
            throw new RuntimeException("제목을 입력해주시기 바랍니다.");
        }
        VoteEntity voteEntity = null;
        if(createPostRequest.getVote() != null){
            voteEntity = voteRepository.getById(createPostRequest.getVote());

        }

        PostEntity postEntity = PostEntity.builder()
            .createdAt(LocalDateTime.now())
            .updatedAt(LocalDateTime.now())
            .title(createPostRequest.getTitle())
            .content(createPostRequest.getContent())
            .user(userEntity)
            .shortContent(createPostRequest.getShortContent())
            .vote(voteEntity)
            .build();
        postRepository.save(postEntity);

        return postEntity;
    }
    @Override
    public List<PostEntity> findAllPost() {
        List<PostEntity> PostList = postRepository.findByVoteIsNull();
        return PostList;
    }
    @Override
    public PostEntity patchPost(PatchPostRequest patchPostRequest) {
        UserEntity userEntity = userRepository.getById(patchPostRequest.getUser());
        if (userEntity == null){
            throw new RuntimeException("존재하지 않는 유저입니다.");
        }
        if(patchPostRequest.getContent() ==""){
            throw new RuntimeException("내용을 입력해주시기 바랍니다.");
        }
        if(patchPostRequest.getTitle() == ""){
            throw new RuntimeException("제목을 입력해주시기 바랍니다.");
        }

        PostEntity postEntity = PostEntity.builder()
            .id(patchPostRequest.getId())
            .createdAt(postRepository.getById(patchPostRequest.getId()).getCreatedAt())
            .updatedAt(LocalDateTime.now())
            .title(patchPostRequest.getTitle())
            .content(patchPostRequest.getContent())
            .user(userEntity)
            .shortContent(patchPostRequest.getShortContent())
            .vote(null)
            .build();
        postRepository.save(postEntity);

        return postEntity;
    }

    @Override
    public PostEntity findPost(Long id) {
        PostEntity postEntity = postRepository.getById(id);
        if(postEntity == null){
            throw new RuntimeException("존재하지 않는 게시물 입니다.");
        }
        return postEntity;
    }

    @Override
    public List<PostEntity> findAllVotePost() {
        List<PostEntity> PostList = postRepository.findByVoteIsNotNull();
        return PostList;
    }
}
