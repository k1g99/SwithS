package com.teamk.swiths_api.post.dto;

import com.teamk.swiths_api.post.repository.PostEntity;
import com.teamk.swiths_api.post.vote.VoteEntity;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class PostDto {
    private Long id;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
    private String username;
    private String title;
    private String content;
    private String shortContent;
    private VoteEntity vote;

    public static PostDto fromEntity(PostEntity postEntity) {
        PostDto postDto = new PostDto();
        postDto.setId(postEntity.getId());
        postDto.setCreateAt(postEntity.getCreatedAt());
        postDto.setUpdateAt(postEntity.getUpdatedAt());
        postDto.setUsername(postEntity.getUser().getUsername());
        postDto.setTitle(postEntity.getTitle());
        postDto.setContent(postEntity.getContent());
        postDto.setShortContent(postEntity.getShortContent());
        if(postEntity.getVote() == null){
            postDto.setVote(null);
        }else{
            postDto.setVote(postEntity.getVote());
        }


        return postDto;
    }
}
