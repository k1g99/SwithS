package com.teamk.swiths_api.post.service;

import com.teamk.swiths_api.post.repository.VoteItemDetailRepository;
import com.teamk.swiths_api.post.repository.VoteRepository;
import com.teamk.swiths_api.post.repository.dto.CreateVoteItemDetail;
import com.teamk.swiths_api.post.vote.VoteEntity;
import com.teamk.swiths_api.post.vote.VoteItemDetailEntity;
import com.teamk.swiths_api.user.repository.UserRepository;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VoteItemDetailServiceImpl implements VoteItemDetailService {
    UserRepository userRepository;
    VoteRepository voteRepository;
    VoteItemDetailRepository voteItemDetailRepository;

    @Autowired
    public VoteItemDetailServiceImpl(UserRepository userRepository, VoteRepository voteRepository, VoteItemDetailRepository voteItemDetailRepository){
        this.userRepository = userRepository;
        this.voteRepository = voteRepository;
        this.voteItemDetailRepository = voteItemDetailRepository;
    }
    @Override
    public VoteItemDetailEntity createVoteItemDetail(CreateVoteItemDetail.CreateVoteItemDetailRequest createVoteItemDetailRequest) {
        UserEntity userEntity = userRepository.getById(createVoteItemDetailRequest.getUser());
        VoteEntity voteEntity = voteRepository.getById(createVoteItemDetailRequest.getVote());
        if(voteEntity == null){
            throw new RuntimeException("존재하지 않는 투표입니다.");
        }
        if(userEntity == null){
            throw new RuntimeException("존재하지 않는 유저입니다.");
        }

        VoteItemDetailEntity voteItemDetailEntity = VoteItemDetailEntity.builder()
            .user(userEntity)
            .vote(voteEntity)
            .endTime(createVoteItemDetailRequest.getEndAt())
            .startTime(createVoteItemDetailRequest.getStartAt())
            .build();
        voteItemDetailRepository.save(voteItemDetailEntity);

        return voteItemDetailEntity;
    }

    @Override
    public List<VoteItemDetailEntity> findVoteItemDetailByVote(Long vote) {
        VoteEntity voteEntity = voteRepository.getById(vote);
        if(voteEntity == null){
            throw new RuntimeException("존재하지 않는 투표입니다.");
        }
        return voteItemDetailRepository.findByVote(voteEntity);

    }
}
