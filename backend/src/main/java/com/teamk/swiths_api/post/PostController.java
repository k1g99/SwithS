package com.teamk.swiths_api.post;

import com.teamk.swiths_api.post.dto.CreatePost.*;
import com.teamk.swiths_api.post.dto.FindPost.*;
import com.teamk.swiths_api.post.dto.PatchPost;
import com.teamk.swiths_api.post.dto.PatchPost.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/post")
public class PostController {
    private final PostService postService;
    @GetMapping()
    public FindAllPostResponse findAllPost(){
        List<PostEntity> PostLists = postService.findAllPost();
        FindAllPostResponse result = new FindAllPostResponse(200, true, "모든 공지사항 조회에 성공했습니다.", PostLists);
        return result;
    }


    @GetMapping("vote")
    public FindAllPostResponse findAllPostVote(){
        List<PostEntity> PostLists = postService.findAllVotePost();
        FindAllPostResponse result = new FindAllPostResponse(200, true, "모든 공지사항 조회에 성공했습니다.", PostLists);
        return result;
    }

    @PatchMapping({"/{id}"})
    public PatchPostResponse patchPost(@PathVariable Long id, @RequestBody PatchPostRequest patchPostRequest) {
        patchPostRequest.setId(id);
        postService.patchPost(patchPostRequest);
        PatchPostResponse result = new PatchPostResponse(200, true, "공지사항수정에 성공하였습니다.");
        return result;
    }

    @PatchMapping("vote/{id}")
    public PatchPostResponse patchPostVote(@PathVariable Long id, @RequestBody PatchPostVoteRequest patchPostVoteRequest) {
        patchPostVoteRequest.setId(id);
        postService.patchPostVote(patchPostVoteRequest);
        PatchPostResponse result = new PatchPostResponse(200, true, "공지사항수정에 성공하였습니다.");
        return result;
    }

    @PostMapping()
    public CreatePostResponse createPost(@RequestBody CreatePostRequest createPostRequest){
        postService.createPost(createPostRequest);
        CreatePostResponse result = new CreatePostResponse(200, true,"공지사항 생성에 성공하였습니다.");
        return result;
    }

    @PostMapping("vote")
    public CreatePostResponse createPostVote(@RequestBody CreatePostVoteRequest createPostVoteRequest){
        postService.createPostVote(createPostVoteRequest);
        CreatePostResponse result = new CreatePostResponse(200, true,"공지사항 생성에 성공하였습니다.");
        return result;
    }
}
