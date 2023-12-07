package com.teamk.swiths_api.post.repository.dto;

import com.teamk.swiths_api.post.vote.VoteEntity;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class VoteDto {
    private Long id;
    private LocalDateTime startAt;
    private LocalDateTime endAt;
    private String title;

    public static VoteDto fromEntity(VoteEntity voteEntity) {
        VoteDto voteDto = new VoteDto();
        voteDto.setId(voteEntity.getId());
        voteDto.setStartAt(voteEntity.getStartAt());
        voteDto.setEndAt(voteEntity.getEndAt());
        voteDto.setTitle(voteEntity.getTitle());

        return voteDto;
    }
}
