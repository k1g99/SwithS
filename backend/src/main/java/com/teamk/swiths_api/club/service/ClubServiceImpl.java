package com.teamk.swiths_api.club.service;

import com.teamk.swiths_api.club.repository.Category;
import com.teamk.swiths_api.club.repository.ClubEntity;
import com.teamk.swiths_api.club.repository.ClubRepository;
import com.teamk.swiths_api.club.repository.dto.CreateClub.CreateClubRequest;
import com.teamk.swiths_api.global.MajorEntity;
import com.teamk.swiths_api.global.MajorRepository;
import com.teamk.swiths_api.user.repository.UserRepository;
import com.teamk.swiths_api.user.repository.entity.UserEntity;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClubServiceImpl implements ClubService {

    MajorRepository majorRepository;
    ClubRepository clubRepository;
    UserRepository userRepository;

    @Autowired
    public ClubServiceImpl(MajorRepository majorRepository, ClubRepository clubRepository,
        UserRepository userRepository) {
        this.majorRepository = majorRepository;
        this.clubRepository = clubRepository;
        this.userRepository = userRepository;
    }

    @Override
    public ClubEntity createClub(CreateClubRequest createClubRequest) {
        // 만약에 user id가 아니라면 user validation하는 로직 확인 필요
        // 실제 존재하는 user인지 확인 후 UserEntity로 저장
        UserEntity userEntity = userRepository.getById(createClubRequest.getLeaderId());
        if (userEntity == null) {
            throw new RuntimeException("존재하지 않는 유저입니다.");
        }

        // Major DB에서 FK로 가져오기
        MajorEntity majorEntity = majorRepository.findByName(createClubRequest.getMajor());
        if (majorEntity == null) {
            throw new RuntimeException("존재하지 않는 전공입니다.");
        }

        // db에 저장
        ClubEntity clubEntity = ClubEntity.builder()
            .name(createClubRequest.getName())
            .description(createClubRequest.getDescription())
            .category(Category.valueOf(createClubRequest.getCategory()))
            .leader(userEntity) // userId 가져오기 -> 현재는 임시로 1로 설정
            .startAt(createClubRequest.getStartAt()) // 프론트에서 형식 맞춰서 넘겨주기
            .endAt(createClubRequest.getEndAt())
            .numRecruit(createClubRequest.getNumRecruit())
            .major(majorEntity) // optional
            .build();
        clubRepository.save(clubEntity);

        return clubEntity; // 여기도 마찬가지,, 리턴하는게 맞음?
    }
}
