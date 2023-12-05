package com.teamk.swiths_api.post;

import com.teamk.swiths_api.post.dto.CreatePost.*;
import com.teamk.swiths_api.post.dto.PatchPost.*;
import com.teamk.swiths_api.post.vote.VoteEntity;
import com.teamk.swiths_api.user.repository.UserRepository;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {
    PostRepository postRepository;
    UserRepository userRepository;
    //vote 추가
    @Autowired
    public PostServiceImpl(PostRepository postRepository,UserRepository userRepository){
        this.postRepository = postRepository;
        this.userRepository = userRepository;
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

        PostEntity postEntity = PostEntity.builder()
            .createdAt(LocalDateTime.now())
            .updatedAt(LocalDateTime.now())
            .title(createPostRequest.getTitle())
            .content(createPostRequest.getContent())
            .user(userEntity)
            .shortContent(createPostRequest.getShortContent())
            .vote(null)
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
    public List<PostEntity> findAllVotePost() {
        List<PostEntity> PostList = postRepository.findByVoteIsNotNull();
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
    public PostEntity createPostVote(CreatePostVoteRequest createPostVoteRequest) {

        return null;
    }

    @Override
    public PostEntity patchPostVote(PatchPostVoteRequest patchPostVoteRequest) {

        return null;
    }
}
