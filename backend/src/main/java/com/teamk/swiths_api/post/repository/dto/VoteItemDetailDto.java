package com.teamk.swiths_api.post.repository.dto;

import com.teamk.swiths_api.post.vote.VoteEntity;
import com.teamk.swiths_api.post.vote.VoteItemDetailEntity;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class VoteItemDetailDto {
    private Long id;
    private LocalDateTime startAt;
    private LocalDateTime endAt;
    private String username;


    public static VoteItemDetailDto fromEntity(VoteItemDetailEntity voteItemDetailEntity) {
        VoteItemDetailDto dto = new VoteItemDetailDto();
        dto.setId(voteItemDetailEntity.getId());
        dto.setStartAt(voteItemDetailEntity.getStartTime());
        dto.setEndAt(voteItemDetailEntity.getStartTime());
        dto.setUsername(voteItemDetailEntity.getUser().getUsername()); // 예시로 user 엔터티에서 username을 가져오는 것이라고 가정

        return dto;
    }
}
