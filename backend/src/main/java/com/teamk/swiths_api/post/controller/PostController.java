package com.teamk.swiths_api.post.controller;

import com.teamk.swiths_api.post.dto.CreatePost.*;
import com.teamk.swiths_api.post.dto.FindPost;
import com.teamk.swiths_api.post.dto.FindPost.*;
import com.teamk.swiths_api.post.dto.PatchPost;
import com.teamk.swiths_api.post.dto.PatchPost.*;
import com.teamk.swiths_api.post.dto.PostDto;
import com.teamk.swiths_api.post.repository.PostEntity;
import com.teamk.swiths_api.post.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequiredArgsConstructor
@RequestMapping("/post")
public class PostController {
    private final PostService postService;
    @GetMapping("{club}")
    public FindAllPostResponse findAllPost(@PathVariable Long club){
        List<PostEntity> PostLists = postService.findAllPost(club);
        List<PostDto> PostDtos = PostLists.stream()
            .map(PostDto::fromEntity)
            .collect(Collectors.toList());

        FindAllPostResponse result = new FindAllPostResponse(200, true, "모든 공지사항 조회에 성공했습니다.", PostDtos);
        return result;
    }


    @GetMapping("/detail/{id}")
    public FindPostResponse findPost(@PathVariable Long id){
        PostEntity postEntity = postService.findPost(id);
        PostDto postDto = PostDto.fromEntity(postEntity);

        FindPostResponse result = new FindPostResponse(200, true, "공지사항 조회에 성공했습니다.", postDto);
        return result;
    }

    @PatchMapping({"/{id}"})
    public PatchPostResponse patchPost(@PathVariable Long id, @RequestBody PatchPostRequest patchPostRequest) {
        patchPostRequest.setId(id);
        postService.patchPost(patchPostRequest);
        PatchPostResponse result = new PatchPostResponse(200, true, "공지사항수정에 성공하였습니다.");
        return result;
    }


    @PostMapping("{club}") //ㅇㅇ
    public CreatePostResponse createPost(@RequestBody CreatePostRequest createPostRequest,@PathVariable Long club){
        createPostRequest.setClub(club);
        postService.createPost(createPostRequest);
        CreatePostResponse result = new CreatePostResponse(200, true,"공지사항 생성에 성공하였습니다.");
        return result;
    }

}
