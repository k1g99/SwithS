package com.teamk.swiths_api.post.service;

import com.teamk.swiths_api.club.repository.ClubRepository;
import com.teamk.swiths_api.post.repository.VoteRepository;
import com.teamk.swiths_api.post.repository.dto.CreateVote.*;
import com.teamk.swiths_api.post.vote.VoteEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class VoteServiceimpl implements VoteService {
    private VoteRepository voteRepository;
    private ClubRepository clubRepository;
    @Autowired
    public VoteServiceimpl(VoteRepository voteRepository, ClubRepository clubRepository) {
        this.voteRepository = voteRepository;
        this.clubRepository = clubRepository;
    }
    @Override
    public VoteEntity createVote(CreateVoteRequest createVoteRequest){
        // 타임테이블 비교 후 자동생성
        VoteEntity voteEntity = VoteEntity.builder()
            .title(createVoteRequest.getTitle())
            .createdAt(createVoteRequest.getCreateAt())
            .endAt(createVoteRequest.getEndAt())
            .build();
        voteRepository.save(voteEntity);
        return voteEntity;
    }

    @Override
    public VoteEntity findVote(Long id) {
        if(!voteRepository.existsById(id)){
            throw new RuntimeException("저장되어있는 투표가 없습니다.");
        }

        return voteRepository.getById(id);
    }
}
