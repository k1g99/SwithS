package com.teamk.swiths_api.post.service;

import com.teamk.swiths_api.club.repository.ClubEntity;
import com.teamk.swiths_api.club.repository.ClubRepository;
import com.teamk.swiths_api.post.repository.VoteRepository;
import com.teamk.swiths_api.post.repository.dto.CreateVoteItem.*;
import com.teamk.swiths_api.post.repository.VoteItemRepository;
import com.teamk.swiths_api.post.vote.VoteEntity;
import com.teamk.swiths_api.post.vote.VoteItemEntity;
import com.teamk.swiths_api.user.repository.entity.Day;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VoteItemServiceImpl implements VoteItemService {
    private static final int START_HOUR = 9;
    private VoteItemRepository voteItemRepository;
    private VoteRepository voteRepository;
    private ClubRepository clubRepository;

    @Autowired
    public VoteItemServiceImpl(VoteItemRepository voteItemRepository, VoteRepository voteRepository,ClubRepository clubRepository){
        this.voteItemRepository = voteItemRepository;
        this.voteRepository = voteRepository;
        this.clubRepository = clubRepository;
    }

    @Override
    public VoteItemEntity createVoteitem(CreateVoteItemRequest createVoteItemRequest) {

        return null;
    }

    @Override
    public List<VoteItemEntity> getVoteItemByVote(Long vote) {
        VoteEntity voteEntity = voteRepository.getById(vote);
        if (!voteItemRepository.existsByVote(voteEntity)) {
            throw new RuntimeException("저장되어 있는 투표가 없습니다.");
        }
        return voteItemRepository.findByVote(voteEntity);
    }

    @Override
    public List<VoteItemEntity> createVoteItemByTimetalbe(Long clubId, Long vote) {
        ClubEntity clubEntity = clubRepository.getById(clubId);
        VoteEntity voteEntity = voteRepository.getById(vote);
        List<Long> TimetableList = new ArrayList<>();
        TimetableList.add(clubEntity.getTimetableMon());
        TimetableList.add(clubEntity.getTimetableTue());
        TimetableList.add(clubEntity.getTimetableWed());
        TimetableList.add(clubEntity.getTimetableThu());
        TimetableList.add(clubEntity.getTimetableFri());
        TimetableList.add(clubEntity.getTimetableSat());
        TimetableList.add(clubEntity.getTimetableSun());
        List<VoteItemEntity> VoteItemList = new ArrayList<>();

        for (int i = 0; i < 7; i++) {
            Day day = Day.values()[i];
            int check = 0;
            int cnt = 1;
            LocalTime startTime = null;
            LocalTime endTime = null;
            for (int j = 0; j < 60; i++) {
                long resultAnd = (TimetableList.get(i) & (1L << j));
                if (resultAnd == 0) {
                    if (check == 0) {
                        startTime = LocalTime.of(START_HOUR, 0).plusMinutes(j * 15);
                        check = 1;
                        cnt = 1;
                    } else {
                        cnt++;
                    }
                } else if (check == 1) {

                    check = 0;
                    endTime = startTime.plusMinutes(cnt * 15);
                    VoteItemEntity voteItemEntity = VoteItemEntity.builder()
                        .vote(voteEntity)
                        .endTime(endTime)
                        .startTime(startTime)
                        .day(day)
                        .build();
                    VoteItemList.add(voteItemEntity);
                    voteItemRepository.save(voteItemEntity);
                }
            }

        }
        return VoteItemList;
    }
}
